/**
 * Simple template engine with layout support and nested structures
 */

export interface TemplateContext {
  [key: string]: any;
}

export interface TemplatePartials {
  [key: string]: string;
}

class TemplateEngine {
  private layouts: Map<string, string> = new Map();
  private partials: Map<string, string> = new Map();

  /**
   * Register a layout template
   */
  public registerLayout(name: string, template: string): void {
    this.layouts.set(name, template);
  }

  /**
   * Register a partial template
   */
  public registerPartial(name: string, template: string): void {
    this.partials.set(name, template);
  }

  /**
   * Load template from file (for Node.js environment)
   */
  public async loadTemplateFromFile(filePath: string): Promise<string> {
    // In browser environment, we'll use fetch
    if (typeof fetch !== 'undefined') {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`Failed to load template: ${filePath}`);
      }
      return await response.text();
    }
    throw new Error('File loading not supported in this environment');
  }

  /**
   * Load and register a layout from file
   */
  public async loadLayoutFromFile(name: string, filePath: string): Promise<void> {
    const template = await this.loadTemplateFromFile(filePath);
    this.registerLayout(name, template);
  }

  /**
   * Load and register a partial from file
   */
  public async loadPartialFromFile(name: string, filePath: string): Promise<void> {
    const template = await this.loadTemplateFromFile(filePath);
    this.registerPartial(name, template);
  }

  /**
   * Process partials in template
   */
  private processPartials(template: string, context: TemplateContext): string {
    let result = template;
    const partialRegex = /{{>\s*([a-zA-Z0-9_-]+)\s*(?:\s+([a-zA-Z0-9_-]+))?\s*}}/g;
    
    result = result.replace(partialRegex, (match, partialName, contextRef) => {
      const partialTemplate = this.partials.get(partialName);
      if (!partialTemplate) {
        console.warn(`Partial "${partialName}" not found`);
        return match;
      }
      
      // Use referenced context or current context
      const partialContext = contextRef ? (context[contextRef] || {}) : context;
      return this.processVariables(partialTemplate, partialContext);
    });
    
    return result;
  }

  /**
   * Process variable substitutions
   */
  private processVariables(template: string, context: TemplateContext): string {
    let result = template;
    
    // Handle {{variable}} syntax
    const varRegex = /{{\s*([a-zA-Z0-9_.]+)\s*}}/g;
    result = result.replace(varRegex, (match, path) => {
      const value = this.getNestedValue(context, path);
      return value !== undefined ? String(value) : '';
    });
    
    // Handle {{#if condition}}...{{/if}} syntax
    const ifRegex = /{{#\s*if\s+([a-zA-Z0-9_.]+)\s*}}([\s\S]*?){{\s*\/\s*if\s*}}/g;
    result = result.replace(ifRegex, (match, condition, content) => {
      const value = this.getNestedValue(context, condition);
      return value ? content : '';
    });

    // Handle {{#each array}}...{{/each}} syntax
    const eachRegex = /{{#\s*each\s+([a-zA-Z0-9_.]+)\s*}}([\s\S]*?){{\s*\/\s*each\s*}}/g;
    result = result.replace(eachRegex, (match, arrayPath, content) => {
      const array = this.getNestedValue(context, arrayPath);
      if (!Array.isArray(array)) {
        return '';
      }
      return array.map((item: any, index: number) => {
        const itemContext = { ...context, this: item, index };
        return this.processVariables(content, itemContext);
      }).join('');
    });
    
    return result;
  }

  /**
   * Get nested value from context using dot notation
   */
  private getNestedValue(context: TemplateContext, path: string): any {
    const parts = path.split('.');
    let value: any = context;
    
    for (const part of parts) {
      if (value === undefined || value === null) {
        return undefined;
      }
      value = value[part];
    }
    
    return value;
  }

  /**
   * Process layout template
   */
  private processLayout(layoutTemplate: string, content: string, context: TemplateContext): string {
    let result = layoutTemplate;
    
    // Replace {{{content}}} or {{content}} with rendered content
    result = result.replace(/{{{?\s*content\s*}}}?/, content);
    
    return this.processVariables(result, context);
  }

  /**
   * Render a template with optional layout
   */
  public render(
    template: string,
    context: TemplateContext = {},
    layoutName?: string
  ): string {
    // First process partials
    let result = this.processPartials(template, context);
    
    // Then process variables and control structures
    result = this.processVariables(result, context);
    
    // Apply layout if specified
    if (layoutName) {
      const layoutTemplate = this.layouts.get(layoutName);
      if (layoutTemplate) {
        result = this.processLayout(layoutTemplate, result, context);
      }
    }
    
    return result;
  }

  /**
   * Render template from file
   */
  public async renderFromFile(
    filePath: string,
    context: TemplateContext = {},
    layoutName?: string
  ): Promise<string> {
    const template = await this.loadTemplateFromFile(filePath);
    return this.render(template, context, layoutName);
  }
}

// Export singleton instance
export const templateEngine = new TemplateEngine();
export default templateEngine;

/**
 * Template Engine - Шаблонизатор с поддержкой layout, partials и загрузки из файлов
 */

interface TemplateCache {
    [key: string]: string;
}

class TemplateEngine {
    private cache: TemplateCache = {};
    private templatesPath: string = 'templates';

    /**
     * Загрузка шаблона из файла
     */
    async loadTemplate(name: string): Promise<string> {
        if (this.cache[name]) {
            return this.cache[name];
        }

        try {
            const response = await fetch(`${this.templatesPath}/${name}.html`);
            if (!response.ok) {
                throw new Error(`Template ${name} not found`);
            }
            const content = await response.text();
            this.cache[name] = content;
            return content;
        } catch (error) {
            console.error(`Error loading template ${name}:`, error);
            return `<div class="alert alert-danger">Error loading template: ${name}</div>`;
        }
    }

    /**
     * Загрузка partial (частичного шаблона)
     */
    async loadPartial(name: string): Promise<string> {
        return this.loadTemplate(`partials/${name}`);
    }

    /**
     * Рендеринг шаблона с данными
     */
    render(template: string, data: Record<string, any> = {}): string {
        let result = template;

        // Замена переменных {{variable}}
        for (const [key, value] of Object.entries(data)) {
            const regex = new RegExp(`{{${key}}}`, 'g');
            result = result.replace(regex, String(value));
        }

        // Удаление необработанных переменных
        result = result.replace(/{{[^}]+}}/g, '');

        return result;
    }

    /**
     * Рендеринг с использованием layout
     */
    async renderWithLayout(
        layoutName: string,
        contentTemplate: string,
        data: Record<string, any> = {}
    ): Promise<string> {
        const layout = await this.loadTemplate(layoutName);
        const content = await this.loadTemplate(contentTemplate);
        
        const renderedContent = this.render(content, data);
        const fullContent = this.render(layout, { ...data, content: renderedContent });

        return fullContent;
    }

    /**
     * Очистка кэша
     */
    clearCache(): void {
        this.cache = {};
    }
}

export default TemplateEngine;

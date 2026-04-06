export type RoutePath = '/' | '/about' | '/settings';

export interface Route {
  path: RoutePath;
  name: string;
  component: () => Promise<string>;
}

export type RouteChangeListener = (path: RoutePath) => void;

class Router {
  private routes: Map<RoutePath, Route> = new Map();
  private listeners: Set<RouteChangeListener> = new Set();
  private currentPath: RoutePath = '/';

  /**
   * Register a route
   */
  public register(route: Route): void {
    this.routes.set(route.path, route);
  }

  /**
   * Register multiple routes
   */
  public registerAll(routes: Route[]): void {
    routes.forEach(route => this.register(route));
  }

  /**
   * Add a route change listener
   */
  public addListener(listener: RouteChangeListener): void {
    this.listeners.add(listener);
  }

  /**
   * Remove a route change listener
   */
  public removeListener(listener: RouteChangeListener): void {
    this.listeners.delete(listener);
  }

  /**
   * Navigate to a path
   */
  public async navigate(path: RoutePath): Promise<void> {
    const route = this.routes.get(path);
    
    if (!route) {
      console.error(`Route not found: ${path}`);
      return;
    }

    this.currentPath = path;
    
    // Update browser history
    window.history.pushState({ path }, '', path);
    
    // Notify listeners
    this.listeners.forEach(listener => listener(path));
    
    // Update active nav links
    this.updateActiveNavLinks(path);
  }

  /**
   * Handle browser back/forward buttons
   */
  public handlePopState(event: PopStateEvent): void {
    const state = event.state as { path?: RoutePath };
    if (state?.path) {
      this.currentPath = state.path;
      this.listeners.forEach(listener => listener(state.path!));
      this.updateActiveNavLinks(state.path!);
    }
  }

  /**
   * Update active navigation links
   */
  private updateActiveNavLinks(path: RoutePath): void {
    document.querySelectorAll('[data-route]').forEach(link => {
      const routeAttr = link.getAttribute('data-route') as RoutePath;
      if (routeAttr === path) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /**
   * Get current path
   */
  public getCurrentPath(): RoutePath {
    return this.currentPath;
  }

  /**
   * Get route by path
   */
  public getRoute(path: RoutePath): Route | undefined {
    return this.routes.get(path);
  }

  /**
   * Initialize router and intercept link clicks
   */
  public init(): void {
    // Intercept all link clicks
    document.addEventListener('click', (event: Event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a[href]') as HTMLAnchorElement;
      
      if (!link) return;
      
      const href = link.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('#')) return;
      
      // Check if it's a registered route
      const path = href as RoutePath;
      if (this.routes.has(path)) {
        event.preventDefault();
        this.navigate(path);
      }
    });

    // Handle browser back/forward
    window.addEventListener('popstate', (event) => this.handlePopState(event));

    // Initialize from current URL
    const currentPath = window.location.pathname as RoutePath;
    if (this.routes.has(currentPath)) {
      this.currentPath = currentPath;
      this.updateActiveNavLinks(currentPath);
    }
  }
}

// Export singleton instance
export const router = new Router();
export default router;

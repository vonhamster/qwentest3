/**
 * Router - Клиентский роутер для навигации между страницами
 */

interface Route {
    path: string;
    template: string;
    title: string;
    data?: Record<string, any>;
}

interface RouteConfig {
    [path: string]: Route;
}

class Router {
    private routes: RouteConfig = {};
    private templateEngine: any;
    private currentPath: string = '/';
    private appElement: HTMLElement | null = null;

    constructor(templateEngine: any) {
        this.templateEngine = templateEngine;
        this.appElement = document.getElementById('main-content');
        this.init();
    }

    /**
     * Инициализация роутера
     */
    private init(): void {
        // Обработка кликов по ссылкам
        document.addEventListener('click', (e: Event) => {
            const target = e.target as HTMLElement;
            const link = target.closest('[data-route]') as HTMLElement;
            
            if (link && link.dataset.route) {
                e.preventDefault();
                const path = link.dataset.route;
                this.navigate(path);
            }
        });

        // Обработка кнопок назад/вперёд в браузере
        window.addEventListener('popstate', () => {
            this.navigate(window.location.pathname, false);
        });

        // Начальная навигация
        this.navigate(window.location.pathname || '/', false);
    }

    /**
     * Регистрация маршрута
     */
    addRoute(path: string, template: string, title: string, data?: Record<string, any>): void {
        this.routes[path] = { path, template, title, data };
    }

    /**
     * Навигация по маршруту
     */
    async navigate(path: string, pushState: boolean = true): Promise<void> {
        // Нормализация пути
        if (!path.startsWith('/')) {
            path = '/' + path;
        }

        const route = this.routes[path] || this.routes['/'];
        
        if (!route) {
            console.error(`Route ${path} not found`);
            return;
        }

        this.currentPath = path;

        // Обновление URL в истории
        if (pushState) {
            history.pushState({ path }, '', path);
        }

        // Рендеринг страницы
        await this.render(route);

        // Обновление активного состояния в меню
        this.updateActiveNav(path);
    }

    /**
     * Рендеринг страницы
     */
    private async render(route: Route): Promise<void> {
        if (!this.appElement) return;

        try {
            const engine = new this.templateEngine();
            const html = await engine.renderWithLayout(
                'layout',
                route.template,
                { 
                    title: route.title,
                    ...route.data 
                }
            );

            // Извлекаем только контент из main
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const mainContent = doc.querySelector('.content')?.innerHTML || html;

            this.appElement.innerHTML = mainContent;
        } catch (error) {
            console.error('Error rendering route:', error);
            this.appElement.innerHTML = `
                <div class="alert alert-danger">
                    Error loading page: ${route.template}
                </div>
            `;
        }
    }

    /**
     * Обновление активного состояния навигации
     */
    private updateActiveNav(path: string): void {
        document.querySelectorAll('[data-route]').forEach((el: Element) => {
            const element = el as HTMLElement;
            if (element.dataset.route === path) {
                element.classList.add('active', 'text-primary');
            } else {
                element.classList.remove('active', 'text-primary');
            }
        });
    }

    /**
     * Получение текущего пути
     */
    getCurrentPath(): string {
        return this.currentPath;
    }
}

export default Router;

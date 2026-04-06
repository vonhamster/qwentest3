/**
 * Main Application Entry Point - TypeScript version
 */

import Router from './router';
import TemplateEngine from './template-engine';

interface Route {
    path: string;
    template: string;
    title: string;
}

// Определение маршрутов приложения
const routes: Route[] = [
    { path: '/', template: 'pages/home', title: 'Главная' },
    { path: '/about', template: 'pages/about', title: 'О приложении' },
    { path: '/settings', template: 'pages/settings', title: 'Настройки' }
];

// Инициализация приложения после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    console.log('Application initialized');

    // Создание экземпляра роутера
    const router = new Router(TemplateEngine);

    // Регистрация всех маршрутов
    routes.forEach(route => {
        router.addRoute(
            route.path,
            route.template,
            route.title
        );
    });

    // Начальная навигация на главную страницу
    router.navigate('/');

    console.log('Router initialized with', routes.length, 'routes');
});

// Обработка ошибок
window.addEventListener('error', (event: ErrorEvent) => {
    console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
    console.error('Unhandled promise rejection:', event.reason);
});

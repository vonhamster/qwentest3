import { router, type Route } from './router';
import { templateEngine } from './template-engine';
import { homeTemplate } from './pages/home';
import { aboutTemplate } from './pages/about';
import { settingsTemplate } from './pages/settings';
import { mainLayout } from './layouts/main-layout';
import { headerPartial, footerPartial, cardPartial, listItemPartial } from './components/partials';

/**
 * Initialize the application
 */
async function initApp(): Promise<void> {
  // Register layouts
  templateEngine.registerLayout('main', mainLayout);

  // Register partials
  templateEngine.registerPartial('header', headerPartial);
  templateEngine.registerPartial('footer', footerPartial);
  templateEngine.registerPartial('card', cardPartial);
  templateEngine.registerPartial('listItem', listItemPartial);

  // Define routes
  const routes: Route[] = [
    {
      path: '/',
      name: 'home',
      component: async () => {
        const context = {
          title: 'Главная',
          footerText: '© 2024 Tauri App'
        };
        return templateEngine.render(homeTemplate, context);
      }
    },
    {
      path: '/about',
      name: 'about',
      component: async () => {
        const context = {
          title: 'О приложении',
          footerText: '© 2024 Tauri App'
        };
        return templateEngine.render(aboutTemplate, context);
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: async () => {
        const context = {
          title: 'Настройки',
          footerText: '© 2024 Tauri App'
        };
        return templateEngine.render(settingsTemplate, context);
      }
    }
  ];

  // Register all routes
  router.registerAll(routes);

  // Add route change listener to render content
  router.addListener(async (path) => {
    await renderRoute(path);
  });

  // Initialize router (intercept link clicks)
  router.init();

  // Render initial route
  const initialPath = router.getCurrentPath();
  await renderRoute(initialPath);

  console.log('Application initialized successfully');
}

/**
 * Render a route
 */
async function renderRoute(path: string): Promise<void> {
  const appContainer = document.getElementById('app');
  
  if (!appContainer) {
    console.error('App container not found');
    return;
  }

  const route = router.getRoute(path as '/' | '/about' | '/settings');
  
  if (!route) {
    appContainer.innerHTML = '<div class="alert alert-danger">Страница не найдена</div>';
    return;
  }

  try {
    const content = await route.component();
    appContainer.innerHTML = content;
    
    // Initialize Bootstrap components if needed
    initializeBootstrapComponents();
  } catch (error) {
    console.error('Error rendering route:', error);
    appContainer.innerHTML = '<div class="alert alert-danger">Ошибка загрузки страницы</div>';
  }
}

/**
 * Initialize Bootstrap components (accordion, etc.)
 */
function initializeBootstrapComponents(): void {
  // Bootstrap 5 components are auto-initialized via data attributes
  // But we can add custom initialization here if needed
  
  // Example: Initialize tooltips
  // const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  // tooltipTriggerList.forEach(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

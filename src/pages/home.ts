/**
 * Home page template
 */
export const homeTemplate = `
<div class="home-page">
  <div class="card mb-3 bg-primary text-white">
    <div class="card-body text-center">
      <h2 class="card-title h4">Добро пожаловать!</h2>
      <p class="card-text">Tauri + Bootstrap 5 + TypeScript</p>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-header">
      <h5 class="mb-0">О приложении</h5>
    </div>
    <div class="card-body">
      <p class="card-text">
        Это базовое приложение, созданное с использованием:
      </p>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">🦀 <strong>Tauri</strong> - фреймворк для создания десктопных и мобильных приложений</li>
        <li class="list-group-item">🎨 <strong>Bootstrap 5</strong> - популярная CSS-библиотека</li>
        <li class="list-group-item">📘 <strong>TypeScript</strong> - типизированный JavaScript</li>
        <li class="list-group-item">📱 <strong>Android</strong> - целевая платформа</li>
      </ul>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-header">
      <h5 class="mb-0">Возможности</h5>
    </div>
    <div class="card-body">
      <div class="row g-2">
        <div class="col-6">
          <div class="p-3 border rounded text-center">
            <span class="d-block fs-4">🚀</span>
            <small>Быстрая работа</small>
          </div>
        </div>
        <div class="col-6">
          <div class="p-3 border rounded text-center">
            <span class="d-block fs-4">📱</span>
            <small>Мобильный UI</small>
          </div>
        </div>
        <div class="col-6">
          <div class="p-3 border rounded text-center">
            <span class="d-block fs-4">🔄</span>
            <small>Роутинг</small>
          </div>
        </div>
        <div class="col-6">
          <div class="p-3 border rounded text-center">
            <span class="d-block fs-4">📄</span>
            <small>Шаблоны</small>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-header">
      <h5 class="mb-0">Статистика</h5>
    </div>
    <div class="card-body">
      <div class="row text-center">
        <div class="col-4">
          <h3 class="text-primary mb-0">3</h3>
          <small class="text-muted">Страницы</small>
        </div>
        <div class="col-4">
          <h3 class="text-success mb-0">100%</h3>
          <small class="text-muted">TypeScript</small>
        </div>
        <div class="col-4">
          <h3 class="text-info mb-0">5</h3>
          <small class="text-muted">Bootstrap</small>
        </div>
      </div>
    </div>
  </div>

  <div class="alert alert-info d-flex align-items-center" role="alert">
    <span class="me-2">ℹ️</span>
    <div>
      Используйте нижнюю навигацию для переключения между страницами.
    </div>
  </div>
</div>
`;

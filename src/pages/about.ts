/**
 * About page template
 */
export const aboutTemplate = `
<div class="about-page">
  <div class="card mb-3">
    <div class="card-header bg-primary text-white">
      <h5 class="mb-0">О приложении</h5>
    </div>
    <div class="card-body">
      <p class="card-text">
        Базовое Tauri-приложение с использованием Bootstrap 5 и TypeScript.
      </p>
      <h6 class="mt-3">Технологии:</h6>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Tauri v2
          <span class="badge bg-primary rounded-pill">Framework</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Bootstrap 5.3.3
          <span class="badge bg-primary rounded-pill">UI</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          TypeScript
          <span class="badge bg-primary rounded-pill">Language</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          Vite
          <span class="badge bg-primary rounded-pill">Build</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-header">
      <h5 class="mb-0">Платформы</h5>
    </div>
    <div class="card-body">
      <div class="row g-2">
        <div class="col-6">
          <div class="p-3 border rounded text-center bg-light">
            <span class="d-block fs-4">📱</span>
            <strong>Android</strong>
            <small class="d-block text-muted">Мобильное приложение</small>
          </div>
        </div>
        <div class="col-6">
          <div class="p-3 border rounded text-center bg-light">
            <span class="d-block fs-4">🐧</span>
            <strong>Linux</strong>
            <small class="d-block text-muted">Десктопное приложение</small>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-header">
      <h5 class="mb-0">Функциональность</h5>
    </div>
    <div class="card-body">
      <ul class="list-unstyled mb-0">
        <li class="mb-2">✅ Клиентский роутер для навигации</li>
        <li class="mb-2">✅ Шаблонизатор с поддержкой layout</li>
        <li class="mb-2">✅ Вложенные структуры шаблонов</li>
        <li class="mb-2">✅ Загрузка шаблонов из файлов</li>
        <li class="mb-2">✅ Локальная версия Bootstrap 5</li>
        <li class="mb-2">✅ Адаптивный мобильный интерфейс</li>
      </ul>
    </div>
  </div>
</div>
`;

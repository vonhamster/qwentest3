/**
 * About page template
 */
export const aboutTemplate = `
<div class="about-page">
  <div class="card mb-3">
    <div class="card-header bg-info text-white">
      <h5 class="mb-0">О приложении</h5>
    </div>
    <div class="card-body">
      <p class="card-text">
        Это демонстрационное приложение показывает возможности связки 
        <strong>Tauri + Bootstrap 5 + TypeScript</strong>.
      </p>
      
      <h6 class="mt-4">Технологии:</h6>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>Tauri Framework</span>
          <span class="badge bg-secondary">v2</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>Bootstrap</span>
          <span class="badge bg-primary">v5.3</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>TypeScript</span>
          <span class="badge bg-info">ES2020</span>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>Vite</span>
          <span class="badge bg-warning text-dark">Build Tool</span>
        </li>
      </ul>

      <h6 class="mt-4">Архитектура:</h6>
      <div class="accordion" id="architectureAccordion">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
              📁 Структура проекта
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#architectureAccordion">
            <div class="accordion-body">
              <code class="d-block mb-2">src/</code>
              <code class="d-block mb-2">├── main.ts</code>
              <code class="d-block mb-2">├── router.ts</code>
              <code class="d-block mb-2">├── template-engine.ts</code>
              <code class="d-block mb-2">├── pages/</code>
              <code class="d-block mb-2">├── layouts/</code>
              <code class="d-block mb-2">└── components/</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-body text-center">
      <p class="text-muted mb-2">Создано с помощью Tauri</p>
      <a href="/" class="btn btn-primary">На главную</a>
    </div>
  </div>
</div>
`;

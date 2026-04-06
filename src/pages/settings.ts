/**
 * Settings page template
 */
export const settingsTemplate = `
<div class="settings-page">
  <div class="card mb-3">
    <div class="card-header bg-primary text-white">
      <h5 class="mb-0">Настройки приложения</h5>
    </div>
    <div class="card-body">
      <form>
        <div class="mb-3">
          <label class="form-label">Язык интерфейса</label>
          <select class="form-select">
            <option value="ru" selected>Русский</option>
            <option value="en">English</option>
          </select>
        </div>
        
        <div class="mb-3 form-check form-switch">
          <input class="form-check-input" type="checkbox" id="darkMode" />
          <label class="form-check-label" for="darkMode">Тёмная тема</label>
        </div>
        
        <div class="mb-3 form-check form-switch">
          <input class="form-check-input" type="checkbox" id="notifications" checked />
          <label class="form-check-label" for="notifications">Уведомления</label>
        </div>
        
        <div class="mb-3">
          <label class="form-label">Размер шрифта</label>
          <input type="range" class="form-range" min="12" max="24" value="16" />
        </div>
      </form>
    </div>
    <div class="card-footer text-muted">
      <small>Настройки применяются автоматически</small>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-header">
      <h5 class="mb-0">О системе</h5>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between">
          <span>Версия приложения</span>
          <span class="text-muted">1.0.0</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>Tauri</span>
          <span class="text-muted">v2.x</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>Bootstrap</span>
          <span class="text-muted">5.3.3</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>TypeScript</span>
          <span class="text-muted">5.x</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="d-grid gap-2">
    <button class="btn btn-outline-primary">Проверить обновления</button>
    <button class="btn btn-outline-danger">Сбросить настройки</button>
  </div>
</div>
`;

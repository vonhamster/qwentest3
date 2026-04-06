/**
 * Settings page template
 */
export const settingsTemplate = `
<div class="settings-page">
  <div class="card mb-3">
    <div class="card-header bg-secondary text-white">
      <h5 class="mb-0">Настройки</h5>
    </div>
    <div class="card-body">
      <form>
        <div class="mb-3">
          <label class="form-label">Тема оформления</label>
          <select class="form-select">
            <option value="light" selected>Светлая</option>
            <option value="dark">Тёмная</option>
            <option value="auto">Автоматически</option>
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label">Язык интерфейса</label>
          <select class="form-select">
            <option value="ru" selected>Русский</option>
            <option value="en">English</option>
          </select>
        </div>

        <div class="form-check form-switch mb-3">
          <input class="form-check-input" type="checkbox" id="notificationsSwitch" checked>
          <label class="form-check-label" for="notificationsSwitch">Уведомления</label>
        </div>

        <div class="form-check form-switch mb-3">
          <input class="form-check-input" type="checkbox" id="darkModeSwitch">
          <label class="form-check-label" for="darkModeSwitch">Тёмный режим</label>
        </div>

        <div class="d-grid gap-2">
          <button type="button" class="btn btn-primary">Сохранить</button>
          <button type="reset" class="btn btn-outline-secondary">Сбросить</button>
        </div>
      </form>
    </div>
  </div>

  <div class="card mb-3">
    <div class="card-header">
      <h5 class="mb-0">Информация</h5>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between">
          <span>Версия приложения</span>
          <span class="text-muted">1.0.0</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>Платформа</span>
          <span class="text-muted">Android</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span>Размер экрана</span>
          <span class="text-muted" id="screenSize">Определяется...</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="card mb-3 border-danger">
    <div class="card-body text-center">
      <h6 class="text-danger mb-3">⚠️ Опасная зона</h6>
      <button type="button" class="btn btn-outline-danger btn-sm">Очистить данные</button>
    </div>
  </div>
</div>

<script>
  // Update screen size info
  document.addEventListener('DOMContentLoaded', function() {
    const screenSizeEl = document.getElementById('screenSize');
    if (screenSizeEl) {
      screenSizeEl.textContent = window.innerWidth + 'x' + window.innerHeight;
    }
  });
</script>
`;

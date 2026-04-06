# Tauri Bootstrap App

Базовое приложение на Tauri с использованием Bootstrap 5 и TypeScript для Android.

## Особенности

- 📱 **Целевая платформа**: Android (телефон)
- 🛠️ **Фреймворк**: Tauri v2
- 🎨 **UI**: Bootstrap 5.3.3 (локальная версия)
- 💻 **Язык**: TypeScript
- 🔀 **Роутинг**: Клиентский роутер для SPA
- 📄 **Шаблоны**: Собственный шаблонизатор с поддержкой:
  - Layout система
  - Частичные шаблоны (partials)
  - Загрузка шаблонов из файлов
  - Переменные в шаблонах {{variable}}

## Структура проекта

```
/workspace
├── dist/                      # Дистрибутив приложения
│   ├── index.html            # Главный HTML файл
│   ├── css/
│   │   └── bootstrap.min.css # Локальная версия Bootstrap CSS
│   ├── js/
│   │   ├── bootstrap.bundle.min.js  # Локальная версия Bootstrap JS
│   │   ├── template-engine.js       # Шаблонизатор
│   │   ├── router.js                # Роутер
│   │   └── app.js                   # Точка входа приложения
│   └── templates/
│       ├── layout.html       # Основной layout шаблон
│       └── pages/
│           ├── home.html     # Главная страница
│           ├── about.html    # Страница "О приложении"
│           └── settings.html # Страница настроек
├── src/
│   └── js/
│       ├── template-engine.ts # Исходный код шаблонизатора (TypeScript)
│       ├── router.ts          # Исходный код роутера (TypeScript)
│       └── app.ts             # Исходный код приложения (TypeScript)
├── src-tauri/                 # Tauri backend (Rust)
├── package.json
├── tsconfig.json
└── README.md
```

## Установка

```bash
npm install
```

## Разработка

Запуск в режиме разработки:

```bash
npm run tauri dev
```

Для Android:

```bash
npm run android:dev
```

## Сборка

Сборка для текущей платформы:

```bash
npm run tauri build
```

Сборка для Android:

```bash
npm run android:build
```

Компиляция TypeScript:

```bash
npm run build
```

## Страницы приложения

1. **Главная** (`/`) - Общая информация о приложении
2. **О приложении** (`/about`) - Информация о технологиях
3. **Настройки** (`/settings`) - Панель настроек

## Навигация

Все ссылки обрабатываются роутером без перезагрузки страницы. 
Нижняя навигационная панель позволяет переключаться между страницами.

## Шаблоны

### Layout

Layout определяется в `dist/templates/layout.html` и содержит:
- Общий HTML каркас
- Подключение CSS и JS
- Нижнюю навигационную панель
- Место для контента `{{content}}`

### Страницы

Страницы хранятся в `dist/templates/pages/` и подключаются через роутер.

### Переменные

В шаблонах поддерживаются переменные вида `{{variable}}`.

## Требования

- Node.js >= 18
- Rust (для Tauri)
- Android Studio (для сборки под Android)

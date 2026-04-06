/**
 * Main layout template
 */
export const mainLayout = `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{title}}</title>
</head>
<body>
  <header class="bg-primary text-white p-3">
    <h1 class="h4 mb-0">{{title}}</h1>
  </header>
  
  <main class="container-fluid py-3">
    {{{content}}}
  </main>
  
  <footer class="bg-light p-3 mt-auto">
    <p class="text-center text-muted mb-0">{{footerText}}</p>
  </footer>
</body>
</html>
`;

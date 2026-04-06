/**
 * Header partial template
 */
export const headerPartial = `
<header class="bg-primary text-white p-3">
  <h1 class="h4 mb-0">{{title}}</h1>
</header>
`;

/**
 * Footer partial template
 */
export const footerPartial = `
<footer class="bg-light p-3 mt-auto">
  <p class="text-center text-muted mb-0">{{footerText}}</p>
</footer>
`;

/**
 * Card partial template
 */
export const cardPartial = `
<div class="card mb-3">
  <div class="card-body">
    <h5 class="card-title">{{this.title}}</h5>
    <p class="card-text">{{this.content}}</p>
    {{#if this.link}}
    <a href="{{this.link}}" class="btn btn-primary btn-sm">Подробнее</a>
    {{/if}}
  </div>
</div>
`;

/**
 * List item partial template
 */
export const listItemPartial = `
<li class="list-group-item d-flex justify-content-between align-items-center">
  <span>{{this.label}}</span>
  {{#if this.badge}}
  <span class="badge bg-primary rounded-pill">{{this.badge}}</span>
  {{/if}}
</li>
`;

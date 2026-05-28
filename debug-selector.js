// Run this in Cypress console to find the correct selector
// cy.get(':nth-child(3) > .row').then($el => console.log($el.html()))

const selectors = [
  // Try different approaches to find the bar chart button
  'button[class*="botao"]',
  '[class*="botao-icone"]',
  '.botao-icone',
  'label > [class*="botao"]',
  'input[type="radio"] + label',
  '.row label .botao-icone',
  '[class*="chart"] button',
  'button:contains("barra")',
  '[class*="bar"]',
  'svg[class*="bar"]'
];

console.log('Attempting to find bar chart selector...');

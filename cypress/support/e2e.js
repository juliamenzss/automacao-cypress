require("./commands");

Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("await is only valid in async functions")) {
    return false; // Return false to prevent the test from failing
  }
  return true;
});

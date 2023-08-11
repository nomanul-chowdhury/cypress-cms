//

// https://on.cypress.io/custom-commands

//

// -- This is a parent command --

// Cypress.Commands.add("login", (email, password) => { ... })

//

// -- This is a child command --

// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })

//

// -- This is a dual command --

// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })

// Allow us to set a username and password if needed.

Cypress.once('uncaught:exception', () => {
 
    return false

}); 

Cypress.Commands.overwrite("visit", (orig, url, options) => {
  options = options || {};

  if (Cypress.env("username") !== undefined) {
    options.auth = {
      username: Cypress.env("username"),

      password: Cypress.env("password"),
    };
  }

  return orig(url, options);
});

Cypress.Commands.overwrite("viewport", (orig, preset, orientation) => {
  // These are based on the DDS breakpoints.

  const new_presets = {
    xl: [Cypress.config("viewportWidth"), Cypress.config("viewportHeight")],

    lg: [1000, 800],

    md: [800, 800],

    sm: [600, 800],

    xs: [500, 800],
  };

  if (new_presets[preset] !== undefined) {
    return cy.viewport(new_presets[preset][0], new_presets[preset][1]);
  } else {
    return orig(preset, orientation);
  }
});


# TomaTodo

## Description

Tomato timer for focusing on your tasks

# Use-cases or Scenarios

## Sing in

1. The user isn't signed in and sees `Sign in` button in the header (Landing Component)
2. The user clicks `Sign in` button, sees Auth0 login page, uses his/her Google Account, and the app is redirected
   to `/tomatodo` page (Tomatodo Component)
3. The user sees his/her name and avatar and Settings dropdown with `Sign out` button (Tomatodo Component)
4. The user returns to `/` page and sees `Go to app` button (Landing Component)

## Sign out

1. The user clicks `Sigh out` button, the app is redirected to `/` page (Landing Component)
2. The user sees `Sign in` button in the header (Landing Component)

## Get tasks

1. On `/tomatodo` page the user sees his/her tasks (Tomatodo Component, TomatodoList Component, TomatodoTask Component)
2. The user can expand the panel with tasks with status `done`, whether it's expended or not is stored in Local
   Storage (Tomatodo Component)

# Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also
use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag
for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out
the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

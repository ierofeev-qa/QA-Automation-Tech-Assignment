# Faraway QA Automation Tech Assignment by Ivan Erofeev

**This is a TypeScript/Playwright-based UI test framework built using Page Object/Page Component patterns**

Nodejs is required to run the frontend tests:

https://nodejs.org/en/download/

Before running the tests, install the dependencies by running

```sh
npm install 
```

After the packages are installed, install the Playwright browsers by running

```sh
npx playwright install
```

To run tests locally, you need to set the correct environment variables via a .env file. Ask the author to share one at [ierofeev.qa@gmail.com]()

To run the tests use command


```sh
ENV=sandbox npx playwright test
```

Tests are running in parallel mode by default

To run linter use command

```sh
npm run lint
```

To generate and open Аllure report after test run use command

```sh
npm run allure-report
```

When running in CI, the Allure report is generated automatically and is available as a run artifact

To run tests locally you need to set correct envs via .env file - ask author to share one: ierofeev.qa@gmail.com

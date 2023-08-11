# Cypress setup

## Directory structure

All site level functional tests are located in `cypress-cms` (the root directory). All following shell commands in this

documentation should be run in the context of this directory.

The `[root]/cypress/integration` directory is where the actual tests exist, with the other directories there supporting

the tests.

Both Cypress native and cucumber tests exist in our system.

## Installation

Installing cypress to run is a matter of running `npm ci`. This requires that you have node version 14 or above installed.

## Running tests

### Local host test
Use following command to run the cypress test

```bash

$ npx cypress open --config baseUrl=https://www.nsw.gov.au/

```

### Cleanup

The default test configuration will create screenshots and videos of failed tests. To clean up this space you can

run `npm run cypress-cleanup`.



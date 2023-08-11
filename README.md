# Cypress setup

## Directory structure

All site level functional tests are located in `cypress-cms` (the root directory). 

The `[root]/cypress/integration/common` directory is where the test step definitoin exist, with the other directories there supporting the tests.

The `[root]/cypress/integration/cucumber`directory is where feature file exists

## Installation

Installing cypress to run is a matter of running `npm ci`. This requires that you have node version 14 or above installed.

## Running tests
Use following command to run the cypress test. `FindNSW.feature` is the feature file for the test

```bash

$ npx cypress open --config baseUrl=https://www.nsw.gov.au/

```


### Cleanup

The default test configuration will create screenshots and videos of failed tests. To clean up this space you can

run `npm run cypress-cleanup`.



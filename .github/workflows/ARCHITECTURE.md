# Test Automation Architecture

This project uses the Page Object Model (POM) design pattern.

## Structure

src/pages
Contains Page Object classes responsible for interacting with UI elements.

src/data
Contains test data used in tests.

src/fixtures
Contains shared fixtures (e.g. authenticated page).

tests
Contains test suites organized by purpose:

- smoke
- regression
- negative

## CI Pipeline

GitHub Actions is used to run tests automatically on push, pull requests and scheduled runs.

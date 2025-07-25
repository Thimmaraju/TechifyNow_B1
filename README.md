# TechifyNow_B1

This repository contains end-to-end (E2E) automation tests for TechifyNow using Playwright. It is structured for maintainability and scalability, featuring:

- **Playwright** for browser automation and E2E testing.
- **Allure** for advanced test reporting and visualization.
- Organized directories for test cases, page objects, test data, API responses, and reports.

## Project Structure

- `e2e/` – End-to-end test scripts.
- `pageobjects/` – Page Object Model files for reusable selectors and actions.
- `testData/` – Test data files for parameterized testing.
- `apiresponses/` – Sample API response files.
- `allure-results/` & `allure-report/` – Allure test results and generated reports.
- `playwright-report/` – Playwright’s default HTML reports.
- `downloads/` – Downloaded files during test runs.

## Getting Started

1. Install dependencies:
   ```powershell
   npm install
   ```

2. Run tests:
   ```powershell
   npx playwright test
   ```

3. Generate Allure report:
   ```powershell
   npx allure generate allure-results --clean -o allure-report
   npx allure open allure-report
   ```

## Additional Information

- Customize tests and page objects as needed for your application.
- Review Allure and Playwright documentation for advanced usage.


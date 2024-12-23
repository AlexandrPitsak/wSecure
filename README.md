# wSecure
This is a test project written in TypeScript using the Playwright framework + Axios library.

## Task Description
The task is to write automated tests using Playwright for a simple REST API that calculates the area of a trapezoid. The API accepts input in JSON format, which includes the lengths of the bases and the height of the trapezoid, and returns the calculated area.

## Endpoint
https://trapezoid-api-934897179230.us-central1.run.app/calculate-area
## Setup
1. Ensure Node.js is installed, or follow the installation [instructions](https://nodejs.org/en/download/package-manager/current).
2. Install all required packages:
   ```npm install```
## How to Run Tests

1. Run the tests:
```npm test```
2. Open the HTML report (includes attachments with API call data):
```npm run report```

## CI (Continuous Integration)
- Tests run on push to the master branch and on pull requests targeting master in the "test" job.
- Tests are split into shards (currently 2 shards).
- Tests are executed inside a Docker container.
- Blob reports are saved as artifacts.
- The merge_reports job merges all reports into a single HTML report and uploads it to artifacts.

## Features Implemented
### Code Style:
- Added eslint and prettier for consistent code formatting.
- Configured Husky to run a pre-commit hook with eslint and prettier fixes.

### API:
- Using Axios for API requests.
- Created an Axios instance with interceptors to log requests and responses.
- Implemented the CalculateArea API method with customizable method, URL, and data options.

### Utilities:
- Added a Trapezoid Area Calculator.
- Added a random data generator.

### Infrastructure:
- Created a Dockerfile for containerized execution.
- Configured a GitHub Actions workflow for CI.

### Test Coverage:
- Wrote positive and negative test scenarios for the API functionality.

## Next Steps
- Create GitHub Pages.
- Publish the HTML report to GitHub Pages.
- Add additional reporters, such as Allure.
- Implement JSON schema validation for the API.
- Write unit tests for helper methods.
- Set up load testing infrastructure




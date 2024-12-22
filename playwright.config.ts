import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: [['html'], ['blob']],
    use: {
        baseURL: 'https://trapezoid-api-934897179230.us-central1.run.app',
        trace: 'on-first-retry',
    },
});

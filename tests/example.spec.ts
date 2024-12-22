import { test, expect } from '@playwright/test';
import { axiosInstance } from '../lib/api';

let data = { base1: 10, base2: 20, height: 5 };

test(`Calculate area with side 1 ${data.base1}, side 2 ${data.base2} and height ${data.height}`, async () => {
    const response = await axiosInstance.post('/calculate-area', data);

    expect(response.status).toBe(200);
});

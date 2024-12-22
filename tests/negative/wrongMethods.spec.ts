import { expect, test } from '@playwright/test';
import { calculateArea } from '../../lib/api/calculateArea';
import { generateTrapezoidData, TrapezoidData } from '../../lib/helper/dataHelper';

const trapezoidData: TrapezoidData = generateTrapezoidData();

test(`Call calculate area endpoint with PUT method`, async () => {
    test.fixme(true, 'Wrong status code for incorrect method API');
    const { status, data } = await calculateArea({ data: trapezoidData, method: 'put' });

    expect(status).toBe(405);
    expect(data.statusText).toBe('Method Not Allowed');
});

test(`Call calculate area endpoint with GET method`, async () => {
    test.fixme(true, 'Wrong status code for incorrect method API also HTML code returns from google');
    const { status, data } = await calculateArea({ data: trapezoidData, method: 'get' });

    expect(status).toBe(405);
    expect(data.statusText).toBe('Method Not Allowed');
});

test(`Call calculate area endpoint with ROOT endpoint`, async () => {
    const { status, data } = await calculateArea({ data: trapezoidData, url: '/' });

    expect(status).toBe(404);
    expect(data.error).toBe('Not found');
});

test(`Call calculate area endpoint with DELETE method`, async () => {
    test.fixme(true, 'Wrong status code for incorrect method API');
    const { status, data } = await calculateArea({ data: trapezoidData, method: 'delete' });

    expect(status).toBe(405);
    expect(data.statusText).toBe('Method Not Allowed');
});

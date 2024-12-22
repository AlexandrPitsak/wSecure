import { expect, test } from '@playwright/test';
import { calculateArea } from '../../lib/api/calculateArea';
import { generateTrapezoidData, TrapezoidData } from '../../lib/helper/dataHelper';

const trapezoidData: TrapezoidData = generateTrapezoidData();

test.describe(() => {
    for (const key of Object.keys(trapezoidData)) {
        test(`Call calculate area endpoint with STRING for ${key}`, async () => {
            const testData = { ...trapezoidData, [key]: String(trapezoidData[key]) };
            const { status, data } = await calculateArea({ data: testData });

            expect.soft(status).toBe(400);
            expect.soft(data.error).toBe('Invalid input');
        });
    }
});
// NaN sends as null
test.describe(() => {
    for (const key of Object.keys(trapezoidData)) {
        test(`Call calculate area endpoint with NaN for ${key}`, async () => {
            const testData = { ...trapezoidData, [key]: NaN };
            const { status, data } = await calculateArea({ data: testData });

            expect.soft(status).toBe(400);
            expect.soft(data.error).toBe('Invalid input');
        });
    }
});

test.describe(() => {
    for (const key of Object.keys(trapezoidData)) {
        test(`Call calculate area endpoint with NULL for ${key}`, async () => {
            const testData = { ...trapezoidData, [key]: null };
            const { status, data } = await calculateArea({ data: testData });

            expect.soft(status).toBe(400);
            expect.soft(data.error).toBe('Invalid input');
        });
    }
});

test.describe(() => {
    for (const key of Object.keys(trapezoidData)) {
        test(`Call calculate area endpoint with UNDEFINED for ${key}`, async () => {
            const testData = { ...trapezoidData, [key]: undefined };
            const { status, data } = await calculateArea({ data: testData });

            expect.soft(status).toBe(400);
            expect.soft(data.error).toBe('Invalid input');
        });
    }
});

test.describe(() => {
    for (const key of Object.keys(trapezoidData)) {
        test(`Call calculate area endpoint with BOOLEAN for ${key}`, async () => {
            const testData = { ...trapezoidData, [key]: true };
            const { status, data } = await calculateArea({ data: testData });

            expect.soft(status).toBe(400);
            expect.soft(data.error).toBe('Invalid input');
        });
    }
});

test.describe(() => {
    for (const key of Object.keys(trapezoidData)) {
        test(`Call calculate area endpoint with XSS payload for ${key}`, async () => {
            const testData = { ...trapezoidData, [key]: "<script>alert('hack')</script>" };
            const { status, data } = await calculateArea({ data: testData });

            expect.soft(status).toBe(400);
            expect.soft(data.error).toBe('Invalid input');
        });
    }
});

test(`Call calculate area endpoint with ARRAY data`, async () => {
    for (const key of Object.keys(trapezoidData)) {
        const testData = { ...trapezoidData, [key]: [trapezoidData[key]] };
        const { status, data } = await calculateArea({ data: testData });

        expect.soft(status).toBe(400);
        expect.soft(data.error).toBe('Invalid input');
    }
});

test(`Call calculate area endpoint with data sent as array`, async () => {
    const { status, data } = await calculateArea({ data: [1, 2, 3] as any });

    expect(status).toBe(400);
    expect(data.error).toBe('Invalid input');
});

test.describe(() => {
    test(`Call calculate area endpoint with OBJECT data`, async () => {
        for (const key of Object.keys(trapezoidData)) {
            const testData = { ...trapezoidData, [key]: { [key]: trapezoidData[key] } };
            const { status, data } = await calculateArea({ data: testData });

            expect.soft(status).toBe(400);
            expect.soft(data.error).toBe('Invalid input');
        }
    });
});

test.describe(() => {
    for (const key of Object.keys(trapezoidData)) {
        test(`Call calculate area endpoint with directory Traversal payload for ${key}`, async () => {
            const testData = { ...trapezoidData, [key]: '../../../../../../etc/passwd' };
            const { status, data } = await calculateArea({ data: testData });

            expect.soft(status).toBe(400);
            expect.soft(data.error).toBe('Invalid input');
        });
    }
});

import { expect, test } from '@playwright/test';
import { calculateArea } from '../../lib/api/calculateArea';
import { generateTrapezoidData, getRandomInt, TrapezoidData } from '../../lib/helper/dataHelper';

const trapezoidData = {
    base1: 5,
    base2: 5,
    height: getRandomInt(1, 1000),
};

test(`Call calculate area endpoint with equal bases`, async () => {
    test.fixme(
        true,
        `If two parallel sides are equal in length,
             then the obtained geometrical figure contains one pair of equal and parallel edges. 
             Then the obtained figure must be a parallelogram and not trapezoid, but formula is valid for this figure`
    );
    const { status, data } = await calculateArea({ data: trapezoidData });

    expect(status, `trapezoidData: ${JSON.stringify(trapezoidData)}`).toBe(400);
    expect(data.error, `trapezoidData: ${JSON.stringify(trapezoidData)}`).toBe('Invalid input');
});

test(`Call calculate area endpoint with extra parameter`, async () => {
    const trapezoidData = {
        ...generateTrapezoidData(),
        base3: 6,
        leg1: 4,
        leg2: 5,
    };

    test.fixme(true, 'API accepts incorrect body with redundant parameters');
    const { status, data } = await calculateArea({ data: trapezoidData });

    expect.soft(status, `trapezoidData: ${JSON.stringify(trapezoidData)}`).toBe(400);
    expect.soft(data.error, `trapezoidData: ${JSON.stringify(trapezoidData)}`).toBe('Invalid input');
});

test(`Call calculate area endpoint without data`, async () => {
    const { status, data } = await calculateArea({ data: null });

    expect(status).toBe(400);
    expect(data.error).toBe('Invalid input');
});

test.describe('Negative values', () => {
    test(`Call calculate area endpoint with all negative values`, async () => {
        const { status, data } = await calculateArea({
            data: {
                base1: -5,
                base2: -22,
                height: -1,
            },
        });

        expect(status).toBe(400);
        expect(data.error).toBe('Invalid input');
    });

    test(`Call calculate area endpoint with negative data`, async () => {
        const trapezoidData: TrapezoidData = generateTrapezoidData();

        for (const key of Object.keys(trapezoidData)) {
            const testData = { ...trapezoidData, [key]: -Math.abs(trapezoidData[key]) };
            const { status, data } = await calculateArea({ data: testData });

            expect.soft(status).toBe(400);
            expect.soft(data.error).toBe('Invalid input');
        }
    });
});

test.describe('ZERO', () => {
    test(`Call calculate area endpoint with all ZERO values`, async () => {
        const { status, data } = await calculateArea({
            data: {
                base1: 0,
                base2: 0,
                height: 0,
            },
        });

        expect(status).toBe(400);
        expect(data.error).toBe('Invalid input');
    });

    const trapezoidData: TrapezoidData = generateTrapezoidData();

    for (const key of Object.keys(trapezoidData)) {
        test(`Call calculate area endpoint with ZERO for ${key}`, async () => {
            const testData = { ...trapezoidData, [key]: 0 };
            const { status, data } = await calculateArea({ data: testData });

            expect.soft(status).toBe(400);
            expect.soft(data.error).toBe('Invalid input');
        });
    }
});

import { expect, test } from '@playwright/test';
import { trapezoidAreaCalculator } from '../lib/helper/trapezoidAreaCalculator';
import { calculateArea } from '../lib/api/calculateArea';
import { generateTrapezoidData, getRandomDecimal, getRandomInt, TrapezoidData } from '../lib/helper/dataHelper';

test.describe(() => {
    const trapezoidData: TrapezoidData = generateTrapezoidData();

    test(`Call calculate area endpoint with valid numbers`, async () => {
        const { status, data } = await calculateArea({ data: trapezoidData });

        expect(status, `trapezoidData: ${JSON.stringify(trapezoidData)}`).toBe(200);
        expect(data.area, `trapezoidData: ${JSON.stringify(trapezoidData)}`).toBe(trapezoidAreaCalculator(trapezoidData));
    });
});

test.describe(() => {
    const trapezoidData: TrapezoidData = generateTrapezoidData(true);

    test(`Call calculate area endpoint with valid decimals`, async () => {
        const { status, data } = await calculateArea({ data: trapezoidData });

        expect(status, `trapezoidData: ${JSON.stringify(trapezoidData)}`).toBe(200);
        expect(data.area, `trapezoidData: ${JSON.stringify(trapezoidData)}`).toBe(trapezoidAreaCalculator(trapezoidData));
    });
});

test.describe(() => {
    const trapezoidData: TrapezoidData = {
        base2: getRandomInt(1, 100),
        base1: getRandomDecimal(1, 100),
        height: getRandomInt(1, 100),
    };

    test(`Call calculate area endpoint with mixed values`, async () => {
        const { status, data } = await calculateArea({ data: trapezoidData });

        expect(status, `trapezoidData: ${JSON.stringify(trapezoidData)}`).toBe(200);
        expect(data.area, `trapezoidData: ${JSON.stringify(trapezoidData)}`).toBe(trapezoidAreaCalculator(trapezoidData));
    });
});

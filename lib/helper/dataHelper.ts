export interface TrapezoidData {
    base1: number;
    base2: number;
    height: number;
}

export function generateTrapezoidData(allowDecimals: boolean = false): TrapezoidData {
    let base1: number, base2: number, height: number;
    const getRandom = allowDecimals ? getRandomDecimal : getRandomInt;

    do {
        base1 = getRandom(1, 100);
        base2 = getRandom(1, 100);
    } while (base1 === base2);

    height = getRandom(1, 100);

    return { base1, base2, height };
}

export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomDecimal(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}

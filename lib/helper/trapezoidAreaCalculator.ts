export interface TrapezoidData {
    base1: number;
    base2: number;
    height: number;
}

export function trapezoidAreaCalculator({ base1, base2, height }: TrapezoidData): number {
    if (base1 < 0 || base2 < 0 || height < 0) {
        throw new Error('All parameters must be non-negative numbers.');
    }
    if (base1 === base2) {
        throw new Error('Bases can not be equal');
    }

    return ((base1 + base2) / 2) * height;
}

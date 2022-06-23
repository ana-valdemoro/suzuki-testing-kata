export function isAllNumbersPositiveIntegers(days: number[][]): boolean {
    days.forEach(day => {
        day.forEach(steps => {
            Number.isInteger(steps)
        });
    });
    return true;
}
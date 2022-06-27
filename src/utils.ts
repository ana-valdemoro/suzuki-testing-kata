export function isAllNumbersPositiveIntegers(days: number[][]): boolean {
    days.forEach(day => {
        day.forEach(steps => {
            Number.isInteger(steps)
        });
    });
    return true;
}

export const checkForEqualityBetweenAllDaySteps = (days: number[][]): boolean => {
    return days.every((stairs, index, _days) => {
        if (index === 0) {
            return true;
        }
        return JSON.stringify(stairs) === JSON.stringify(_days[index - 1])
    });
};
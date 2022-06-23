import { stepCounter } from "./stepCounter";

export function stairsInNYears(days: number[][], years: number): number {

    if (years <= 0) {
        return 0;
    }

    return Math.trunc(calculateSteps(days) * years);
}

export function calculateSteps(days: number[][]): number {
    if (days.every((stairs, index, _days) => {
        if (index === 0) {
            return true;
        }
        return JSON.stringify(stairs) === JSON.stringify(_days[index - 1])
    })) {
        return days.length * days[0].reduce((acc, current) => acc + current, 0);
    }
    return stepCounter(days);
}


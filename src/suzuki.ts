import { checkForEqualityBetweenAllDaySteps } from "../src/utils";
import { stepCounter } from "./stepCounter";

export function stairsInNYears(days: number[][], years: number): number {

    if (years <= 0) {
        return 0;
    }

    return Math.trunc(calculateSteps(days) * years);
}

export function calculateSteps(days: number[][]): number {
    if (checkForEqualityBetweenAllDaySteps(days)) {
        return days.length * days[0].reduce((acc, current) => acc + current, 0);
    }
    return stepCounter(days);
}


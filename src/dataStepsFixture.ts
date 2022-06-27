/**
 * 
 * @param maximunStepsPerDay array with the number of steps you want to generate in each day
 * @returns a random matrix of integer steps value
 */
export const randomDaysSteps = (maximunStepsPerDay: number[]): number[][] => {
    return maximunStepsPerDay.map(steps => {
        return Array.from({ length: steps }, () => Math.floor(Math.random() * 10000))
    });

};

const monday: number[] = [5448, 8041, 6573, 8104];
const tuesday: number[] = [5448, 8041, 6573, 8104];
const wednesday: number[] = [5448, 8041, 6573, 8104];
const thursday: number[] = [5448, 8041, 6573, 8104];
const friday: number[] = [5448, 8041, 6573, 8104];
const saturday: number[] = [5448, 8041, 6573, 8104];
const sunday: number[] = [5448, 8041, 6573, 8104];

export const daysOfEqualSteps: number[][] = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];
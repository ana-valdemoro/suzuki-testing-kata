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
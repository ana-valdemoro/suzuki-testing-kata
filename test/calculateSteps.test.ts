
import { stepCounter } from "../src/stepCounter";
import { calculateSteps } from "../src/suzuki";
import { randomDaysSteps } from "../src/dataStepsFixture";


jest.mock("../src/stepCounter", () => ({
    stepCounter: jest.fn(),
}));


const sumAll = (numbers: number[][]): number => {
    let acumulator = 0;
    numbers.forEach((days) => {
        days.forEach((steps) => (acumulator += steps));
    });
    return acumulator;
};

const monday = [5448, 8041, 6573, 8104];
const tuesday = [5448, 8041, 6573, 8104];
const wednesday = [5448, 8041, 6573, 8104];
const thursday = [5448, 8041, 6573, 8104];
const friday = [5448, 8041, 6573, 8104];
const saturday = [5448, 8041, 6573, 8104];
const sunday = [5448, 8041, 6573, 8104];
const days = [monday, tuesday, wednesday, thursday, friday, saturday, sunday];

describe("calculateSteps", () => {

    beforeEach(() => {
        (stepCounter as jest.Mock).mockReset();
    });

    describe("Use simple sum", () => {

        test("Should check use simple sum when all days monk walk same steps", () => {
            expect(stepCounter).toHaveBeenCalledTimes(0);
        });

        test('should return correctValue in case of simple sum', () => {
            expect(calculateSteps(days)).toBe((5448 + 8041 + 6573 + 8104) * 7);
        });

    });

    describe("Use of stepCounter method", () => {
        test("Should call stepCounter in case of complex suma", () => {
            const daySteps = randomDaysSteps([40, 50, 15, 42, 36, 54, 31]);

            calculateSteps(daySteps);

            expect(stepCounter).toHaveBeenCalledTimes(1);
            expect(stepCounter).toHaveBeenCalledWith(daySteps);
        });

        test("Should return correctValue in case of complex suma", () => {
            const daySteps = randomDaysSteps([40, 50, 15, 42, 36, 54, 31]);
            const { stepCounter: originalStepCounter } = jest.requireActual('../src/stepCounter');
            (stepCounter as jest.Mock).mockImplementation((days: number[][]) => originalStepCounter(days));

            expect(calculateSteps(daySteps)).toBe(sumAll(daySteps));
        });

    });

    // Parámetros de entrada
    test('should return 0 when days is an empty array', () => {
        (stepCounter as jest.Mock).mockReset();
        expect(calculateSteps([[], [], [], [], [], []])).toBe(0);

        expect(stepCounter).toHaveBeenCalledTimes(0);
    });


});

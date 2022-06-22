import { stepCounter } from '../src/utils';
import { randomDaysSteps } from '../src/dataStepsProvider';

describe('isAllNumbersPositiveIntegers', () => {
  test('should first', () => {
    const monday = [5448, 8041, 6573, 8104]
    const tuesday = [5448, 8041, 6573, 8104]
    const wednesday = [5448, 8041, 6573, 8104]
    const thursday = [5448, 8041, 6573, 8104]
    const friday = [5448, 8041, 6573, 8104]
    const saturday = [5448, 8041, 6573, 8104]
    const sunday = [5448, 8041, 6573, 8104]
  })

});

describe('stepCounter', () => {

  const monday = [5448, 8041, 6573, 8104]
  const tuesday = [5448, 8041, 6573, 8104]
  const wednesday = [5448, 8041, 6573, 8104]
  const thursday = [5448, 8041, 6573, 8104]
  const friday = [5448, 8041, 6573, 8104]
  const saturday = [5448, 8041, 6573, 8104]
  const sunday = [5448, 8041, 6573, 8104]
  const days = [monday, tuesday, wednesday, thursday, friday, saturday, sunday]

  const sumAll = (numbers: number[][]): number => {
    let acumulator = 0;
    numbers.forEach(days => {
      days.forEach(steps => acumulator += steps);
    });
    return acumulator;
  };

  test('should return 0 when days is an empty array', () => {
    expect(stepCounter([[], [], [], [], [], []])).toBe(0);
  });

  test('should return the sum when the all daysSteps have same length and value', () => {
    expect(stepCounter(days)).toBe((5448 + 8041 + 6573 + 8104) * 7);
  });

  test('should return the sum when the daysSteps have differente length', () => {
    const daySteps = randomDaysSteps([40, 50, 15, 42, 36, 54, 31]);
    expect(stepCounter(daySteps)).toBe(sumAll(daySteps));
  });

  test('should return the sum when the daysSteps have same length', () => {
    const daySteps = randomDaysSteps([40, 40, 40, 40, 40, 40, 40]);
    expect(stepCounter(daySteps)).toBe(sumAll(daySteps));
  });

});
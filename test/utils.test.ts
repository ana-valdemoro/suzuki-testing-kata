import { checkForEqualityBetweenAllDaySteps } from '../src/utils';
import { daysOfEqualSteps, randomDaysSteps } from '../src/dataStepsFixture';


describe('isAllNumbersPositiveIntegers', () => {
  test('should first', () => {
  })

});

describe('Test suite for checkForEqualityBetweenAllDaySteps', () => {

  it('Should return true when days array is empty', () => {
    expect(checkForEqualityBetweenAllDaySteps([[], [], [], [], [], [], []])).toBe(true);

  });

  it('Should return true when steps arrays are equal between all days', () => {
    expect(checkForEqualityBetweenAllDaySteps(daysOfEqualSteps)).toBe(true);
  });


  it('Should return false when steps arrays are not equal for one missing element in last array', () => {
    const newArray = [...daysOfEqualSteps, daysOfEqualSteps[daysOfEqualSteps.length - 1].slice(0, daysOfEqualSteps[daysOfEqualSteps.length - 1].length - 1)];

    expect(checkForEqualityBetweenAllDaySteps(newArray)).toBe(false);
  });

  it('Should return false when steps arrays has random values', () => {
    const daySteps = randomDaysSteps([40, 50, 15, 42, 36, 54, 31]);

    expect(checkForEqualityBetweenAllDaySteps(daySteps)).toBe(false);
  });

  it('Should return false when steps arrays contains have all the same length', () => {
    const daySteps = randomDaysSteps([40, 40, 40, 40, 40, 40, 40]);

    expect(checkForEqualityBetweenAllDaySteps(daySteps)).toBe(false);
  });

  it('Should return false when some steps arrays are empty', () => {
    const daySteps = randomDaysSteps([0, 50, 0, 42, 36, 54, 31]);

    expect(checkForEqualityBetweenAllDaySteps(daySteps)).toBe(false);
  });


});
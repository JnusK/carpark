import {
  CAR_FEE,
  carPark,
  generateEmptyLots,
  MOTORCYCLE_FEE,
} from '../../src/carpark/car-park.js';

describe('car park', () => {
  it('car park should have the correct keys', () => {
    expect(carPark).toEqual({
      car: { max: 0, free: 0, lots: [], fee: CAR_FEE },
      motorcycle: { max: 0, free: 0, lots: [], fee: MOTORCYCLE_FEE },
    });
  });

  it('generate lots should contain correct keys and correct number of lots', () => {
    expect(generateEmptyLots(10).length).toEqual(10);
    expect(generateEmptyLots(2)).toEqual([
      { license: undefined, startTime: undefined },
      { license: undefined, startTime: undefined },
    ]);
  });
});

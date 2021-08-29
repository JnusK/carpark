import carParkController from '../../src/carpark/car-park-controller.js';
import { isCarParkValid } from '../../src/carpark/car-park-validation.js';
import { carPark } from '../../src/carpark/car-park.js';

describe('car park controller', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it('should not call enter vehicle on car park with no lots', () => {
    expect(isCarParkValid()).toEqual(false);
  });

  it('1st line with string should not be accepted', () => {
    carParkController('123 swq');
    expect(console.log).toHaveBeenCalledWith('Error in file. Please use a correctly formatted file');
  });

  it('should create car park on correct line', () => {
    carParkController('2 1');
    expect(carPark).toEqual({
      car: {
        fee: 2,
        free: 2,
        max: 2,
        lots: [
          { license: undefined, startTime: undefined },
          { license: undefined, startTime: undefined },
        ],
      },
      motorcycle: {
        fee: 1,
        free: 1,
        max: 1,
        lots: [
          { license: undefined, startTime: undefined },
        ],
      },
    });
  });
});

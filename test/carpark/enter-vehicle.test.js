import { carPark } from '../../src/carpark/car-park.js';
import enterVehicle from '../../src/carpark/enter-vehicle.js';

describe('enter vehicle', () => {
  beforeEach(() => {
    console.log = jest.fn();
    carPark.car = {
      fee: 10,
      free: 2,
      max: 3,
      lots: [
        { license: 'MID9855D', startTime: '1356885336' },
        { license: undefined, startTime: undefined },
        { license: undefined, startTime: undefined },
      ],
    };
    carPark.motorcycle = {
      fee: 5,
      free: 1,
      max: 2,
      lots: [
        { license: 'SSS1111S', startTime: '1234567890' },
        { license: undefined, startTime: undefined },
      ],
    };
  });

  it('should add vehicle to correct lot', () => {
    const licensePlate = 'SAD9999C';
    const timestamp = '1234567888';
    enterVehicle('car', licensePlate, timestamp);
    expect(console.log).toHaveBeenCalledWith('Accept CarLot2');
    expect(carPark.car).toEqual({
      fee: 10,
      free: 1,
      max: 3,
      lots: [
        { license: 'MID9855D', startTime: '1356885336' },
        { license: licensePlate, startTime: timestamp },
        { license: undefined, startTime: undefined },
      ],
    });
  });

  it('should show error if car park is full', () => {
    const licensePlate = 'SAD9999C';
    const timestamp = '1234567888';
    enterVehicle('motorcycle', licensePlate, timestamp);
    enterVehicle('motorcycle', 'SQS5555Q', timestamp);
    expect(console.log).toHaveBeenCalledWith('Reject');
    expect(console.log).not.toHaveBeenCalledWith('Vehicle already exist in car park. Invalid attempt.');
  });

  it('should show error if another vehicle with identical license plate is in car park', () => {
    const licensePlate = 'SSS1111S';
    const timestamp = '1234567888';
    enterVehicle('car', licensePlate, timestamp);
    expect(console.log).toHaveBeenCalledWith('Vehicle already exist in car park. Invalid attempt.');
  });
});

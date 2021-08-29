import { carPark } from '../../src/carpark/car-park.js';
import exitVehicle from '../../src/carpark/exit-vehicle.js';

describe('exit vehicle', () => {
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

  it('should show the correct lot and fee for exiting vehicle', () => {
    const licensePlate = 'SSS1111S';
    const timestamp = '1234577950';
    exitVehicle(licensePlate, timestamp);
    expect(console.log).toHaveBeenCalledWith('MotorcycleLot1 15');
    expect(carPark.motorcycle).toEqual({
      fee: 5,
      free: 2,
      max: 2,
      lots: [
        { license: undefined, startTime: undefined },
        { license: undefined, startTime: undefined },
      ],
    });
  });

  it('should show error if vehicle does not exist in car park', () => {
    const licensePlate = 'SSA2222A';
    exitVehicle(licensePlate, 1234567899);
    expect(console.log).toHaveBeenCalledWith(`Vehicle ${licensePlate} does not exist in car park.`);
  });

  it('should show error if exit time is before entry time', () => {
    const licensePlate = 'SSS1111S';
    const timestamp = '1234567850';
    exitVehicle(licensePlate, timestamp);
    expect(console.log).toHaveBeenCalledWith(`Start time of 1234567890 is later than end time of ${timestamp}.`);
  });

  it('should show error if there is multiple vehicles of the same license plate', () => {
    const licensePlate = 'SSS1111S';
    const timestamp = '1234567850';
    carPark.car.lots[0].license = licensePlate;
    exitVehicle(licensePlate, timestamp);
    expect(console.log).toHaveBeenCalledWith(`Multiple vehicles of the same license plate ${licensePlate} detected.`);
  });
});

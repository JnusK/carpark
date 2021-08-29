import { CAR, MOTORCYCLE } from '../vehicle/vehicle.js';
import { carPark } from './car-park.js';
import { capitalizeFirstChar } from '../util/util.js';
import enterVehicleValidation from './enter-vehicle-validation.js';

const parkVehicle = (park, licensePlate, timestamp, vehicleType) => {
  if (enterVehicleValidation(vehicleType, licensePlate)) {
    const index = park.lots.findIndex(lot => lot.license === undefined);
    park.lots[index].license = licensePlate;
    park.lots[index].startTime = timestamp;
    park.free -= 1;
    console.log(`Accept ${capitalizeFirstChar(vehicleType)}Lot${index + 1}`);
  }
};

const enterVehicle = (vehicleType, licensePlate, timestamp) => {
  if (vehicleType === CAR) {
    parkVehicle(carPark.car, licensePlate, timestamp, CAR);
  } else {
    parkVehicle(carPark.motorcycle, licensePlate, timestamp, MOTORCYCLE);
  }
};

export default enterVehicle;

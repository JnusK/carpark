import { carPark } from './car-park.js';
import { capitalizeFirstChar } from '../util/util.js';
import canVehicleExit from './exit-vehicle-validation.js';
import { CAR, MOTORCYCLE } from '../vehicle/vehicle.js';

const calcFee = (start, end, fee) => Math.ceil((end - start) / 60 / 60) * fee;

const exitVehicle = (licensePlate, timestamp) => {
  if (canVehicleExit(carPark, licensePlate, timestamp)) {
    let idx = carPark.car.lots.findIndex(lot => lot.license === licensePlate);
    let vehicleType = CAR;
    let fee;
    if (idx === -1) {
      idx = carPark.motorcycle.lots.findIndex(lot => lot.license === licensePlate);
      fee = calcFee(carPark.motorcycle.lots[idx].startTime, timestamp, carPark.motorcycle.fee);
      carPark.motorcycle.lots[idx].startTime = undefined;
      carPark.motorcycle.lots[idx].license = undefined;
      carPark.motorcycle.free += 1;
      vehicleType = MOTORCYCLE;
    } else {
      fee = calcFee(carPark.car.lots[idx].startTime, timestamp, carPark.car.fee);
      carPark.car.lots[idx].startTime = undefined;
      carPark.car.lots[idx].license = undefined;
      carPark.car.free += 1;
    }
    console.log(`${capitalizeFirstChar(vehicleType)}Lot${idx + 1} ${fee}`);
  }
};

export default exitVehicle;

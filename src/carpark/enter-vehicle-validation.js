import { carPark } from './car-park.js';

const enterVehicleValidation = (vehicleType, licensePlate) => {
  if (carPark[vehicleType].free < 1) {
    console.log('Reject');
    return false;
  }
  if (carPark.car.lots.filter(lot => lot.license === licensePlate)
    .concat(carPark.motorcycle.lots.filter(lot => lot.license === licensePlate)).length > 0) {
    console.log('Reject');
    console.log('Vehicle already exist in car park. Invalid attempt.');
    return false;
  }
  return true;
};

export default enterVehicleValidation;

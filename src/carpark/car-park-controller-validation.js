import { CAR, MOTORCYCLE } from '../vehicle/vehicle.js';

export const isEntryVehicleLineValid = (segments) => {
  if (segments.length !== 4) {
    console.log('Line is malformed.');
    return false;
  }
  if (segments[1] !== CAR && segments[1] !== MOTORCYCLE) {
    console.log(`${segments[1]} is unknown.`);
    return false
  }
  if (Number.isNaN(segments[3])) {
    console.log('Timestamp is invalid');
    return false;
  }
  return true;
};

export const isExitVehicleLineValid = (segments) => {
  if (segments.length !== 3) {
    console.log('Line is malformed.');
    return false;
  }

  if (Number.isNaN(segments[2])) {
    console.log('Timestamp is invalid');
    return false;
  }
  return true;
};

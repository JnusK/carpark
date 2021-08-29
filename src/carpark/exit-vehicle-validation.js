const canVehicleExit = (park, licensePlate, timestamp) => {
  const filteredlot = park.car.lots.filter((lot) => lot.license === licensePlate)
    .concat(park.motorcycle.lots.filter((lot) => lot.license === licensePlate));
  if (filteredlot.length > 0) {
    if (filteredlot.length > 1) {
      console.log(`Multiple vehicles of the same license plate ${licensePlate} detected.`);
      return false;
    }
    if (parseInt(timestamp) < parseInt(filteredlot[0].startTime)) {
      console.log(`Start time of ${filteredlot[0].startTime} is later than end time of ${timestamp}.`);
      return false;
    }
    return true;
  }
  console.log(`Vehicle ${licensePlate} does not exist in car park.`);
  return false;
};

export default canVehicleExit;

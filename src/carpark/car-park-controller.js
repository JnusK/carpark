import { CAR_FEE, carPark, generateEmptyLots, MOTORCYCLE_FEE } from './car-park.js';
import { carParkValidation, isCarParkValid } from './car-park-validation.js';
import enterVehicle from './enter-vehicle.js';
import { isEntryVehicleLineValid, isExitVehicleLineValid } from './car-park-controller-validation.js';
import exitVehicle from './exit-vehicle.js';

const carParkController = (line) => {
    const segments = line.split(' ');

    switch (segments[0]) {
        case 'Enter':
            if (isEntryVehicleLineValid(segments) && isCarParkValid()) {
                enterVehicle(segments[1], segments[2], segments[3]);
            }
            break;
        case 'Exit':
            if (isExitVehicleLineValid(segments) && isCarParkValid()) {
                exitVehicle(segments[1], segments[2]);
            }
            break;
        default:
            const carLots = parseInt(segments[0]);
            const motorcycleLots = parseInt(segments[1]);

            if (carParkValidation(carLots, motorcycleLots)) {
                carPark.car = {
                    fee: CAR_FEE,
                    max: carLots,
                    free: carLots,
                    lots: generateEmptyLots(carLots)
                };
                carPark.motorcycle = {
                    fee: MOTORCYCLE_FEE,
                    max: motorcycleLots,
                    free: motorcycleLots,
                    lots: generateEmptyLots(motorcycleLots)
                };
            }
    }
};

export default carParkController;

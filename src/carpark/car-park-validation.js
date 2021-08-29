import { carPark } from './car-park.js';

export const carParkValidation = (carLots, motorcycleLots) => {
    if (Number.isNaN(carLots) || Number.isNaN(motorcycleLots)) {
        console.log('Error in file. Please use a correctly formatted file');
        return false;
    }
    if (carLots < 0 || motorcycleLots < 0) {
        console.log('Number of lots cannot be negative.');
        return false;
    }
    return true;
};

export const isCarParkValid = () => {
    return !(carPark.car.max === 0 && carPark.motorcycle.max === 0);
};

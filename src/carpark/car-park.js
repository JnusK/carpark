// export interface ICarPark {
//       car: ILots,
//       motorcycle: ILots
// }
//
// interface ILot {
//       num: number,
//       license: string,
//       startTime: number
// }
//
// interface ILots {
//       lots: ILot[],
//       max: number,
//       free: number,
//       fee: number
// }

export const MOTORCYCLE_FEE = 1;
export const CAR_FEE = 2;

export const carPark = {
    car: {
        max: 0,
        free: 0,
        lots: [],
        fee: CAR_FEE },
    motorcycle: {
        max: 0,
        free: 0,
        lots: [],
        fee: MOTORCYCLE_FEE },
};

export const generateEmptyLots = (size) => {
    // Used a traditional for loop instead of fill as fill uses the same object for all the elements in the array.
    const lots = new Array(size);
    for (let i = 0; i < lots.length; i += 1) {
        lots[i] = { license: undefined, startTime: undefined };
    }
    return lots;
};

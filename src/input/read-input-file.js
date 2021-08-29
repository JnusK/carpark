import * as fs from 'fs';
import * as readline from 'readline';
import carParkController from '../carpark/car-park-controller.js';

const readInputFile = async (file) => {
    const readStream = fs.createReadStream(file);

    const readLine = readline.createInterface({
        input: readStream,
        crlfDelay: Infinity,
    });

    for await (const line of readLine) {
        carParkController(line);
    }
};

export default readInputFile;

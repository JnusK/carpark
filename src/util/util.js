import * as fs from 'fs';

export const capitalizeFirstChar = (str) => {
  if (str && str !== '') return str.charAt(0).toUpperCase() + str.slice(1);
  return '';
};

export const checkFileExist = (pathToFile) => fs.existsSync(pathToFile) && fs.lstatSync(pathToFile).isFile();

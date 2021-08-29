#!/usr/bin/env node

import * as readline from 'readline';
import readInputFile from './input/read-input-file.js';
import { checkFileExist } from './util/util.js';

let rli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let recursiveReadLine = () => {
  rli.question('Key in the input file. Enter -q to stop script.\n', async (answer) => {
    if (answer === '-q') rli.close();
    else {
      try{
        if (checkFileExist(answer)) {
          await readInputFile(answer);
        } else {
          console.log(`File does not exist in ${answer}`);
        }
        recursiveReadLine();
      } catch(error) {
        console.log(`File does not exist in ${answer}`);
      }
    }
  });
}

recursiveReadLine();

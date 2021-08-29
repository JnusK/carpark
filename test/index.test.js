import readInputFile from '../src/input/read-input-file.js';

describe('integration', () => {
  it('should log all the outputs correctly', async () => {
    console.log = jest.fn();
    await readInputFile('./test/test-file');

    expect(console.log).toHaveBeenCalledWith('Accept MotorcycleLot1');
    expect(console.log).toHaveBeenCalledWith('Accept CarLot1');
    expect(console.log).toHaveBeenCalledWith('MotorcycleLot1 2');
    expect(console.log).toHaveBeenCalledWith('Accept CarLot2');
    expect(console.log).toHaveBeenCalledWith('Accept CarLot3');
    expect(console.log).toHaveBeenCalledWith('Reject');
    expect(console.log).toHaveBeenCalledWith('CarLot3 6');
  });
});

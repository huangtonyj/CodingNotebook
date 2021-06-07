const ambiguousMeasurements = require('../problems/ambiguousMeasurements');

describe('ambiguousMeasurements()' ,() => {
  it('Test Case 1', () => {
    const measuringCups = [[200, 210],[450, 465], [800, 850]];
    const low = 2100;
    const high = 2300;
  
    expect(ambiguousMeasurements(measuringCups, low, high)).toEqual(true);
  });

  it('Test Case 2', () => {
    const measuringCups = [[200, 210]];
    const low = 10;
    const high = 20;

    expect(ambiguousMeasurements(measuringCups, low, high)).toEqual(false);
  });

  it('Test Case 3', () => {
    const measuringCups = [[230, 240],[290, 310], [500, 515]];
    const low = 2100;
    const high = 2300;
  
    expect(ambiguousMeasurements(measuringCups, low, high)).toEqual(true);
  });

  it('Test Case 4', () => {
    const measuringCups = [[1, 3],[2, 4], [5, 6]];
    const low = 100;
    const high = 101;
  
    expect(ambiguousMeasurements(measuringCups, low, high)).toEqual(false);
  });

  it('Test Case 5', () => {
    const measuringCups = [[1, 3],[2, 4], [5, 6]];
    const low = 100;
    const high = 120;
  
    expect(ambiguousMeasurements(measuringCups, low, high)).toEqual(true);
  });

  it('Test Case 6', () => {
    const measuringCups = [[1, 3],[2, 4],[5, 6], [10, 20]];
    const low = 10;
    const high = 12;
  
    expect(ambiguousMeasurements(measuringCups, low, high)).toEqual(true);
  });

  it('Test Case 7', () => {
    const measuringCups = [[1, 3],[2, 4],[5, 7], [10, 20]];
    const low = 10;
    const high = 12;
  
    expect(ambiguousMeasurements(measuringCups, low, high)).toEqual(false);
  });

  it('Test Case 8', () => {
    const measuringCups = [[50, 60],[100, 120],[20, 40],[10, 15], [400, 500]];
    const low = 1000;
    const high = 1050;
  
    expect(ambiguousMeasurements(measuringCups, low, high)).toEqual(false);
  });

  it('Test Case 9', () => {
    const measuringCups = [[50, 65],[100, 120],[20, 40],[10, 15], [400, 500]];
    const low = 1000;
    const high = 1200;
  
    expect(ambiguousMeasurements(measuringCups, low, high)).toEqual(true);
  });

  it('Test Case 10', () => {
    const measuringCups = [[50, 65],[100, 120],[20, 40],[10, 15],[400, 500],[300, 350], [10, 25]];
    const low = 3000;
    const high = 3300;
  
    expect(ambiguousMeasurements(measuringCups, low, high)).toEqual(false);
  });

  it('Test Case 11', () => {
    const measuringCups = [[50, 60],[100, 120],[20, 40], [400, 500]];
    const low = 1000;
    const high = 1050;
  
    expect(ambiguousMeasurements(measuringCups, low, high)).toEqual(false);
  });

  it('Test Case 12', () => {
    const measuringCups = [[50, 65]];
    const low = 200;
    const high = 200;
  
    expect(ambiguousMeasurements(measuringCups, low, high)).toEqual(false);
  });

  it('Test Case 13', () => {
    const measuringCups = [[50, 50]];
    const low = 200;
    const high = 200;
  
    expect(ambiguousMeasurements(measuringCups, low, high)).toEqual(true);
  });

  it('Test Case 14', () => {
    const measuringCups = [[50, 50], [50, 51]];
    const low = 200;
    const high = 200;
  
    expect(ambiguousMeasurements(measuringCups, low, high)).toEqual(true);
  });

  it('Test Case 15', () => {
    const measuringCups = [[100, 150], [1000, 2000]];
    const low = 0;
    const high = 1000;
  
    expect(ambiguousMeasurements(measuringCups, low, high)).toEqual(true);
  });

  it('Test Case 16', () => {
    const measuringCups = [[10, 20]];
    const low = 10;
    const high = 20;

    expect(ambiguousMeasurements(measuringCups, low, high)).toEqual(true);
  });

  it('Test Case 17', () => {
    const measuringCups = [[15, 18]];
    const low = 10;
    const high = 20;
  
    expect(ambiguousMeasurements(measuringCups, low, high)).toEqual(true);
  });

  it('Test Case 18', () => {
    const measuringCups = [[15, 22]];
    const low = 10;
    const high = 20;

    expect(ambiguousMeasurements(measuringCups, low, high)).toEqual(false);
  });
});
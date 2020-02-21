const ContinuousMedianHandler = require('../../problems/ContinuousMedianHandler');

describe('ContinuousMedianHandler()', () => {
  const test = new ContinuousMedianHandler();

  it('Test Case #1', () => {
    test.insert(5);
    expect(test.getMedian()).toEqual(5);
    test.insert(10);
    expect(test.getMedian()).toEqual(7.5);
  });

  it('Test Case #2', () => {
    test.insert(100);
    expect(test.getMedian()).toEqual(10);
    test.insert(200);
    expect(test.getMedian()).toEqual(55);
  });

  it('Test Case #3', () => {
    test.insert(6);
    expect(test.getMedian()).toEqual(10);
    test.insert(13);
    expect(test.getMedian()).toEqual(11.5);
  });

  it('Test Case #4', () => {
    test.insert(14);
    expect(test.getMedian()).toEqual(13);
    test.insert(50);
    expect(test.getMedian()).toEqual(13.5);
  });

  it('Test Case #5', () => {
    test.insert(51);
    expect(test.getMedian()).toEqual(14);
    test.insert(52);
    expect(test.getMedian()).toEqual(32);
  });

  it('Test Case #6', () => {
    test.insert(1000);
    expect(test.getMedian()).toEqual(50);
    test.insert(10000);
    expect(test.getMedian()).toEqual(50.5);
  });

  it('Test Case #7', () => {
    test.insert(10001);
    expect(test.getMedian()).toEqual(51);
    test.insert(10002);
    expect(test.getMedian()).toEqual(51.5);
  });

  it('Test Case #8', () => {
    test.insert(10003);
    expect(test.getMedian()).toEqual(52);
    test.insert(10004);
    expect(test.getMedian()).toEqual(76);
  });

  it('Test Case #9', () => {
    test.insert(75);
    expect(test.getMedian()).toEqual(75);
    test.insert(80);
    expect(test.getMedian()).toEqual(77.5);
  });
});
const MinHeap = require('../../problems/MinHeap');

describe('MinHeap()', () => {
  const test1 = new MinHeap([2, 3, 1]);

  const test2 = new MinHeap([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const test3 = new MinHeap([
    48,
    12,
    24,
    7,
    8,
    -5,
    24,
    391,
    24,
    56,
    2,
    6,
    8,
    41,
  ]);
  test3.insert(76);
  test3.remove();
  test3.remove();
  test3.insert(87);

  const test4 = new MinHeap([
    -4,
    5,
    10,
    8,
    -10,
    -6,
    -4,
    -2,
    -5,
    3,
    5,
    -4,
    -5,
    -1,
    1,
    6,
    -7,
    -6,
    -7,
    8,
  ]);

  const test5 = new MinHeap([
    -7,
    2,
    3,
    8,
    -10,
    4,
    -6,
    -10,
    -2,
    -7,
    10,
    5,
    2,
    9,
    -9,
    -5,
    3,
    8,
  ]);
  test5.remove();
  test5.insert(-8);
  test5.remove();
  test5.insert(8);

  const test6 = new MinHeap([
    427,
    787,
    222,
    996,
    -359,
    -614,
    246,
    230,
    107,
    -706,
    568,
    9,
    -246,
    12,
    -764,
    -212,
    -484,
    603,
    934,
    -848,
    -646,
    -991,
    661,
    -32,
    -348,
    -474,
    -439,
    -56,
    507,
    736,
    635,
    -171,
    -215,
    564,
    -710,
    710,
    565,
    892,
    970,
    -755,
    55,
    821,
    -3,
    -153,
    240,
    -160,
    -610,
    -583,
    -27,
    131,
  ]);

  const test7 = new MinHeap([
    991,
    -731,
    -882,
    100,
    280,
    -43,
    432,
    771,
    -581,
    180,
    -382,
    -998,
    847,
    80,
    -220,
    680,
    769,
    -75,
    -817,
    366,
    956,
    749,
    471,
    228,
    -435,
    -269,
    652,
    -331,
    -387,
    -657,
    -255,
    382,
    -216,
    -6,
    -163,
    -681,
    980,
    913,
    -169,
    972,
    -523,
    354,
    747,
    805,
    382,
    -827,
    -796,
    372,
    753,
    519,
    906,
  ]);
  test7.remove();
  test7.remove();
  test7.remove();
  test7.insert(992);

  const test8 = new MinHeap([
    544,
    -578,
    556,
    713,
    -655,
    -359,
    -810,
    -731,
    194,
    -531,
    -685,
    689,
    -279,
    -738,
    886,
    -54,
    -320,
    -500,
    738,
    445,
    -401,
    993,
    -753,
    329,
    -396,
    -924,
    -975,
    376,
    748,
    -356,
    972,
    459,
    399,
    669,
    -488,
    568,
    -702,
    551,
    763,
    -90,
    -249,
    -45,
    452,
    -917,
    394,
    195,
    -877,
    153,
    153,
    788,
    844,
    867,
    266,
    -739,
    904,
    -154,
    -947,
    464,
    343,
    -312,
    150,
    -656,
    528,
    61,
    94,
    -581,
  ]);

  const test9 = new MinHeap([
    -823,
    164,
    48,
    -987,
    323,
    399,
    -293,
    183,
    -908,
    -376,
    14,
    980,
    965,
    842,
    422,
    829,
    59,
    724,
    -415,
    -733,
    356,
    -855,
    -155,
    52,
    328,
    -544,
    -371,
    -160,
    -942,
    -51,
    700,
    -363,
    -353,
    -359,
    238,
    892,
    -730,
    -575,
    892,
    490,
    490,
    995,
    572,
    888,
    -935,
    919,
    -191,
    646,
    -120,
    125,
    -817,
    341,
    -575,
    372,
    -874,
    243,
    610,
    -36,
    -685,
    -337,
    -13,
    295,
    800,
    -950,
    -949,
    -257,
    631,
    -542,
    201,
    -796,
    157,
    950,
    540,
    -846,
    -265,
    746,
    355,
    -578,
    -441,
    -254,
    -941,
    -738,
    -469,
    -167,
    -420,
    -126,
    -410,
    59,
  ]);
  test9.insert(2);
  test9.insert(22);
  test9.insert(222);
  test9.insert(2222);
  test9.remove();
  test9.remove();
  test9.remove();
  test9.remove();

  it('Test Case #1', function() {
      expect(test1.heap[0] === Math.min.apply(null, test1.heap)).toBeTruthy;
    for (let currentIdx = test1.heap.length - 1; currentIdx >= 0; currentIdx--) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      if (parentIdx < 0) break;
          expect(test1.heap[currentIdx] >= test1.heap[parentIdx]).toBeTruthy;
    }
  });

  it('Test Case #2', function () {
    expect(test2.heap[0] === Math.min.apply(null, test2.heap)).toBeTruthy;
    for (let currentIdx = test2.heap.length - 1; currentIdx >= 0; currentIdx--) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      if (parentIdx < 0) break;
      expect(test2.heap[currentIdx] >= test2.heap[parentIdx]).toBeTruthy;
    }
  });

  it('Test Case #3', function () {
    expect(test3.heap[0] === Math.min.apply(null, test3.heap)).toBeTruthy;
    for (let currentIdx = test3.heap.length - 1; currentIdx >= 0; currentIdx--) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      if (parentIdx < 0) break;
      expect(test3.heap[currentIdx] >= test3.heap[parentIdx]).toBeTruthy;
    }
  });

  it('Test Case #4', function () {
    expect(test4.heap[0] === Math.min.apply(null, test4.heap)).toBeTruthy;
    for (let currentIdx = test4.heap.length - 1; currentIdx >= 0; currentIdx--) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      if (parentIdx < 0) break;
      expect(test4.heap[currentIdx] >= test4.heap[parentIdx]).toBeTruthy;
    }
  });

  it('Test Case #5', function () {
    expect(test5.heap[0] === Math.min.apply(null, test5.heap)).toBeTruthy;
    for (let currentIdx = test5.heap.length - 1; currentIdx >= 0; currentIdx--) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      if (parentIdx < 0) break;
      expect(test5.heap[currentIdx] >= test5.heap[parentIdx]).toBeTruthy;
    }
  });

  it('Test Case #6', function () {
    expect(test6.heap[0] === Math.min.apply(null, test6.heap)).toBeTruthy;
    for (let currentIdx = test6.heap.length - 1; currentIdx >= 0; currentIdx--) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      if (parentIdx < 0) break;
      expect(test6.heap[currentIdx] >= test6.heap[parentIdx]).toBeTruthy;
    }
  });

  it('Test Case #7', function () {
    expect(test7.heap[0] === Math.min.apply(null, test7.heap)).toBeTruthy;
    for (let currentIdx = test7.heap.length - 1; currentIdx >= 0; currentIdx--) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      if (parentIdx < 0) break;
      expect(test7.heap[currentIdx] >= test7.heap[parentIdx]).toBeTruthy;
    }
  });

  it('Test Case #8', function () {
    expect(test8.heap[0] === Math.min.apply(null, test8.heap)).toBeTruthy;
    for (let currentIdx = test8.heap.length - 1; currentIdx >= 0; currentIdx--) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      if (parentIdx < 0) break;
      expect(test8.heap[currentIdx] >= test8.heap[parentIdx]).toBeTruthy;
    }
  });

  it('Test Case #9', function () {
    expect(test9.heap[0] === Math.min.apply(null, test9.heap)).toBeTruthy;
    for (let currentIdx = test9.heap.length - 1; currentIdx >= 0; currentIdx--) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      if (parentIdx < 0) break;
      expect(test9.heap[currentIdx] >= test9.heap[parentIdx]).toBeTruthy;
    }
  });


});


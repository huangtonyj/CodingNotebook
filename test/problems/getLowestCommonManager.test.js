const getLowestCommonManager = require('../../problems/getLowestCommonManager');

describe('getLowestCommonManager()', () => {
  class OrgChart {
    constructor(name) {
      this.name = name;
      this.directReports = [];
    }

    addDirectReports(directReports) {
      for (const directReport of directReports) {
        this.directReports.push(directReport);
      }
    }
  }

  const orgCharts = {};
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  for (const letter of ALPHABET) {
    orgCharts[letter] = new OrgChart(letter);
  }
  orgCharts.A.addDirectReports([orgCharts.B, orgCharts.C, orgCharts.D, orgCharts.E, orgCharts.F]);
  orgCharts.B.addDirectReports([orgCharts.G, orgCharts.H, orgCharts.I]);
  orgCharts.C.addDirectReports([orgCharts.J]);
  orgCharts.D.addDirectReports([orgCharts.K, orgCharts.L]);
  orgCharts.F.addDirectReports([orgCharts.M, orgCharts.N]);
  orgCharts.H.addDirectReports([orgCharts.O, orgCharts.P, orgCharts.Q, orgCharts.R]);
  orgCharts.K.addDirectReports([orgCharts.S]);
  orgCharts.P.addDirectReports([orgCharts.T, orgCharts.U]);
  orgCharts.R.addDirectReports([orgCharts.V]);
  orgCharts.V.addDirectReports([orgCharts.W, orgCharts.X, orgCharts.Y]);
  orgCharts.X.addDirectReports([orgCharts.Z]);

  it('Test Case #1', function() {
    expect(getLowestCommonManager(orgCharts.A, orgCharts.A, orgCharts.B))
      .toEqual(orgCharts.A);
  });

  it('Test Case #2', function() {
    expect(getLowestCommonManager(orgCharts.A, orgCharts.B, orgCharts.F))
      .toEqual(orgCharts.A);
  });

  it('Test Case #3', function() {
    expect(getLowestCommonManager(orgCharts.A, orgCharts.G, orgCharts.M))
      .toEqual(orgCharts.A);
  });

  it('Test Case #4', function() {
    expect(getLowestCommonManager(orgCharts.A, orgCharts.U, orgCharts.S))
      .toEqual(orgCharts.A);
  });

  it('Test Case #5', function() {
    expect(getLowestCommonManager(orgCharts.A, orgCharts.Z, orgCharts.M))
      .toEqual(orgCharts.A);
  });

  it('Test Case #6', function() {
    expect(getLowestCommonManager(orgCharts.A, orgCharts.O, orgCharts.I))
      .toEqual(orgCharts.B);
  });

  it('Test Case #7', function() {
    expect(getLowestCommonManager(orgCharts.A, orgCharts.T, orgCharts.Z))
      .toEqual(orgCharts.H);
  });

  it('Test Case #8', function() {
    expect(getLowestCommonManager(orgCharts.A, orgCharts.T, orgCharts.V))
      .toEqual(orgCharts.H);
  });

  it('Test Case #9', function() {
    expect(getLowestCommonManager(orgCharts.A, orgCharts.T, orgCharts.H))
      .toEqual(orgCharts.H);
  });

  it('Test Case #10', function() {
    expect(getLowestCommonManager(orgCharts.A, orgCharts.W, orgCharts.V))
      .toEqual(orgCharts.V);
  });

  it('Test Case #11', function() {
    expect(getLowestCommonManager(orgCharts.A, orgCharts.Z, orgCharts.B))
      .toEqual(orgCharts.B);
  });

  it('Test Case #12', function() {
    expect(getLowestCommonManager(orgCharts.A, orgCharts.Q, orgCharts.W))
      .toEqual(orgCharts.H);
  });

  it('Test Case #13', function() {
    expect(getLowestCommonManager(orgCharts.A, orgCharts.A, orgCharts.Z))
      .toEqual(orgCharts.A);
  });
})
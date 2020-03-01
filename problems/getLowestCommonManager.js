function getLowestCommonManager(topManager, report1, report2) {

  // console.log(topManager.name, report1.name, report2.name);

  if (topManager.name === report1.name) return {
    // manager: topManager, 
    report1: true, 
    // report2: false
  };

  if (topManager.name === report2.name) return {
    // manager: topManager, 
    // report1: false, 
    report2: true
  };

  let hasReport1 = false;
  let hasReport2 = false;
  let manager = false;

  topManager.directReports.forEach((direct) => {
    const ans = getLowestCommonManager(direct, report1, report2);

    // if (ans === report1) hasReport1 = true;
    // if (ans === report2) hasReport2 = true;

    console.table({direct, report1, report2})
    console.log(direct.name, ans);

    manager = manager || ans.manager;
    hasReport1 = hasReport1 || ans.report1;
    hasReport2 = hasReport2 || ans.report2;
  });

  // console.table({
  //   name: topManager.name, 
  //   hasReport1, hasReport2
  // });

  if (manager) return manager;
  // if (hasReport1 && hasReport2) return topManager;
  if (hasReport1 && hasReport2) return {manager: topManager};
  if (hasReport1) return {report1: hasReport1};
  if (hasReport2) return {report2: hasReport2};

  return {};
}

module.exports = getLowestCommonManager;


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

// console.log(orgCharts);
// console.log(getLowestCommonManager(orgCharts.A, orgCharts.B, orgCharts.C), 'A');
// console.log(getLowestCommonManager(orgCharts.P, orgCharts.T, orgCharts.U), 'P');
// console.log(getLowestCommonManager(orgCharts.A, orgCharts.S, orgCharts.I), 'A');
console.log(getLowestCommonManager(orgCharts.A, orgCharts.T, orgCharts.Z), 'H');

// console.log(orgCharts.T ? 1 :0)
// console.log(orgCharts.U ? 1 :0)
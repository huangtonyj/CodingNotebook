function getLowestCommonManager(topManager, report1, report2) {

  if (topManager === report1) return {report1: topManager};
  if (topManager === report2) return {report2: topManager};

  let result = {};

  topManager.directReports.forEach((directReport) => {
    result = {...result, ...getLowestCommonManager(directReport, report1, report2)};
  });

  // console.table({
  //   topManger: topManager.name,
  //   ...result
  // })

  if (result.topManager) {
    return result.topManager;
  } else if (result.report1 && result.report2) {
    result.topManager = topManager;
  } else if (result.report1) {
    result.report1 = topManager;
  } else if (result.report2) { 
    result.report2 = topManager;
  }

  return result.topManager ? result.topManager : result;
}

module.exports = getLowestCommonManager;
// class OrgChart {
//   constructor(name) {
//     this.name = name;
//     this.directReports = [];
//   }

//   addDirectReports(directReports) {
//     for (const directReport of directReports) {
//       this.directReports.push(directReport);
//     }
//   }
// }

// function createOrg() {
//   const orgCharts = {};
//   const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
//   for (const letter of ALPHABET) {
//     orgCharts[letter] = new OrgChart(letter);
//   }
//   orgCharts.A.addDirectReports([orgCharts.B, orgCharts.C, orgCharts.D, orgCharts.E, orgCharts.F]);
//   orgCharts.B.addDirectReports([orgCharts.G, orgCharts.H, orgCharts.I]);
//   orgCharts.C.addDirectReports([orgCharts.J]);
//   orgCharts.D.addDirectReports([orgCharts.K, orgCharts.L]);
//   orgCharts.F.addDirectReports([orgCharts.M, orgCharts.N]);
//   orgCharts.H.addDirectReports([orgCharts.O, orgCharts.P, orgCharts.Q, orgCharts.R]);
//   orgCharts.K.addDirectReports([orgCharts.S]);
//   orgCharts.P.addDirectReports([orgCharts.T, orgCharts.U]);
//   orgCharts.R.addDirectReports([orgCharts.V]);
//   orgCharts.V.addDirectReports([orgCharts.W, orgCharts.X, orgCharts.Y]);
//   orgCharts.X.addDirectReports([orgCharts.Z]);

//   return orgCharts;
// }

// const orgCharts = createOrg();

// // console.log(orgCharts);
// console.log(getLowestCommonManager(orgCharts.A, orgCharts.B, orgCharts.C), 'A');
// console.log(getLowestCommonManager(orgCharts.P, orgCharts.T, orgCharts.U), 'P');
// console.log(getLowestCommonManager(orgCharts.A, orgCharts.S, orgCharts.I), 'A');
// console.log(getLowestCommonManager(orgCharts.A, orgCharts.T, orgCharts.Z), 'H');
// console.log(getLowestCommonManager(orgCharts.B, orgCharts.T, orgCharts.X), 'H');
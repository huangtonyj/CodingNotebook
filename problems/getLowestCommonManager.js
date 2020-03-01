function getLowestCommonManager(manager, report1, report2) {

  let result = {};
  
  if (manager === report1) result.report1= manager
  if (manager === report2) result.report2= manager

  manager.directReports.forEach((directReport) => {
    result = {...result, ...getLowestCommonManager(directReport, report1, report2)};
  });

  if (result.manager) return result.manager;
  
  if (result.report1 && result.report2) {
    result.manager = manager;
  } else if (result.report1) {
    result.report1 = manager;
  } else if (result.report2) { 
    result.report2 = manager;
  }

  return result.manager ? result.manager : result;
}

module.exports = getLowestCommonManager;
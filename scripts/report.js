const reporter = require("cucumber-html-reporter");
const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber-report.json',
  output: 'output/reports/cucumber-html-result.html',
  reportSuiteAsScenaros: true,
  launchReport: false
};

reporter.generate(options);
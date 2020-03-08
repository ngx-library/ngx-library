const { karma } = require('../infrastructure/karma');

const { join } = require('path');

module.exports = function (config) {
  config.set(karma({
    junitDir: join(__dirname, '../../junit-report/gitlab-api'),
    coverageDir: join(__dirname, '../../coverage/gitlab-api'),
    thresholds: {}
  }));
};

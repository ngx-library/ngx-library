const { karma } = require('../../karma.conf');

const { join } = require('path');

module.exports = function (config) {
  config.set(karma({
    junitDir: join(__dirname, '../../junit-report'),
    coverageDir: join(__dirname, '../../coverage/common'),
    logLevel: config.LOG_INFO
  }));
};

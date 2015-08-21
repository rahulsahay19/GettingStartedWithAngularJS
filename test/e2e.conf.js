module.exports = function(config){
  config.set({


    basePath : '../',

    files : [
      'test/e2e/**/*.js'
    ],

    autoWatch : false,
    singleRun: false,

    browsers : ['Chrome'],

    frameworks: ['ng-scenario'],

    singleRun : true,

    proxies : {
      '/': 'http://localhost:8000/'
    },

    plugins : [
      'karma-junit-reporter',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-ng-scenario'
    ],

    logLevel:config.LOG_INFO,

    junitReporter : {
      outputFile: 'test_out/e2e.xml',
      suite: 'e2e'
    },

    captureTimeout:900000

  })}


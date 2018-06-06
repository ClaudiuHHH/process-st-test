//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.7.0/angular.min.js',
            'https://blueimp.github.io/JavaScript-Load-Image/js/load-image.all.min.js',
            'https://blueimp.github.io/JavaScript-Canvas-to-Blob/js/canvas-to-blob.min.js',
            'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
            'js/vendor/jquery.ui.widget.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'js/jquery.fileupload.js',
            'js/jquery.fileupload-process.js',
            'js/*.js',
            'app/app.js',
            'app/components/**/*.js',

        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
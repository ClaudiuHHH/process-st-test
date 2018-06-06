//jshint strict: false
module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.7.0/angular.min.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'js/vendor/jquery.ui.widget.js',
            'https://blueimp.github.io/JavaScript-Load-Image/js/load-image.all.min.js',
            'https://blueimp.github.io/JavaScript-Canvas-to-Blob/js/canvas-to-blob.min.js',
            'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js',
            'https://blueimp.github.io/Gallery/js/jquery.blueimp-gallery.min.js',
            'js/jquery.iframe-transport.js',
            'js/jquery.fileupload.js',
            'js/jquery.fileupload-process.js',
            'js/jquery.fileupload-image.js',
            'js/jquery.fileupload-audio.js',
            'js/jquery.fileupload-video.js',
            'js/jquery.fileupload-validate.js',
            'js/jquery.fileupload-angular.js',
            'app/components/**/*.js',
            'app/app.js',
            

        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Firefox'],

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
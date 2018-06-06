'use strict';
var url = 'https://upload.wistia.com';
var apiPassword = '392d76bfc1b31d9f9c6543eca8aa0bb028ce5098df1d3c2fc5670f58d71f4af1';
angular.module('wistiaUploaderModule', [
    'blueimp.fileupload',
])
    .controller('wistiaUploaderCtrl', [
        '$scope',
        function ($scope) {

            $scope.uploadedVideo = undefined

            $scope.options = {
                apiPassword: apiPassword,
                url: url,
                autoUpload: true,
            };

            $scope.gotResult = function () {
                return $scope.uploadedVideo ? true : false;
            };
            $scope.setResult = function (video) {
                $scope.uploadedVideo = video;

            };
            $scope.$on('fileuploaddone', hadleFileuploAddOneEvent);

            function hadleFileuploAddOneEvent(event, args) {
                if (args.result) {
                    $scope.setResult(args.result);
                }

            };

        }
    ])
    .component('wistiaUploader', {
        restrict: 'E',
        templateUrl: 'app/components/wistia-uploader/wistia-uploader.html',
        controller: 'wistiaUploaderCtrl',
    });

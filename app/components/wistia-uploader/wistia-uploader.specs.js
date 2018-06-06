'use strict';


describe('testModule module', function () {
    var rootScope;
    var scope;
    var controller;
    var spyOn1;
    beforeEach(function () {
        angular.mock.module('wistiaUploaderModule');
    });
    beforeEach(inject(function ($controller, $rootScope) {
        rootScope = $rootScope;
        scope = $rootScope.$new();
        spyOn1=spyOn(scope, "$on") ;
        controller = $controller('wistiaUploaderCtrl', { $scope: scope });
    }));

    it('should have controller', function () {

        expect(scope.uploadedVideo).not.toBeDefined();
        expect(controller).toBeDefined();
    });

    it('should not uploadedVideo undefined', function () {
        expect(scope.uploadedVideo).not.toBeDefined();
    });

    it('should listen for events', function () {
        var data = {
            hashed_id: '123',
            name:'Test video',
        };
        scope.$broadcast('fileuploaddone', data);
        expect(scope.$on).toHaveBeenCalled();
        expect(scope.$on).toHaveBeenCalledTimes(1);
        expect(scope.$on).toHaveBeenCalledWith('fileuploaddone',function (event,args) {

        });
    });





});

// describe('testModule module', function () {

//     beforeEach(function () {
//         angular.mock.module('testModule');
//     });

//     it('should format the name', inject(($controller,$rootScope) => {
//         const scope= $rootScope.$new();
//         // const name = 'John Doe';
//         const controller = $controller('testCtrl',{ $scope: scope });
//         console.dir(scope);

//         expect(controller).toBeDefined();
//     }));





// });
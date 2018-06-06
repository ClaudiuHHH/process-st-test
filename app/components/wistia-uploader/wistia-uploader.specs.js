'use strict';
describe('testModule module', function () {

    beforeEach(function () {
        angular.mock.module('wistiaUploaderModule');
    });

    it('should have valid controller', inject(function ($controller, $rootScope) {

        var scope = $rootScope.$new();
        var controller = $controller('wistiaUploaderCtrl', { $scope: scope });
        expect(controller).toBeDefined();
    }));

    it('should have uploadedVideo undefined', inject(function ($controller, $rootScope) {
        var scope = $rootScope.$new();
        var controller = $controller('wistiaUploaderCtrl', { $scope: scope });
        expect(scope.uploadedVideo).not.toBeDefined();
    }));

    it('should listen for fileaddoneevent', inject(function ($controller, $rootScope) {
        var scope = $rootScope.$new();
        spyOn(scope, "$on");
        var controller = $controller('wistiaUploaderCtrl', { $scope: scope });
        console.dir(controller);
        // spyOn(controller, "hadleFileuploAddOneEvent");
        var data = {
            hashed_id: '123',
            name: 'Test video',
        };
        scope.$broadcast('fileuploaddone', data);
        expect(scope.$on).toHaveBeenCalled();
        expect(scope.$on).toHaveBeenCalledTimes(1);
        //expect(controller.hadleFileuploAddOneEvent).toHaveBeenCalled();
    }));

});

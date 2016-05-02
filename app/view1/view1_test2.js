'use strict';

describe('myApp.view1 test2', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var $scope = {};
      var view1Ctrl = $controller('View1Ctrl', {$scope: $scope});
      expect(view1Ctrl).toBeDefined();
    }));

    it('should test goo', inject(function($controller) {
      //spec body
      var $scope = {
      };


      console.log("goo...");
      var view1Ctrl = $controller('View1Ctrl', {$scope: $scope});
      console.log($scope);
      expect($scope.goo).toEqual("goo goo");
    }));

  });
});
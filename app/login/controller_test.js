'use strict';

describe('myApp.login module', function() {

  beforeEach(module('myApp.login'));

  describe('password controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var $scope = {};
      var view1Ctrl = $controller('PasswordController', {$scope: $scope});
      expect(view1Ctrl).toBeDefined();
    }));

    it("sets the strength to 'strong' if the password length is > 8 chars", inject(function($controller) {
          console.log("$scope.grade");
          var $scope = {};
          var controller = $controller("PasswordController", {$scope: $scope});
          $scope.password = "longertheneightchars";
          $scope.grade();
          console.log($scope);
          expect($scope.strength).toEqual("strong");
        }));

  });
});
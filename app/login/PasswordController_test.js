/**
 * Created by Eugene on 02/05/2016.
 */

describe("PasswordController", function(){

    beforeEach(module("myApp.PasswordController"));

    var $controller;

    //beforeEach(inject(function(_$controller_){
    //    // The injector unwraps the underscore (_) from around the parameter when matching
    //    $controller = _$controller_;
    //}));

    describe("$scope.grade", function(){
       if("sets the strength to 'strong' if the password length is > 8 chars", inject(function($controller) {
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
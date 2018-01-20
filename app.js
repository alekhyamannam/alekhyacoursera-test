/* (function functionName() {
  angular.module('myapp', [])
  .controller("FirstController", function ($scope) {
      $scope.name = "Alekhya";
      $scope.sayhello = function () {
        return "dummy";

      }
  });
})();
*/
angular.module('NameCal', [])
.controller('NameCalController', function ($scope) {
    $scope.name = "";
    $scope.totalvalue = 0;
    $scope.displayValue = function () {
      var totalnamevalue = calnum($scope.name); //get the displayValue
        $scope.totalvalue  = totalnamevalue;
    };
    function calnum(str) {
      var totalstringValue = 0;
      for (var i=0; i<str.length; i++){
        totalstringValue += str.charCodeAt(i);
      }
      return totalstringValue;

    }
});

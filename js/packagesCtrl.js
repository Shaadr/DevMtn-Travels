angular.module('devmtnTravel').controller('packagesCtrl',function($scope, $stateParams, mainSrv) {
  $scope.packageData = mainSrv.travelInfo;
})

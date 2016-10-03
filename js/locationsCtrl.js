angular.module('devmtnTravel')
.controller('locationsCtrl',function($scope, $stateParams, mainSrv) {
  $scope.locationData = mainSrv.travelInfo;
})

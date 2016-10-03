angular.module('devmtnTravel')
.controller('bookedCtrl',function($scope, $stateParams, mainSrv) {

  // if($stateParams.id == 112233) {
  //   $scope.city = mainSrv.travelInfo[0]
  // }else if ($stateParams.id == 1122343) {
  //   $scope.city = mainSrv.travelInfo[1]
  // }else if ($stateParams.id == 11223489) {
  //   $scope.city = mainSrv.travelInfo[3]
  // }

  for(var i = 0; i < mainSrv.travelInfo.length; i++) {
    if ($stateParams.id == mainSrv.travelInfo[i].id) {
      $scope.city = mainSrv.travelInfo[i]
    }
  }

})

var app = angular.module('bmrApp', []);

//TextCtrl
app.controller('headerCtrl', function($scope){
  $scope.header = "Calculo de Costo Impresión 3d";

});

//MainCtrl
app.controller('mainCtrl', function ($scope){
  $scope.stats = {
    gramos: 0,
    tiempo: 0,
    metros: 0,
    preciof: 0,
    preciov: 0};
  
  var computeBMR = function(){

    $scope.stats.preciof =  ($scope.stats.gramos * 17) +         ($scope.stats.tiempo * 1000) + ($scope.stats.metros);
    
    $scope.stats.preciov = ($scope.stats.preciof * 1.4)

  }
  
  
  $scope.$watch('stats.gramos', computeBMR);
  $scope.$watch('stats.tiempo', computeBMR);
});

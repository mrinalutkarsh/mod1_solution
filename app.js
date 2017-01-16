(function(){
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope){
    $scope.items="";
    console.log("items"+$scope.items);
    $scope.output="";


    $scope.itemCheck = function(){
      //check if the input is not empty
      if($scope.items==""){
        $scope.output="Please enter data first";
      }else{
        //console.debug("inside itemcheck items: "+$scope.items);
        var itemArr = $scope.items.split(",");
        itemArr = itemArr.filter(function(n) { return n != undefined });
        //console.debug(itemArr.toString());
        var length = itemArr.length;
        //console.debug(length);
        $scope.output = $scope.getOutput(length);
      }
    };

    $scope.getOutput = function(length){
      if(length<=3){
        return "Enjoy!";
      }else{
        return "Too much!";
      }
    };
  };

})();

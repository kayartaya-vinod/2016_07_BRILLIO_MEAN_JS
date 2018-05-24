angular.module("mbCartDetailsControllerModule", [])
.controller("mbCartDetailsController", 
	["$scope", function($scope){

	$scope.emptyCart = function(){
		$scope.$parent.cart = $scope.cart = [];
	};

	$scope.deleteFromCart = function(p){
		var index = $scope.cart.indexOf(p);
		if(index>-1){
			$scope.cart.splice(index, 1);
		}
	};

}])
;
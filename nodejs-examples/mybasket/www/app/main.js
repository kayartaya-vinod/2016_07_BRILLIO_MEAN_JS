angular.module("mb", ["ngRoute", 
	"mbProductsControllerModule",
	"mbCartDetailsControllerModule",
	"mbLoginRegisterControllerModule"])
.factory("CONSTANTS", [function(){
	var obj = {};
	obj.baseUrl = "http://mybasket.vinod.co/api/";
	return obj;
}])
.controller("main", ["$scope", function($scope){

	if(localStorage.cart){
		$scope.cart = JSON.parse(localStorage.cart);
	}
	else {
		$scope.cart = []; 	
	}

	$scope.$watch(function(){
		var cart = $scope.cart;
		localStorage.cart = JSON.stringify(cart);
		$scope.cartValue = 0;
		cart.forEach(function(p){
			$scope.cartValue += (p.quantity*p.unit_price);
		});
	});
}])
.config(["$routeProvider", function($routeProvider){

	$routeProvider
	.when("/", {
		templateUrl: "partials/products.html",
		controller: "mbProductsController"
	})
	.when("/login-register", {
		templateUrl: "partials/login-register.html",
		controller: "mbLoginRegisterController"
	})
	.when("/cart-details", {
		templateUrl: "partials/cart-details.html",
		controller: "mbCartDetailsController"
	})
	.otherwise({});
}])
;

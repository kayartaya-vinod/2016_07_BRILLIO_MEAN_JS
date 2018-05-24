angular.module("mbProductsControllerModule", [])
.controller("mbProductsController", 
	["$scope", "$http", "CONSTANTS", 
	function($scope, $http, CONSTANTS){

	// web service URL
	var url = CONSTANTS.baseUrl + "products";

	function replace(ar, item){
		for(var i=0; i<ar.length; i++){
			if(ar[i]._id==item._id){
				ar[i] = item;
				break;
			}
		}
	}

	// return value of $http.get/post/put/delete is a promise
	$http.get(url)
	.success(function(resp){
		$scope.products = resp;

		// sync the content in the cart with products
		if($scope.cart.length){
			for(var i=0; i<$scope.cart.length; i++){
				replace($scope.products, $scope.cart[i]);
			}
		}
	})
	.error(function(){
		swal({
			type: "error",
			title: "OOPS!",
			text: "Something went wrong! Please try again later."
		});
	});

	

	$scope.addToCart = function(p){
		if(!p.quantity || p.quantity<0){
			p.quantity = 1;
		}

		var index = $scope.cart.indexOf(p);
		if(index==-1){
			$scope.cart.push(p);	
		}
		else{
			p.quantity++;
			$scope.cart[index] = p;
		}
		
	}

}])
;















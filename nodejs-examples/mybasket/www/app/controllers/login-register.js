angular.module("mbLoginRegisterControllerModule", [])
.controller("mbLoginRegisterController", 
	["$scope", "$http", "CONSTANTS", 
	function($scope, $http, CONSTANTS){

	$scope.reg = {};

	$scope.checkPasswordsMatch = function(){
		
		if($scope.reg.password && $scope.reg.password==$scope.reg.c_password){
			return true;
		}
		else if($scope.reg.password && $scope.reg.password!=$scope.reg.c_password){
			return false;
		}
		return true;
	};

	$scope.register = function(){
		if($scope.f1.$invalid){
			swal({
				type: "error",
				title: "OOPS!",
				text: "Registration form is invalid"
			});
			return;
		}

		var url = CONSTANTS.baseUrl + "users";
		$http.post(url, $scope.reg)
		.success(function(resp){
			if(resp.success==true){
				swal({
					type: "success",
					title: "Hooray!",
					text: "Registration successful!"
				});
			}
			else {
				swal({
					type: "error",
					title: "OOPS!",
					text: resp.message
				});
			}
		})
		.error(function(){
			swal({
				type: "error",
				title: "OOPS!",
				text: "Registration failed. Please contact customer support"
			});
		});
	};
}])
;











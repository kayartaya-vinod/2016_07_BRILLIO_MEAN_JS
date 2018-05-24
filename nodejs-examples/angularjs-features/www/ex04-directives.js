angular.module("ex04-directives", [])
.directive("appTable", ["$http", function($http){

	var d = {};

	d.restrict = "A";
	d.templateUrl = "templates/table.html";
	d.scope = {
		url: "="
	};
	d.link = function(scope, elem, attrs){
		console.log("the current div content is ", elem.html())
		scope.title = attrs.title;
		scope.cssClass = attrs.class;
		scope.toggleCssClass = function(){
			if(scope.cssClass){
				scope.cssClass = "";
			}
			else {
				scope.cssClass = attrs.class;
			}
		};

		$http.get(scope.url)
		.success(function(resp){
			scope.data = resp;
		});
	};

	return d;
}]);
angular.module("ex01-filters", [])
.filter("age", function(){ // called once during app init
		return function(dob, flag){ // called for each useage
			return "testing...";
		};
	})

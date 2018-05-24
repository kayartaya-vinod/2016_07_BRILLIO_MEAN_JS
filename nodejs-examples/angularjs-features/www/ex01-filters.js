angular.module("ex01-filters", [])
.filter("age", function(){ // called once during app init
		// We are registering this function as filter "age"
		// this function should return a function, which is
		// invoked for each useage of the filter

		return function(dob, flag){ // called for each useage

			// When the filter is used in an expression, 
			// the LHS of the | symbol is passed to this 
			// function as the first parameter
			// {{ "1974-01-20" | age }}
			// The values given after each : symbol will be 
			// passed as subsequent parameters
			// {{ "1974-01-20" | age : 1 }}

			// the return value from this function is going
			// to substitute the entire expression

			if(!dob){
				return "";
			}
			flag = flag || 0;
			
			var today = new Date();
			dob = new Date(dob);
			var diff = new Date(today-dob);
			var year = diff.getFullYear()-1970; // epoch
			var month = diff.getMonth();
			var days = diff.getDate();

			var out = "";
			switch(flag){
				case 0: 
					out = year + " years, " + month+ " months and " + days + " days."; break;
				case 1: 
					out = year + " years, " + month+ " months."; break;
				case 2: 
					out = year + " years."; break;

			}

			return out;
		};
	})
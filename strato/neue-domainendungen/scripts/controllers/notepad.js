'use strict';

angular.module('prerushApp')
	.controller('NotepadCtrl', function($scope) {
		$scope.shortdomain = function(domains){
			var max_length = 50-domains.tld.length-5;
			var name = domains.name;
			var shorten = name;
			if(name.length > max_length){
				var start = Math.floor(max_length/2);
				var end = name.length - (max_length-start);
			return shorten = name.slice(0, start) + "[...]" +name.slice(end, name.length-1);
		} else {
			return name;
		}
			
		};
		$scope.nodomain = false;

		$scope.del = function(domain) {

			//console.dir(domain);
			var domainComplete = domain;

			// check bool if we hit it
			var domainAlreadythere = false;

			var i = 0;

			// iterate through the array and search for a hit
			angular.forEach($scope.domainNotepad, function(eachdomain) {

				if (domainComplete.toLowerCase() == eachdomain.name.toLowerCase() + eachdomain.tld.toLowerCase()) {
					domainAlreadythere = true; // hit!
					// console.log('index:'+i);
					$scope.domainNotepad.splice(i, 1);
				}
				i++;
			});


			if ($scope.domainNotepad.length == 0) {
				//console.log('zero');

				$scope.nodomain = false;
			} else {

				//$scope.nodomain.hide = false;
			}


		};

	});
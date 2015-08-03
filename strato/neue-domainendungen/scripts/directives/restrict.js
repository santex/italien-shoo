'use strict';
// restricts the input of unwanted chars, when used with a input-regex with e.g: restrict="[^a-z0-9\-\s]"
angular.module('prerushApp')
	.directive('restrict', function($parse) {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: function(scope, iElement, iAttrs, controller) {
				scope.$watch(iAttrs.ngModel, function(value) {
					if (!value) {
						return;
					}
					$parse(iAttrs.ngModel).assign(scope, value.toLowerCase().replace(new RegExp(iAttrs.restrict, 'g'), '').replace(/\s+/g, '-'));
				});
			}
		}
	});
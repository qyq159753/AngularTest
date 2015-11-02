'use strict';

/* Directives */

var appModule = angular.module('phonecatApp');

appModule.directive('fileModel', ['$parse', function($parse){
	return{
		restrict: 'A',
		link: function(scope, element, attrs /*, ngModel*/){
			var model = $parse(attrs.fileModel);
			var modelSetter = model.assign;
			element.bind('change', function(event) {
				scope.$apply(function(){
					modelSetter(scope, element[0].files[0]);
				});
				scope.file = (event.srcElement || event.target).files[0];
				scope.getFile();
			});
		}
	}
}]);


appModule.directive('hello', function() {
    return {
        restrict: 'E',
        template: '<div>Hi there</div>',
        replace: true
    };
});
var homeApp = angular.module('homeApp', ['httpService']).
    controller('homeController', function ($scope, $compile, $templateCache, httpService) {
    	httpService.initList().success(function(data){
			$scope.lists=data.list;
			
		});
    })
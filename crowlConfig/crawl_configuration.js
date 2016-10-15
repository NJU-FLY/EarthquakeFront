var crawlApp = angular.module('crawlApp', ['httpService']).
    controller('crawlController', function ($scope, $compile, $templateCache, httpService) {
    	
            $scope.CrawlStart=function(){   
            
            	httpService.crawlStart().success(function(status){
            		if(status==1){
            			alert("运行成功，可以进入结果页进一步检索");
            		}
            	}).error(function(status){
            		alert("运行失败，请检查输入是否正确")
            	});
            };
            $scope.CrawlStop=function(){      	
           		httpService.crawlStop().success(function(status){
           			if(status==1){
            			alert("运行成功，可以进入结果页进一步检索");
            		}
           		}).error(function(status){
            		alert("运行失败")
            	});
            };
     
    });
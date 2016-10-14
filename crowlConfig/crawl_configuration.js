var crawlApp = angular.module('crawlApp', ['httpService']).
    controller('crawlController', function ($scope, $compile, $templateCache, httpService) {
    	
            $scope.CrawlStart=function(){      	
            	httpService.crawlStart().success(
            		function(){
            			alert("运行成功，可以开始检索。")
            		}
            	).fail(
            		function(){
            			alert("运行失败，请检查检索字段是否正确。")
            		}
            	);
            };
            $scope.CrawlStop=function(){      	
           	 httpService.crawlStop().success(
            		function(){
            			alert("爬虫已停止。")
            		}
            	);
            };
        }
    });
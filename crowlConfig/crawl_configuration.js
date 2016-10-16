var crawlApp = angular.module('crawlApp', ['httpService']).
    controller('crawlController', function ($scope, $compile, $templateCache, httpService) {
    		httpService.initCrawl().success(function(data){
    			$scope.urls=[];
    			for(var i=0;i<data.urlsList.length;i++){
    				urls.push(data.urlsList[i].url);
    			}
    			$scope.keywords=data.keywords;
    			$scope.timeStr=data.timeStr;
    			$scope.timeSeq=data.timeSeq;
    		});
            $scope.CrawlStart=function(){   
            
            	httpService.crawlStart().success(function(status){
            		if(status==1){
            			alert("运行成功，可以进入结果页进一步检索");
            		}else{
            			alert("运行失败，请检查输入是否正确");
            		}
            	});
            };
            $scope.CrawlStop=function(){      	
           		httpService.crawlStop().success(function(status){
           			if(status==1){
            			alert("爬虫已成功暂停");
            		}else{
            			alert("爬虫未能成功停止");
            		}
           		});
            };
     
    });
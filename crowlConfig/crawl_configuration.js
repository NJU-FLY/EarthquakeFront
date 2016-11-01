var crawlApp = angular.module('crawlApp', ['httpService']).
    controller('crawlController', function ($scope, $compile, $templateCache, httpService) {
    		httpService.initCrawl().success(function(data){
    			var urlArray=data.urls;
				$scope.urls="";
				for(var i=0;i<urlArray.length;i++){
					$scope.urls+=urlArray[i]+';'+'\n';
				}

    			$scope.keywords=data.keywords;
    			$scope.timeStr=data.timeStr;
    			$scope.timeSeq=data.timeSeq;
    		});
			$scope.changeReq=function(){
				var eventReq=$(".eventReq");
				var keywordReq=$(".keywordReq");
				if(eventReq.css("display")=="none"){
					eventReq.show();
					keywordReq.hide();
				}else{
					eventReq.hide();
					keywordReq.show();
				}
				
			};
            $scope.CrawlStart=function(){   
				$scope.getProcess=setInterval(function(){
					httpService.crawlProcess().success(function(data){
						$scope.processes=[];
						console.log(data.length);
						$scope.processes=data;
						
					});
				},1000);
            	httpService.crawlStart().success(function(status){
					
            		if(status.status==1){
            			alert("运行成功，可以进入结果页进一步检索");

            		}else{
            			alert("运行失败，请检查输入是否正确");
						clearInterval($scope.getProcess);
            		}
            	}).error(function(){
					clearInterval($scope.getProcess);
					alert("运行失败");
				});
				
				
            };
			
            $scope.CrawlStop=function(){      	
           		httpService.crawlStop().success(function(status){
           			if(status.status==1){
						
            			alert("爬虫已成功暂停");
						clearInterval($scope.getProcess);
            		}
           		});
            };
     
    });
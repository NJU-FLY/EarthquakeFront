/**
 * Created by FLY on 2016/2/8 0008.
 */


//列表页面模块
var listApp = angular.module('listApp', ['httpService']).
    controller('ListController', function ($scope, $compile, $templateCache, httpService) {
		$scope.sort="";
		$scope.order="";
		$scope.page="";
        //列表项数据拼接
        $scope.appendItemContent = function (data) {
            $scope.contentList = $scope.contentList || [];
            for (var i = 0; i < data.list.length; i++) {
                $scope.contentList.push(data.list[i]);
            }
        };
        //根据得到的数据条数确定页码
        $scope.convertToArray=function(data){
			var items=parseInt(data/10)+1;
			$scope.pageArray=[];
			for(var i=1;i<items+1;i++){
				$scope.pageArray.push(i);
			}
			console.log(items);
			console.log($scope.pageArray);
		}
        //侧边栏加载
        httpService.loadLeftNav().
            success(function (data) {
	             $scope.leftList = data;
            });
		httpService.initList().success(function(data){
			$scope.clearResult();
			$scope.appendItemContent(data);
			$scope.convertToArray(data.pageTotal);
			
		});
        //列表页面加载，传入页码及类别
        $scope.findContent=function(){
        	
        	$scope.clearResult();
        	httpService.loadList($scope.page,$scope.sort).
            success(function (data) {
                $scope.appendItemContent(data);
				$scope.convertToArray(data.pageTotal);
            });
			

        }
        //清除检索结果，重新检索
        $scope.clearResult=function(){
        	$scope.contentList=[];
        }
        //分类选取结果，传入页码及类别
        $scope.sortResult=function(){
        	$scope.clearResult();
			var id = $(event.target).data("id");
	        console.log(id);

        	var typename=$(event.target).text();
			$scope.sort=typename;
        	httpService.loadListByClass($scope.page,$scope.sort).success(function(data){
        		$scope.appendItemContent(data);
				$scope.convertToArray(data.pageTotal);
				
        	});
			
        }
      //按时间或事件排序
        $scope.sortByOrder=function(){
        	$scope.clearResult();
        	var sortClass=$(event.target).text();
			$scope.order=sortClass;
        	httpService.loadListByOrder($scope.page,$scope.sort,sortClass).success(function(data){
        		$scope.appendItemContent(data);
				$scope.convertToArray(data.pageTotal);
        	});
        	
        };
		//按页码排序
		$scope.sortByPage=function(){
			$scope.clearResult();
        	var sortPage=$(event.target).text();
			$scope.page=sortPage;
			httpService.loadListByPage($scope.page,$scope.sort).success(function(data){
        		$scope.appendItemContent(data);
				$scope.convertToArray(data.pageTotal);
        	});
		}
		
    });
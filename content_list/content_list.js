/**
 * Created by FLY on 2016/2/8 0008.
 */


//列表页面模块
var listApp = angular.module('listApp', ['httpService']).
    controller('ListController', function ($scope, $compile, $templateCache, httpService) {
     
        //列表项数据拼接
        $scope.appendItemContent = function (data) {
            $scope.contentList = $scope.contentList || [];
            for (var i = 0; i < data.length; i++) {
                $scope.contentList.push(data[i]);
            }
        };
        
        //侧边栏加载
        httpService.loadLeftNav().
            success(function (data) {
//           $scope.leftList = data.item;
	             $scope.leftList = data;
            });
		httpService.initList().success(function(data){
			$scope.appendItemContent(data);
		});
        //列表页面加载
        $scope.findContent=function(){
        	
        	$scope.clearResult();
        	httpService.loadList().
            success(function (data) {
                $scope.appendItemContent(data);
            });

        }
        //清除检索结果，重新检索
        $scope.clearResult=function(){
        	$scope.contentList=[];
        }
        //分类选取结果
        $scope.sortResult=function(){
        	$scope.clearResult();
        	var typename=$(event.target).text();
        	httpService.loadListByClass(typename).success(function(data){
        		$scope.appendItemContent(data);
        	});
        }
      //按时间或事件排序
        $scope.sortByOrder=function(){
        	$scope.clearResult();
        	var sortClass=$(event.target).text();
        	httpService.loadListByOrder(sortClass).success(function(data){
        		$scope.appendItemContent(data);
        	});
        	
        };
		
    });
/**
 * Created by FLY on 2016/2/8 0008.
 */


//列表页面模块
var listApp = angular.module('listApp', ['httpService']).
    controller('ListController', function ($scope, $compile, $templateCache, httpService) {
       
        var title=$scope.title;
        var content=$scope.content;
        //列表项数据拼接
        $scope.appendItemContent = function (data) {
            $scope.contentList = $scope.contentList || [];
            for (var i = 0; i < data.list.length; i++) {
                $scope.contentList.push(data.list[i]);
            }
        };
        
        //侧边栏加载
        httpService.loadLeftNav().
            success(function (data) {
                $scope.leftList = data.item;
            });

        //列表页面加载
        $scope.findContent=function(){
        	if(title==''&&title==null&&content==''&&content.null){
        		alert("检索字段不能为空！");
        	}else{
        	httpService.loadList().
            success(function (data) {
                $scope.appendItemContent(data);
            });
            }
        }
        //清除输入
        $scope.clearContent=function(){
        	$scope.title='';
        	$scope.content='';
        }
        

        //加载更多
        $scope.loadMore = function () {
            httpService.loadList().
                success(function (data) {
                    $scope.appendItemContent(data);
                });
        }

    });
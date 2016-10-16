/**
 * Created by FLY on 2016/2/8 0008.
 */

//详情页面模块
var detailApp = angular.module('detailApp', ['httpService']).
    controller('DetailController', ['$scope', 'httpService', function ($scope, httpService) {
        //侧边栏加载
        httpService.loadLeftNav().
            success(function (data) {
  //              $scope.leftList = data.item;
             $scope.leftList = data;
            });
        //详情加载
        var href=window.location.href;
        var id=href.slice(href.indexOf("=")+1);
        console.log(id);
        httpService.loadDetail(id).
            success(function (data) {
 //               $scope.detail = data.detail;
              $scope.detail = data;
            });
        
    }]);
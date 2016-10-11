/**
 * Created by FLY on 2016/2/8 0008.
 */

//详情页面模块
var detailApp = angular.module('detailApp', ['httpService']).
    controller('DetailController', ['$scope', 'httpService', function ($scope, httpService) {
        //侧边栏加载
        httpService.loadLeftNav().
            success(function (data) {
                $scope.leftList = data.item;
            });
        //详情加载
        $scope.
        httpService.loadDetail().
            success(function (data) {
                $scope.detail = data.detail;
            });
    }]);
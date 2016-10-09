/**
 * Created by FLY on 2016/2/11 0011.
 */

//数据请求服务
var httpService = angular.module('httpService', []).
    service('httpService', function ($http) {
        var loadLeftNav = function () {
            return $http({
                method: 'get',
                url: 'index.json'
            });
        };
        var loadList = function () {
            return $http({
                method: 'get',
                url: 'list.json'
            });
        };

        var loadDetail = function () {
            return $http({
                method: 'get',
                url: 'detail.json'
            });
        };
        return {
            loadLeftNav: function () {
                return loadLeftNav();
            },
            loadList: function () {
                return loadList();
            },
            loadDetail: function () {
                return loadDetail();
            }
        };
    });
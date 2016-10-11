/**
 * Created by FLY on 2016/2/11 0011.
 */

//数据请求服务
var httpService = angular.module('httpService', []).
    service('httpService', function ($http) {
        var loadLeftNav = function () {
            return $http({
                method: 'get',
//              url: '/getNav'
				url:'index.json'
               
            });
        };
        var loadList = function () {
            return $http({
                method: 'get',
//              url: '/getContentList',
				url:'list.json'
//            	params:{
//             	title:$scope.title,
//             	content:$scope.content
//             }
            });
        };

        var loadDetail = function () {
            return $http({
                method: 'get',
                url: 'detail.json'
//             	params:{
//             	title:$scope.detailTitle
//             	
//             }
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
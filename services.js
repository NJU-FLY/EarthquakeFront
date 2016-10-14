/**
 * Created by FLY on 2016/2/11 0011.
 */

//数据请求服务
var httpService = angular.module('httpService',[]).
    service('httpService', function ($http) {
    	//获取左边栏数据
        var loadLeftNav = function () {
        	/*
        	 * 接口：/leftbar
        	 * 参数：无
        	 * 返回：{"item":["",""]}
        	 */
            return $http({
                method: 'get',
//              url: '/search',
				url:'index.json'
               
            });
        };
		
        var loadList = function () {
        	var data={
               	'title':$("#title").val(),
               	'content':$("#content").val()
              };
        	/*
        	 * 接口：/search
        	 * 参数：{"title":"","content":"","className":"","timeSort":"","eventSort":""}
        	 * 返回：{"list": [{
						      "id" :"事件序列",
						      "num":"序号",
						      "atime":"发布时间",
						      "keyWords":"关键词",
						      "source":"来源地址",
						      "title":"标题",      
						      "abstract": "摘要",
						    	"url":"网址",
						      "ctime":"爬取时间"
   							 }]
   							 }
        	 */
        	console.log(data);
            return $http({
                method: 'get',
                url: '/search',
//				url:'list.json'
              	params:data
            });
        };

        var loadDetail = function () {
        	/*
        	 * 接口：/contentdetail
        	 * 参数：无
        	 * 返回：{"detail":{
							  "id" : "事件序列",
							  "title": "标题",
							  "info": "摘要",
							  "content": "内容"
							}
					}
        	 */
            return $http({
                method: 'get',
//              url:'/contentDetail'
	            url: 'detail.json'
            });
        };
        /*
         * 爬虫开始接口
         */
        var crawlStart=function(){
        	var urlArray=$scope.urls.split(" ");
        	var time=$scope.time;
        	var paramsStr="";
        	if(time.indexOf("-")!=-1){
        		paramsStr="crawler/start?url="+urlArray+"&timeStr="+$scope.time+"&keywords="+$scope.keyWord;
        	}else{
        		paramsStr="crawler/start?url="+urlArray+"&timeSeq="+$scope.time+"&keywords=";
        	}
//      	var urlStr="";
//      	if(urlArray.length>1){
//      		for(var i=0;i<urlArray.length;i++){
//      			urlStr+=urlArray[i]+";";
//      		}
//      		urlStr=urlStr.substring(0,urlStr.length-1)
//      	}else{
//      		urlStr=$scope.urls;
//      	}
        	
        	return $http({
        		method:'get',
        		url:paramsStr
        		
        	});
        };
        var crawlStop=function(){
        	return $http({
        		method:'get',
        		url:'crawler/stop'	
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
            },
            crawlStart:function(){
            	return crawlStart();
            },
            crawlStop:function(){
            	return crawlStop();
            }

        };
    });
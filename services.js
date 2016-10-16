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
                url: '/leftbar'
//				url:'index.json'
               
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
						      "eventid" :"事件序列",
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
		var loadListByClass=function(type){
			var data={
               	'title':$("#title").val(),
               	'content':$("#content").val(),
               	'typename':type
              };
        	/*
        	 * 接口：/search
        	 * 参数：{"title":"","content":"","typename":""}
        	 */
        	console.log(data);
            return $http({
                method: 'get',
                url: '/search',
//				url:'list.json'
              	params:data
            });
		};
		var initList=function(){
			var data={
               	'title':'',
               	'content':''
        
              };
        	/*
        	 * 接口：/search
        	 * 参数：{"title":"","content":"","typename":""}
        	 */
            return $http({
                method: 'get',
                url: '/search',
//				url:'list.json'
              	params:data
            });
		};
		
		var loadListByOrder=function(sortClass){
			var data={};
			var title=$("#title").val();
//			title=encodeURI(title);
			var content=$("#content").val();
			switch(sortClass){
				case '按发布时间升序':
				data={
               	'title':title,
               	'content':content,
               	'orderName':'publishedtime',
               	'order':'1'
              		};
             	 break;case '按发布时间降序':
				data={
               	'title':title,
               	'content':content,
               	'orderName':'publishedtime',
               	'order':'2'
              		};
             	 break;
             	 case '按事件升序':
				data={
               	'title':title,
               	'content':content,
               	'orderName':'eventid',
               	'order':'1'
              		};
             	 break;
             	 case '按事件降序':
				data={
               	'title':title,
               	'content':content,
               	'orderName':'eventid',
               	'order':'2'
              		};
             	 break;
             	 
			}
			
        	/*
        	 * 接口：/search
        	 * 参数：{"title":"","content":"","typename":""}
        	 */
        	console.log(data);
            return $http({
                method: 'get',
                url: '/search',
//				url:'list.json'
              	params:data
            });
		};
		
        var loadDetail = function (id) {
        	
        	/*
        	 * 接口：/contentdetail
        	 * 参数：{
        	 * 	'id':id
        	 * }
        	 * 返回：{"detail":{
							  "id" : "事件序列",
							  "title": "标题",
							  "info": "摘要",
							  "content": "内容"
							}
					}
        	 */
      		console.log(id);
            return $http({
                method: 'get',
                url:'/contentdetail',
				params:{
					'id':id
				}
//	            url: 'detail.json'
            });
        };
        /*
         * 爬虫开始接口
         */
        var crawlStart=function(){
        	var urlArray=$("#urls").val().split(";");
        	var time=$("#time").val();
        	var eventSeq=$("#eventSeq").val();
        	var keyWords=$("#keywords").val();
        	var paramsStr="";
        	if(eventSeq==null||eventSeq==""){
        		paramsStr={
        			'urls':urlArray,
        			'timeStr':time,
        			'keywords':keyWords
        		};
        	}else{
        		paramsStr={
        			'urls':urlArray,
        			'timeSeq':eventSeq,
        			'keywords':""
        		};
        	}
        	console.log(urlArray instanceof Array);
        	
        	return $http({
        		method:'post',
        		url:'crawler/start',
        		headers:{
        			 'Content-Type':'application/json'
        		},
        		responseType:'json',
				type:"json",//返回值以json格式解析
				params:JSON.stringify(paramsStr)
        		
        	});
        };
        var crawlStop=function(){
        	return $http({
        		method:'get',
        		url:'crawler/stop'	
        	});
        };
		//初始化爬虫配置
		var initCrawl=function(){
			return $http({
        		method:'get',
        		url:'/crawler'	
        	});
		}
        return {
            loadLeftNav: function () {
                return loadLeftNav();
            },
            loadList: function () {
                return loadList();
            },
            loadListByClass:function(type){
            	return loadListByClass(type);
            },
            loadListByOrder:function(sortClass){
            	return loadListByOrder(sortClass);
            },
            loadDetail: function (id) {
                return loadDetail(id);
            },
            crawlStart:function(){
            	return crawlStart();
            },
            crawlStop:function(){
            	return crawlStop();
            },
            initCrawl:function(){
            	return initCrawl();
            },
            initList:function(){
            	return initList();
            }

        };
    });
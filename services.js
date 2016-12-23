/**
 * Created by FLY on 2016/2/11 0011.
 */

//数据请求服务
var httpService = angular.module('httpService',[]).
    service('httpService', function ($http,$httpParamSerializerJQLike) {
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
		
        var loadList = function (pageCount,type) {
        	var data={
               	'title':$("#title").val(),
               	'content':$("#content").val(),
				'pageCount':pageCount,
				'pageNum':'10',
				'typename':type,
				'orderName':'publishedtime',
               	'order':'1',
				'summary':$("#summary").val(),
				'eventId':$("#eventid").val(),
				'crawledStartTime':$("#crawledStartTime").val(),
				'crawledEndTime':$("#crawledEndTime").val(),
				'publishedStartTime':$("#publishedStartTime").val(),
				'publishedEndTime':$("#publishedEndTime").val()
				
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
		var loadListByClass=function(pageCount,type){
			var data={
               	'title':$("#title").val(),
               	'content':$("#content").val(),
               	'typename':type,
				'pageCount':'',
				'pageNum':'10',
				'summary':$("#summary").val(),
				'eventId':$("#eventid").val(),
				'crawledStartTime':$("#crawledStartTime").val(),
				'crawledEndTime':$("#crawledEndTime").val(),
				'publishedStartTime':$("#publishedStartTime").val(),
				'publishedEndTime':$("#publishedEndTime").val()
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

		var loadListByPage=function(pageCount,type,sortClass){
			var orderName="";
			var order="";
			switch(sortClass){
				case '按发布时间↑':
				orderName="publishedtime";
				order="1";
				break;
				case '按发布时间↓':
				orderName="publishedtime";
				order="2";
				break;
				case '按爬取时间↑':
				orderName="crawledtime";
				order="1";
				break;
				case '按爬取时间↓':
				orderName="crawledtime";
				order="2";
				break;
				case '按事件↑':
				orderName="eventid";
				order="1";
				break;
				case '按事件↓':
				orderName="eventid";
				order="2";
				break;
				
			}
			var data={
               	'title':$("#title").val(),
               	'content':$("#content").val(),
				'pageCount':pageCount,
				'pageNum':'10',
				'typename':type,
				'orderName':orderName,
               	'order':order,
				'summary':$("#summary").val(),
				'eventId':$("#eventid").val(),
				'crawledStartTime':$("#crawledStartTime").val(),
				'crawledEndTime':$("#crawledEndTime").val(),
				'publishedStartTime':$("#publishedStartTime").val(),
				'publishedEndTime':$("#publishedEndTime").val()
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
               	'content':'',
				'pageCount':'',
				'pageNum':'10',
				'typename':'',
				'orderName':'publishedtime',
               	'order':'1',
				'summary':'',
				'eventId':'',
				'crawledStartTime':'',
				'crawledEndTime':'',
				'publishedStartTime':'',
				'publishedEndTime':''

        
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
		

		var loadListByOrder=function(pageCount,type,sortClass){

			var data={};
			var title=$("#title").val();
//			title=encodeURI(title);
			var content=$("#content").val();
			switch(sortClass){

				case '按发布时间↑':

				data={
               	'title':title,
               	'content':content,
               	'orderName':'publishedtime',
               	'order':'1',
				'pageCount':pageCount,
				'pageNum':'10',
				'typename':type,
				'summary':$("#summary").val(),
				'eventId':$("#eventid").val(),
				'crawledStartTime':$("#crawledStartTime").val(),
				'crawledEndTime':$("#crawledEndTime").val(),
				'publishedStartTime':$("#publishedStartTime").val(),
				'publishedEndTime':$("#publishedEndTime").val()

              		};

             	 break;
				 case '按发布时间↓':

				data={
               	'title':title,
               	'content':content,
               	'orderName':'publishedtime',
               	'order':'2',
				'pageCount':pageCount,
				'pageNum':'10',
				'typename':type,
				'summary':$("#summary").val(),
				'eventId':$("#eventid").val(),
				'crawledStartTime':$("#crawledStartTime").val(),
				'crawledEndTime':$("#crawledEndTime").val(),
				'publishedStartTime':$("#publishedStartTime").val(),
				'publishedEndTime':$("#publishedEndTime").val()
              		};
             	 break;
				 case '按爬取时间↑':
				data={
               	'title':title,
               	'content':content,
               	'orderName':'crawledtime',
               	'order':'1',
				'pageCount':pageCount,
				'pageNum':'10',
				'typename':type,
				'summary':$("#summary").val(),
				'eventId':$("#eventid").val(),
				'crawledStartTime':$("#crawledStartTime").val(),
				'crawledEndTime':$("#crawledEndTime").val(),
				'publishedStartTime':$("#publishedStartTime").val(),
				'publishedEndTime':$("#publishedEndTime").val()

              		};
             	 break;
				 case '按爬取时间↓':
				data={
               	'title':title,
               	'content':content,
               	'orderName':'crawledtime',
               	'order':'2',
				'pageCount':pageCount,
				'pageNum':'10',
				'typename':type,
				'summary':$("#summary").val(),
				'eventId':$("#eventid").val(),
				'crawledStartTime':$("#crawledStartTime").val(),
				'crawledEndTime':$("#crawledEndTime").val(),
				'publishedStartTime':$("#publishedStartTime").val(),
				'publishedEndTime':$("#publishedEndTime").val()
              		};
             	 break;
             	 case '按事件↑':
				data={
               	'title':title,
               	'content':content,
               	'orderName':'eventid',
               	'order':'1',
				'pageCount':pageCount,
				'pageNum':'10',
				'typename':type,
				'summary':$("#summary").val(),
				'eventId':$("#eventid").val(),
				'crawledStartTime':$("#crawledStartTime").val(),
				'crawledEndTime':$("#crawledEndTime").val(),
				'publishedStartTime':$("#publishedStartTime").val(),
				'publishedEndTime':$("#publishedEndTime").val()
              		};
             	 break;
             	 case '按事件↓':
				data={
               	'title':title,
               	'content':content,
               	'orderName':'eventid',
               	'order':'2',
				'pageCount':pageCount,
				'pageNum':'10',
				'typename':type,
				'summary':$("#summary").val(),
				'eventId':$("#eventid").val(),
				'crawledStartTime':$("#crawledStartTime").val(),
				'crawledEndTime':$("#crawledEndTime").val(),
				'publishedStartTime':$("#publishedStartTime").val(),
				'publishedEndTime':$("#publishedEndTime").val()
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

        	var urlArray=$("#urls").val().split(";\n");
        	var time=$("#time").val();
        	var eventSeq=$("#eventSeq").val();
        	var keyWords=$("#keywords").val();
        	var paramsStr={};

        	if(eventSeq==null||eventSeq==""){
        		paramsStr={
        			'urls':urlArray,
        			'timeStr':time,

					'timeSeq':"",

        			'keywords':keyWords
        		};
        	}else{
        		paramsStr={
        			'urls':urlArray,
        			'timeSeq':eventSeq,

					'timeStr':"",

        			'keywords':""
        		};
        	}
        	console.log(urlArray instanceof Array);

			console.log(paramsStr);

        	
        	return $http({
        		method:'post',
        		url:'crawler/start',

        		headers:{
        			 'Content-Type':'application/json'
        		},
        		responseType:'json',
				type:"json",//返回值以json格式解析
				params:JSON.stringify(paramsStr)

				headers:{
        			 'Content-Type':'application/json'
        		},        	
				data:JSON.stringify(paramsStr)

        		
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

		//拉取爬虫数据
		var crawlProcess=function(){
			return $http({
				method:'get',
				url:'crawler/process'
	//			url:'process.json'
			});
		}

        return {
            loadLeftNav: function () {
                return loadLeftNav();
            },
            loadList: function (pageCount,type) {
                return loadList(pageCount,type);
            },
            loadListByClass:function(pageCount,type){
            	return loadListByClass(pageCount,type);
            },
            loadListByOrder:function(pageCount,type,sortClass){
            	return loadListByOrder(pageCount,type,sortClass);
            },
			loadListByPage:function(pageCount,type,sortClass){
				return loadListByPage(pageCount,type,sortClass);
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

			crawlProcess:function(){
            	return crawlProcess();
            },

            initList:function(){
            	return initList();
            }

        };
    });
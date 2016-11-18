<template>
	<!-- 详情页-->
<div class="content-detail">
    <!--<ul class="detail-nav breadcrumb">-->
        <!--<li>新闻</li>-->
        <!--<li>危险驾驶案</li>-->
    <!--</ul>-->
    <div class="detail-header" >
        <div class="detail-title">{{detail.title}}</div>
        <div class="detail-info">{{detail.info}}</div>
    </div>
    <div class="detail-detail-header">
        <span>消息正文</span>
    </div>
    <div class="detail-detail">{{detail.content}}</div>
</div>
</template>

<script>
	export default {
	data () {
		let detail={
				title:"sss",
				info:"xxx",
				content:"lll"
		}
	
	}
	}
</script>

<style>
	.content-detail{
    margin-top: 60px;
    margin-left: 200px;
    padding: 20px 20px 20px 40px;
}

	.detail-header{
	    margin-top: 20px;
	    background: #f2f4f6;
	    border: 1px solid #e5e5e5;
	    border-radius: 4px;
	}
	
	.detail-title{
	    margin-top: 30px;
	    font-size: 22px;
	    font-weight: 800;
	    color: #2e6889;
	    text-align: center;
	}
	
	.detail-info{
	    margin-top: 30px;
	    margin-bottom: 30px;
	    font-size: 18px;
	    color: #a9aaab;
	    text-align: center;
	}
	
	.detail-detail-header{
	    margin-top: 20px;
	    height: 40px;
	    background: #f2f4f6;
	    border: 1px solid #e5e5e5;
	    border-radius: 4px;
	    padding: 10px 0;
	}
	
	.detail-detail-header span{
	    margin-left: 10px;
	    font-size: 15px;
	    color: #a9aaab;
	}
	
	.detail-detail{
	    margin-top: 30px;
	    color:#484848;
	    font-size: 18px;
	    line-height: 1.8;
	}
</style>
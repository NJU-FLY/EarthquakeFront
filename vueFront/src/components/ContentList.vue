<template>
	<div>
	<!-- 列表页-->
	<!--<sidebar></sidebar>-->
	<div class="searchButton">
	<form class="bs-example bs-example-form" role="form">
		<div class="input-group">
			
			<input type="text" class="form-control"  placeholder="输入文章的标题或副标题查找">
		</div>
		<div class="input-group">
			
			<input type="text" class="form-control"  placeholder="输入文章内容查找">
			
		</div>
		<button type="button" class="btn btn-primary" >查找</button>
		<button type="button" class="btn btn-primary clearInput" >清除</button>
		
	</form>
</div>
<div class="content-list">
    <div class="item-list" id="item-list">
        <div class="content-item">
            <div class="parting-line"></div>
            <div class="item-title"><router-link to="/contentDetail">sss</router-link></div>
            <div class="item-info">lll</div>
            <div class="item-abstract">llll </div>
        </div>
    </div>
   
</div>
</div>
</template>
<!--<script>
import Sidebar from './components/Sidebar'

export default {
components: {
    'sidebar':Sidebar
}
}
</script>-->
<style>
	/* 内容列表样式 */
.content-list {
    margin-top: 30px;
    margin-left: 250px;
    padding: 20px 20px 20px 40px;
}

.content-item{
    margin-bottom: 30px;
}

.parting-line{
    margin-bottom: 5px;
    border-bottom: 1px solid #447e9f;
}

.item-title {
    font-size: 20px;
    font-weight: 800;
    color: #447e9f;
    padding: 10px;
    cursor: pointer;
}

.item-info {
    font-size: 16px;
    color: #447e9f;
    padding: 10px;
}

.item-abstract {
    padding: 10px;
    cursor: pointer;
}

.load-more{
    float: right;
    width: 100%;
    height: 40px;
    border: 1px solid #447e9f;
    margin-top: 40px;
    margin-bottom: 50px;
    display: table;
    cursor: pointer;
}

.load-more-content{
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    font-size: 16px;
}

</style>
<!--<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">已有时长</h1>
    </div>

    <div class="panel-body">
      <h1 class="text-center">{{ time }} 小时</h1>
    </div>

  </div>
</template>

<script>
  export default {
    props: ['time']
  }
</script>-->
	
	<template>
		<div>
		<ul class="nav nav-left">
    <li><a href="#">法律法规</a></li>
     <li><a href="#">行业动态</a></li>
      <li><a href="#">监测预报</a></li>
       <li><a href="#">科技检测</a></li>
        <li><a href="#">热点报道</a></li>
		</ul>
		</div>
	</template>
/* 侧边栏样式 */
<style>
.nav-left{
    position: fixed;
    margin-top: 30px;
    width: 240px;
}

.nav-left li{
    border-bottom: 1px dotted rgb(50,58,69);
    font-size: 20px;
}
</style>
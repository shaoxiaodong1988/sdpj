<template>
	<div class="top">
		<div class="container">
			<div class="logo fl">
				<a href="#"></a>
			</div>
			<div class="nav fl">
				<ul>
					<li><router-link to="/main">首页</router-link></li>
					<li><router-link to="/community">报价社区</router-link></li>
					<li><a @click="trading()">交易中心</a></li>
					<li><router-link target="_blank" to="/page02">应用</router-link></li>
				</ul>
			</div>
			<div class="menu fr">
				<ul>
					<li><a class="help" href="">帮助中心</a></li>
					<li><router-link to="/login">登录</router-link></li>
					<li><router-link to="/register">注册</router-link></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
      }
    },
    methods: {
      trading () {
        window.open('http://www.shendupiaoju.com/f/billPurch')
      }
    }
  }
</script>
<style>
  .top{background-color:#fff;}
	.logo a{
	    display:block;
	    width:250px;
	    height:60px;
	    background:url('../../static/images/logo.png') no-repeat left center;
	    background-size:200px 50px;
	}
	.top .nav ul,.top .menu ul{
	    overflow:hidden;
	}
	.top .nav ul li,.top .menu ul li{
	    float:left;
	}
	.top .nav ul li a{
	    display:block;
	    font-size:20px;
	    color:#000;
	    height:70px;
	    line-height:70px;
	    padding:0 28px;
	}
	.top .menu ul li a{
	    display:block;
	    font-size:18px;
	    color:#000;
	    height:70px;
	    line-height:70px;
	    padding:0 20px;
	}
	.top .menu ul li a.help{
	    background:url('../../static/images/help-bg.png') no-repeat left center;
	    background-size:19px 16px;
	    padding-left:25px;
	}
</style>

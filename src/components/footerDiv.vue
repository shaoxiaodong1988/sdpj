<template>
  <div>
  <!--partner-->
  <div class="partner">
    <div class="container">
      <div class="title fl">合作伙伴</div>
      <div class="partner-list fl">
        <ul>
          <li>
            <a href="">
              <img src="../../static/images/partner1.jpg" alt="兴业数金">
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../static/images/partner2.jpg" alt="电子商业汇票系统" >
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../static/images/partner3.jpg" alt="阿里云">
            </a>
          </li>
          <li>
            <a href="">
              <img src="../../static/images/partner1.jpg" alt="兴业数金">
            </a>
          </li>
        </ul>
      </div>
      <div class="more right">
        <a href="">更多</a>
      </div>
    </div>
  </div>
	<!--footer-->
	<div class="footer">
		<div class="container">
			<div class="menu">
				<h3>关于我们</h3>
				<ul>
					<li><a href="">公司简介</a></li>
					<li><a href="">联系我们</a></li>
					<li><a href="">关于我们</a></li>
				</ul>
			</div>
			<div class="menu">
				<h3>网站条款</h3>
				<ul>
					<li><a href="">隐私协议</a></li>
					<li><a href="">服务条款</a></li>
					<li><a href="">免责声明</a></li>
				</ul>
			</div>
			<div class="menu">
				<h3>帮助中心</h3>
				<ul>
					<li><a href="">新手指南</a></li>
					<li><a href="">订阅策略</a></li>
				</ul>
			</div>
			<div class="contact">
				<h3>联系我们</h3>
				<ul>
					<li class="tel">400-0539-233</li>
					<li>服务时间：周一至周日 9:00-17:00</li>
					<li>中国·济南市中区绿地中心23层</li>
				</ul>
			</div>
		</div>
		<div class="container">
			<div class="link">
				<span>友情链接：</span>
				<a href="">兴业数字金融服务（上海）股份有限公司</a>
				<a href="">兴业银行</a>
				<a href="">上海票据交易所</a>
				<a href="">阿里云</a>
			</div>
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
    components: {}
  }
</script>
<style>
  /*合作伙伴*/
  .partner {
    position: relative;
    top:40px;
    background-color: #fff;
  }
  .partner .container{
    width:924px;
    overflow:hidden;
  }
  .partner .title{
    font-size:29px;
    color:#000;
    line-height:70px;
  }
  .partner-list ul{
    overflow:hidden;
    padding:0 20px;
  }
  .partner-list ul li{
    float:left;
    width:162px;
    height:44px;
    padding:13px 10px;
  }
  .partner-list ul li a,.partner-list ul li img{
    display:block;
    width:162px;
    height:44px;
  }
  .partner .more a{
    display:block;
    font-size:16px;
    color:#000;
    line-height:70px;
  }
  /*footer*/
	.footer{
    position: relative;
    position: relative;
    top:40px;
		width:100%;
		background-color:#4c4c4c;
		padding:30px 0;
		min-width:1200px;
	}
	.footer .container{
		width:924px;
		overflow:hidden;
	}
	.footer .menu{
		float:left;
		margin-right:80px;
	}
	.footer .menu h3{
		font-size:20px;
		color:#fff;
		font-weight:normal;
		padding:10px 0;
	}
	.footer .menu ul li a{
		display:block;
		font-size:12px;
		color:#c2c2c2;
		padding:10px 0;
	}
	.footer .contact{
		float:right;
		max-width:300px;
	}
	.footer .contact h3{
		font-size:20px;
		color:#fff;
		font-weight:normal;
		padding:20px 0 20px 25px;
	}
	.footer .contact ul{
		overflow:hidden;
	}
	.footer .contact ul li{
		font-size:12px;
		color:#c2c2c2;
		padding:10px 0;
		background-image:url('../../static/images/footer-bg.png');
		background-size:20px 91px;
		background-repeat:no-repeat;
		padding-left:25px;
	}
	.footer .contact ul li.tel{
		font-size:25px;
		line-height:1;
		padding-bottom:13px;
		letter-spacing: 3px;
	}
	.footer .contact ul li:nth-child(1){
		background-position:left 12px;
	}
	.footer .contact ul li:nth-child(2){
		background-position:left -26px;
	}
	.footer .contact ul li:nth-child(3){
		background-position:left -60px;
	}
	.footer .link{
		margin-top:20px;
		padding-top:20px;
		border-top:1px solid #fff;
	}
	.footer .link span{
		font-size:12px;
		color:#fff;
		margin-right:10px;
	}
	.footer .link a{
		font-size:12px;
		color:#c2c2c2;
		margin-right:20px;
	}

</style>

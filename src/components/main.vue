<template>
	<!-- main -->
  <div class="main text-center">
    <!--banner-->
    <div class="banner-box">
      <div class="banner">
        <div class="banner-img"></div>
      </div>
      <div class="prev-btn"></div>
      <div class="next-btn"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mainDiv',
    data () {
      return {
      }
    }
  }
</script>
<style>
  	/* main */
    .main{
      position:relative;
      height: 750px;
      top:30px;
      left:0;
      right:0;
      bottom:0px;
    }
    /*banner*/
    .banner-img{
      height: 750px;
      min-width:1200px;
      background:url('../../static/images/banner-img.jpg') no-repeat center;
      background-size:cover;
    }
    .prev-btn,.next-btn{
      position:absolute;
      width:180px;
      height:180px;
      z-index:100;
      margin-top:-90px;
    }
    .prev-btn:hover,.next-btn:hover{
      cursor:pointer;
    }
    .prev-btn{
      background:url('../../static/images/prev-btn.png') no-repeat center;
      background-size:100% 100%;
      top:50%;
      left:76px;
    }
    .next-btn{
      background:url('../../static/images/next-btn.png') no-repeat center;
      background-size:100% 100%;
      top:50%;
      right:76px;
    }

</style>

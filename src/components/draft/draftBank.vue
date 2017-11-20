<template>
  <div class="draft">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick" stripe :data="tableData">
	    <el-tab-pane label="全部" name="first">
	    	<el-table :data="tableData" stripe fit show-heade style="width: 100%">
			    <el-table-column prop="date" label="" width="80px">
			    	<template slot-scope="scope">
			        <i class="el-icon-collection"></i>
			        <!--<span style="margin-left: 10px">{{ scope.row.date }}</span>-->
			      </template>
			    </el-table-column>
			    <el-table-column prop="name" label="报价方" list></el-table-column>
			    <el-table-column label="联系">
			    	<template slot-scope="scope">
		        	<el-tooltip v-if="scope.row.weixin" class="item" effect="dark" :content="scope.row.weixin" placement="top">
					    	<i class="el-icon-weixin"></i>
		        	</el-tooltip>
			        <el-tooltip v-if="scope.row.qq" class="item" effect="dark" :content="scope.row.qq" placement="top">
					    	<i class="el-icon-qq"></i>
		        	</el-tooltip>
			        <el-tooltip v-if="scope.row.phone" class="item" effect="dark" :content="scope.row.phone" placement="top">
					    	<i class="el-icon-mobile"></i>
		        	</el-tooltip>
			      </template>
			    </el-table-column>
			    <el-table-column prop="original" label="原文"> </el-table-column>
			    <el-table-column prop="direction" label="方向">
			    	<template slot-scope="scope">
			        <span class="directionSell" v-if="scope.row.direction==1">出</span>
			        <span class="directionBuy" v-if="scope.row.direction!=1">收</span>
			      </template>
			    </el-table-column>
			    <el-table-column prop="timeLimit" label="期限"> </el-table-column>
			    <el-table-column prop="num" label="数量"> </el-table-column>
			    <el-table-column prop="price" label="价格"> </el-table-column>
			    <el-table-column prop="tags" label="标签"> </el-table-column>
			    <el-table-column prop="lastUpdate" label="最后更新"> </el-table-column>
			    <el-table-column prop="matching" label="匹配"> </el-table-column>
			  </el-table>
			  <div class="draftButton"><span class="fl">共计：3831条有效报价</span><span class="fr">2017年10月 星期五 10:20:32</span></div>
	    </el-tab-pane>
	    <el-tab-pane label="出票" name="second">
	    	<el-table :data="tableData" stripe fit show-heade style="width: 100%">
			    <el-table-column prop="date" label="" width="80px">
			    	<template slot-scope="scope">
			        <i class="el-icon-collection"></i>
			        <!--<span style="margin-left: 10px">{{ scope.row.date }}</span>-->
			      </template>
			    </el-table-column>
			    <el-table-column prop="name" label="报价方" list></el-table-column>
			    <el-table-column label="联系">
			    	<template slot-scope="scope">
		        	<el-tooltip v-if="scope.row.weixin" class="item" effect="dark" :content="scope.row.weixin" placement="top">
					    	<i class="el-icon-weixin"></i>
		        	</el-tooltip>
			        <el-tooltip v-if="scope.row.qq" class="item" effect="dark" :content="scope.row.qq" placement="top">
					    	<i class="el-icon-qq"></i>
		        	</el-tooltip>
			        <el-tooltip v-if="scope.row.phone" class="item" effect="dark" :content="scope.row.phone" placement="top">
					    	<i class="el-icon-mobile"></i>
		        	</el-tooltip>
			      </template>
			    </el-table-column>
			    <el-table-column prop="original" label="原文"> </el-table-column>
			    <el-table-column prop="direction" label="方向">
			    	<template slot-scope="scope">
			        <span class="directionSell" v-if="scope.row.direction==1">出</span>
			        <span class="directionBuy" v-if="scope.row.direction!=1">收</span>
			      </template>
			    </el-table-column>
			    <el-table-column prop="timeLimit" label="期限"> </el-table-column>
			    <el-table-column prop="num" label="数量"> </el-table-column>
			    <el-table-column prop="price" label="价格"> </el-table-column>
			    <el-table-column prop="tags" label="标签"> </el-table-column>
			    <el-table-column prop="lastUpdate" label="最后更新"> </el-table-column>
			    <el-table-column prop="matching" label="匹配"> </el-table-column>
			  </el-table>
			  <div class="draftButton"><span class="fl">共计：3831条有效报价</span><span class="fr">2017年10月 星期五 10:20:32</span></div>
	    </el-tab-pane>
	    <el-tab-pane label="收票" name="third">
	    	<el-table :data="tableData" stripe fit show-heade style="width: 100%">
			    <el-table-column prop="date" label="" width="80px">
			    	<template slot-scope="scope">
			        <i class="el-icon-collection"></i>
			        <!--<span style="margin-left: 10px">{{ scope.row.date }}</span>-->
			      </template>
			    </el-table-column>
			    <el-table-column prop="name" label="报价方" list></el-table-column>
			    <el-table-column label="联系">
			    	<template slot-scope="scope">
		        	<el-tooltip v-if="scope.row.weixin" class="item" effect="dark" :content="scope.row.weixin" placement="top">
					    	<i class="el-icon-weixin"></i>
		        	</el-tooltip>
			        <el-tooltip v-if="scope.row.qq" class="item" effect="dark" :content="scope.row.qq" placement="top">
					    	<i class="el-icon-qq"></i>
		        	</el-tooltip>
			        <el-tooltip v-if="scope.row.phone" class="item" effect="dark" :content="scope.row.phone" placement="top">
					    	<i class="el-icon-mobile"></i>
		        	</el-tooltip>
			      </template>
			    </el-table-column>
			    <el-table-column prop="original" label="原文"> </el-table-column>
			    <el-table-column prop="direction" label="方向">
			    	<template slot-scope="scope">
			        <span class="directionSell" v-if="scope.row.direction==1">出</span>
			        <span class="directionBuy" v-if="scope.row.direction!=1">收</span>
			      </template>
			    </el-table-column>
			    <el-table-column prop="timeLimit" label="期限"> </el-table-column>
			    <el-table-column prop="num" label="数量"> </el-table-column>
			    <el-table-column prop="price" label="价格"> </el-table-column>
			    <el-table-column prop="tags" label="标签"> </el-table-column>
			    <el-table-column prop="lastUpdate" label="最后更新"> </el-table-column>
			    <el-table-column prop="matching" label="匹配"> </el-table-column>
			  </el-table>
			  <div class="draftButton"><span class="fl">共计：3831条有效报价</span><span class="fr">2017年10月 星期五 10:20:32</span></div>
	    </el-tab-pane>
	  </el-tabs>
  </div>
</template>

<script>
  /* eslint-disable */
 export default {
    data() {
      return {
        activeName2: 'first',
        tableData: [{
          date: '',
          name: '上海必达金融-张学良',
          address: '上海市普陀区金沙江路 1518 弄',
          weixin:'xuchao1883',
          qq:'2478195990',
          phone:'13181234625',
          original:"出国股 500万 十张",//原文
          direction:2,//方向
          timeLimit:'3-6M',//期限
          num:"--",
          price:'--',
          tags:'柜台票',
          lastUpdate:'2017-10-31 11:25:14',
          matching:''

        }, {
          date: '',
          name: '上海必达金融-张学良',
          address: '上海市普陀区金沙江路 1518 弄',
          weixin:'xuchao1883',
          original:"出国股 500万 十张",//原文
          direction:2,//方向
          timeLimit:'3-6M',//期限
          num:"--",
          price:'--',
          tags:'柜台票',
          lastUpdate:'2017-10-31 11:25:14',
          matching:''
        }, {
          date: '',
          name: '上海必达金融-张学良',
          address: '上海市普陀区金沙江路 1518 弄',
          original:"出国股 500万 十张",//原文
          direction:2,//方向
          timeLimit:'3-6M',//期限
          num:"--",
          price:'--',
          tags:'柜台票',
          lastUpdate:'2017-10-31 11:25:14',
          matching:''
        }, {
          date: '',
          name: '上海必达金融-张学良',
          address: '上海市普陀区金沙江路 1518 弄',
          weixin:'xuchao1883',
          qq:'2478195990',
          original:"出国股 500万 十张",//原文
          direction:2,//方向
          timeLimit:'3-6M',//期限
          num:"--",
          price:'--',
          tags:'柜台票',
          lastUpdate:'2017-10-31 11:25:14',
          matching:''
        }]
      };
    },
    methods: {
      handleClick(tab, row) {
        //console.log(tab, row);
      },
      tips(num,index){console.log(index);
      	layer.tips(num, '.', {
				  tips: [1, '#3595CC'],
				  time: 4000
				});
      }

    }
  };
</script>

<style lang="less">
	.draft{
		background:#00002c;
		padding-top:15px;
		height:100%;
		.el-tabs--card{
			/*全部、出票、收票选项卡*/
			.el-tabs__header{
				margin-bottom:0;
				border-bottom:none;
				.el-tabs__nav-wrap{
					border-bottom: 7px solid #060;
					.el-tabs__nav{
						border:none;
						.el-tabs__item{
							height:30px;
							width:85px;
					    background: #030;
					    color: #fff;
					    border: none;
					    margin-right:10px;
					    padding-top:0;
					    text-align:center;
					    line-height:30px;
						}
						.is-active{
							background:#060;
						}
					}
				}
			}
			/*表格*/
			.el-tabs__content{
				/*表头*/
				.el-table{
					&:before {
						background:#000;
					}
					td,th{
						background:#000;
						border:none;
						height:30px;
						line-height:30px;
						padding:0;
						color:#ffc;
					}

					th{
						background:url(../../../static/images/sprites.png) no-repeat #000;
						background-position:-93px 6px;
						.cell{
							height:30px;
							line-height:30px;
						}
						&:first-child{
							background:#000;
						}
					}
				}

					/*表内容*/
				.el-table--striped{
					.el-table__body{
						tr{
							td{
								background:rgba(25,25,25,0.9);
								border:none;
								color:#ffc;
								width:80px;
								font-size:12px;
								&:first-child{
									text-align:center;
								}
								i{
									display:inline-block;
									margin-right:5px;
									height:20px;
									width:20px;
									margin-top:5px;
									background:url(../../../static/images/sprites.png) no-repeat;
								}
								.el-icon-collection{

								}
								.el-icon-weixin{
									width:24px;
									background-position:-20px 0px;
								}
								.el-icon-qq{
									background-position:-45px 0px;
								}
								.el-icon-mobile{
									background-position:-68px 0px;
								}
								span.directionSell{
									background: #00f;
    							padding: 2px 10px;
    							border-radius:5px;
								}
								span.directionBuy{
									background: #c60;
    							padding: 2px 10px;
    							border-radius:5px;
								}
							}
							&.el-table__row--striped{
								td{
									background:#000;
								}
							}
							&:hover{
								td{
									background:#300;
								}
							}
						}

					}
				}
			}
		}
	}

</style>

<template>
  <div class="myDraft">
  	<div class="myDraftTop">
  		 	<p class="name"><label><span>张学良</span>上海必达金融有限公司</label></p>
		  	<p><label><span>固话：</span>暂无信息</label><label>手机：18602013569</label></p>
		  	<p>请确认您的联系方式，如有问题可联系：<a href="tencent://message/?uin=2478195990&Site=在线QQ&Menu=yes">在线客服</a>   或拨打专线：400-0539-233</p>
  	</div>
  	<div class="myDraftMain">
  		<h5><span>我的报价</span></h5>
  		<!--当前无数据-->
  		<div v-if="!whether" class="noWhether">
  			<img src="../../../static/images/warning.png"  />
  			<p>您暂未发布过任何报价</p>
  			<div>
  				<el-button type="primary" @click="mySecondDraft()">我的报价</el-button>
  			</div>
  		</div>
  		<!--当前有数据-->
  		<div v-if="whether" class="haveWhether">
  			<div class="whetherTop"><button @click="mySecondDraft()">+新建报价</button><span>点这里</span></div>
  			<el-table :data="tableData" stripe style="width: 100%">
  				<el-table-column  label="" width="20px">
			    	<template slot-scope="scope">
			        <!--<span style="margin-left: 10px">{{ scope.row.date }}</span>-->
			      </template>
			    </el-table-column>
			    <el-table-column prop="direction" label="方向" width="60">
			    	<template slot-scope="scope">
			        <span class="direction" v-if="scope.row.direction==1">出</span>
			        <span class="direction" v-if="scope.row.direction!=1">入</span>
			      </template>
			    </el-table-column>
			    <el-table-column prop="timeLimit" label="期限" width="60"> </el-table-column>
			    <el-table-column prop="num" label="数量" width="60"> </el-table-column>
			    <el-table-column prop="price" label="价格" width="60"> </el-table-column>
			    <el-table-column prop="tags" label="标签" width="163">
			    	<template slot-scope="scope">
			        <span class="tagsName" v-for="tags in scope.row.tags">{{tags}}</span>
			      </template>
			    </el-table-column>
			    <el-table-column prop="matching" label="备注/原文" width="200"> </el-table-column>
			    <el-table-column prop="lastUpdate" label="最后更新" width="164"> </el-table-column>
			  </el-table>
  		</div>
  	</div>
  </div>
</template>
<style lang="less">
		.layui-layer-title{
			background:#006;
			color:#fff;
			font-size:20px;
			height:40px;
			border-bottom:3px solid #191919;
		}
		.myDraft{
			height:100%;
			padding:0 10px 20px 10px;
			border-bottom:20px solid #006;
			background:#00002c;
			.myDraftTop{
				background:#000;
				p{
					line-height:55px;
					text-indent:50px;
					font-size:15px;
					&:first-child{
						color:#fc6;
					}
					&:nth-child(2){
						color:#ffc;
						label:first-child{
							margin-right:180px;
						}
					}
					&:nth-child(3){
						color:#660;
						a{
							color:#3c0;
							text-decoration: underline;
						}
					}
				}
			}
			.myDraftMain{
				background:#00002c;
				padding-top:15px;
				height:222px;
				h5{
					height:30px;
					line-height:30px;
					/*border-bottom:3px solid #006;*/
					span{
						display:inline-block;
						width:150px;
						background:#006;
						font-size:15px;
						color:#fff;
						text-align:center;
						line-height:33px;
						position:relative;
						&:before{
							content:"";
							/*border:solid 15px transparent;*/
							border-left:15px solid #006;
							border-bottom:15px solid #006;
							border-right:15px solid #00002c;
							border-top:15px solid #00002c;
							position:absolute;
							right:-20px;
							height:0px;
							width:0px;
						}
					}
				}
			}
			.noWhether{
				padding-top: 42px;
		    text-align: center;
		    border: 3px solid #006;
		    /*margin: 0 10px 20px 10px;*/
		   background:#000;
				p{
					color:#ffc;
					font-size:20px;
					line-height:60px;
				}
				button{
					width:120px;
					height:30px;
					line-height:30px;
					padding:0;
					margin-bottom:20px;
					background:rgba(0,0,153,0.8);
					border:none;
					&:hover{
						background:rgba(0,0,153,1);
					}
				}
			}
			.haveWhether{
				background:#000;
				padding-top:5px;
				border: 3px solid #006;
				.whetherTop{
					margin:10px 0 10px 20px;
					button{
						height:36px;
						line-height:36px;
						width:110px;
						background:#f90;
						border:none;
						font-size:15px;
						float:left;
						cursor:pointer;
					}
					span{
						margin-left:30px;
						display:inline-block;
						width:72px;
						height:36px;
						background:#f30;
						font-size:12px;
						color:#000;
						line-height:36px;
						text-align:center;
						position:relative;
						&:before{
							border:18px solid transparent;
							border-right:18px solid #f30;
							position:absolute;
							content:"";
							left:-36px;
							height:0px;
							width:0px;
						}
					}
				}
				.el-table{
					&:before {
						background:#000;
					}
					td,th{
						background:#000;
						border:none;
						height:25px;
						line-height:25px;
						padding:0;
						color:#ffc;
					}
					th{
						background:url(../../../static/images/sprites.png) no-repeat #000;
						background-position:-93px 6px;
						.cell{
							height:25px;
							line-height:25px;
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
								span.tagsName{
									background: #f90;
    							padding: 2px 8px;
    							border-radius:5px;
    							margin: 3px;
    							float: left;
								}
								.cell{
									line-height:15px;
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
		
	
</style>
<script>
 export default {
    data() {
      return {
        activeName2: 'first',
        whether:true,
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
          tags:['柜台票','演唱票','演唱票','演唱票','演唱票','演唱票','演唱票'],
          lastUpdate:'2017-10-31 11:25:14',
          matching:''
          
        }, {
          date: '',
          name: '上海必达金融-张学良',
          address: '上海市普陀区金沙江路 1518 弄',
          weixin:'xuchao1883',
          original:"出国股 500万 十张",//原文
          direction:1,//方向
          timeLimit:'3-6M',//期限
          num:"--",
          price:'--',
          tags:['柜台票','演唱票','演唱票','演唱票','演唱票'],
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
          tags:['柜台票'],
          lastUpdate:'2017-10-31 11:25:14',
          matching:''
        }, {
          date: '',
          name: '上海必达金融-张学良',
          address: '上海市普陀区金沙江路 1518 弄',
          weixin:'xuchao1883',
          qq:'2478195990',
          original:"出国股 500万 十张",//原文
          direction:1,//方向
          timeLimit:'3-6M',//期限
          num:"--",
          price:'--',
          tags:['柜台票'],
          lastUpdate:'2017-10-31 11:25:14',
          matching:''
        }]
      };
    },
    methods: {
      handleClick(tab, event) {
        //console.log(tab, event);
      },
      mySecondDraft(){
		    layer.open({
		      type: 2,
		      title: '编辑报价',
		      maxmin: true,
		      loading:false,
		      shadeClose: true, //点击遮罩关闭层
		      area : ['430px' , '370px'],
		      content: '#/draftSecondPopup',
		      skin: 'second'
		    });
    	},
    }
  };
</script>



<template>
    <div>
      <div class='offerLeft fl demo-input-suffix'>
        <div class='search'>
          <el-input class='fl' prefix-icon='el-icon-search' placeholder='备注、报甲方、机构、群'></el-input>
          <el-button class='fl'>搜索</el-button>
        </div>
        <div class='offer'>
          <el-button>导出报价</el-button>
          <el-button @click='myDraft()'>我的报价</el-button>
        </div>
        <div class='dataList'>
          <span class='label'>期限：</span>
          <el-radio-group v-model='radio1' size='medium'>
            <el-radio-button v-for='timelimit in yp_timeLimit' :key="timelimit.id" :label='timelimit.name'></el-radio-button>
          </el-radio-group>
        </div>
        <div class='dataList'>
          <span class='label'>机构：</span>
          <el-radio-group v-model='radio2' size='medium'>
            <el-radio-button v-for='institutions in yp_institutions' :key="institutions.id" :label='institutions.name'></el-radio-button>
          </el-radio-group>
        </div>
        <div class='dataList'>
          <span class='label'>数量：</span>
          <el-radio-group v-model='radio3' size='medium'>
            <el-radio-button v-for='num in yp_num' :key="num.id"  :label='num.name'></el-radio-button>
          </el-radio-group>
        </div>
        <div class='dataList'>
          <span class='label'>地区：</span>
          <el-radio-group v-model='radio4' size='medium'>
            <el-radio-button v-for='address in yp_address' :key="address.id"  :label='address.name'></el-radio-button>
          </el-radio-group>
        </div>
        <div class='dataList'>
          <span class='label'>标签：</span>
          <el-radio-group v-model='radio5' size='medium'>
            <el-radio-button v-for='tags in yp_tags' :key="tags.id"   :label='tags.name'></el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <!--弹窗-->
      <div class='myDraft'>
        <div class='myDraftTop'>
          <p class='name'><label><span>张学良</span>上海必达金融有限公司</label></p>
          <p><label><span>固话：</span>暂无信息</label><label>手机：18602013569</label></p>
          <p>请确认您的联系方式，如有问题可联系：<a href='tencent:// message/?uin=2478195990&Site=在线QQ&Menu=yes'>在线客服</a>   或拨打专线：400-0539-233</p>
        </div>
        <div class='myDraftMain'>
          <h5><span>我的报价</span></h5>
          <!--当前无数据-->
          <div v-if='whether' class='noWhether'>
            <img src='../../static/images/warning.png'  />
            <p>您暂未发布过任何报价</p>
            <div>
              <el-button type='primary' @click='mySecondDraft()'>我的报价</el-button>
            </div>
          </div>
          <!--当前有数据-->
          <div v-if='!whether' class='haveWhether'>
            <div class='whetherTop'><button @click='mySecondDraft()'>+新建报价</button><span>点这里</span></div>
            <el-table :data='tableData' stripe style='width: 100%'>
              <el-table-column  label='' width='20px'>
                <template slot-scope='scope'>
                  <!--<span style='margin-left: 10px'>{{ scope.row.date }}</span>-->
                </template>
              </el-table-column>
              <el-table-column prop='direction' label='方向' width='60'>
                <template slot-scope='scope'>
                  <span class='direction' v-if='scope.row.direction==1'>出</span>
                  <span class='direction' v-if='scope.row.direction!=1'>入</span>
                </template>
              </el-table-column>
              <el-table-column prop='timeLimit' label='期限' width='60'> </el-table-column>
              <el-table-column prop='num' label='数量' width='60'> </el-table-column>
              <el-table-column prop='price' label='价格' width='60'> </el-table-column>
              <el-table-column prop='tags' label='标签' width='163'>
                <template slot-scope='scope'>
                  <span class='tagsName' v-for='tags in scope.row.tags'>{{tags}}</span>
                </template>
              </el-table-column>
              <el-table-column prop='matching' label='备注/原文' width='200'> </el-table-column>
              <el-table-column prop='lastUpdate' label='最后更新' width='164'> </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
      <!--二级弹窗-->
      <div class='mySecondDraft'>
        <h5 class='title'>编辑报价</h5>
      </div>

    </div>
</template>
<style lang='less' >
  @import url('../../static/layui/layer.css');
  .offerLeft{
    width:290px;
    padding-left:20px;
    padding-top: 10px;
    background-color: black;
    height:430px;
    .el-radio-button__inner{
      background:none;
      border:none;
      color:#fff;
    }
    .search{
      margin-top:15px;
      overflow:hidden;
      button{
        width:68px;
        margin-left:10px
      }
      .el-input{
        width:180px;
        input[type='text']{
          background:#cc9;
          font-size:12px;
        }
        input[type='text']:before{
          color:#000;
        }
        input[type='text']::-webkit-input-placeholder { /* WebKit browsers */
          color:#000;
        }
        input[type='text']:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
          color:#000;
        }
        input[type='text']::-moz-placeholder { /* Mozilla Firefox 19+ */
          color:#000;
        }
        input[type='text']:-ms-input-placeholder { /* Internet Explorer 10+ */
          color:#000;
        }
      }
      .el-input__prefix .el-icon-search:before {
        color:#000;
      }
    }
    .offer{
      margin-top:20px;
      margin-bottom:20px;
      .el-button{
        width:100px;
        font-size:15px;
        height:30px;
        line-height:30px;
        padding:0;
        background:#600;
        border:none;
        &:first-child{
          color:#cc9;
        }
        &:last-child{
          color:#fff;
          float:right;
          margin-right:30px;
        }
      }
    }
    .dataList{
      margin-top:10px;
      overflow:hidden;
      .label{
        float:left;
        color:#fff;
        height:28px;
        line-height:28px;
        font-size:12px;
      }
      .el-radio-group{
        display:block;
        .el-radio-button{
          float:left;
        }

      }
    }
    .el-radio-button:first-child .el-radio-button__inner{
      border-radius:0;
      border-left:0;
    }
    .el-radio-button--medium .el-radio-button__inner{
      font-size: 12px;
      border-radius: 0;
      margin: 6px;
      padding: 2px 4px;
    }
    .el-radio-button:last-child .el-radio-button__inner{
      border-radius:0;
    }
    .el-radio-button__inner:hover{
      color:#c60;
    }
    .el-radio-button__orig-radio:checked+.el-radio-button__inner{
      background:#c60;
      border-color: #c60;
      -webkit-box-shadow: -1px 0 0 0 #c60;
      box-shadow: -1px 0 0 0 #c60;
      color:#000;
    }
  }
  /*弹窗*/
  .community .layui-layer-title{
    background:#006;
    color:#fff;
    font-size:20px;
    height:40px;
    border-bottom:3px solid #191919;
  }
  .community .layui-layer-setwin .layui-layer-min cite{
    background-color:#fff;
  }
  .myDraft{
    display:none;
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
            content: '';
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
            content: '';
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
          background:url(../../static/images/sprites.png) no-repeat #000;
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
    }
  }
  .mySecondDraft{
    z-index: 19921024;
    display:none;
    position:absolute;
    width:400px;
    height:460px;
    top:50%;
    left:50%;
    margin-top:-200px;
    margin-left:-230px;
    background:#000;
    border:3px solid #006;
    .title{
      background:#006;
      color:#fff;
      font-size:12px;
      height:20px;
      border-bottom:3px solid #191919;
      text-indent:20px;
    }
    .el-tabs{
      margin-top:10px;
      padding:10px;
      .el-tabs__nav{
        .el-tabs__item{
          color:#fff;
          background:#006;
          border-bottom:1px solid #dfe4ed;
          &.is-active{
            border-bottom-color:#000;
          }
        }
      }
      .el-tab-pane{
        background:#00002c;
        .el-form-item{
          margin-bottom:0;
          select{
            width: 210px;
            height: 30px;
            background: #333c30;
            border: none;
            border-radius: 5px;
            color: #fff;
            text-indent: 10px;
          }
          button{
            height: 26px;
            width: 88px;
            line-height: 26px;
            padding: 0;
            background:#006;
            border:none;
            color:#fff;
          }
          &.textarea {
            .el-form-item__content{
              position: relative;
              left: -50px;
              textarea{
                background: rgb(255, 153, 51);
                width: 255px;
                height: 50px;
                border-radius: 5px;
                margin: 5px 0px 0px;
                color: rgb(0, 0, 0);
              }
              textarea::-webkit-input-placeholder { /* WebKit browsers */
                color:#000;
              }
              textarea:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                color:#000;
              }
              textarea::-moz-placeholder { /* Mozilla Firefox 19+ */
                color:#000;
              }
              textarea:-ms-input-placeholder { /* Internet Explorer 10+ */
                color:#000;
              }
            }
          }
          &.submit{
            .el-form-item__content{
              position:relative;
              right:-25px;
            }
          }
        }
        label{
          color:#ffc;

        }
        .el-radio-button{
          span{
            background:#006;
            border:none;
            box-shadow:none;
            margin-left:20px;
            border-radius:5px;
            height:30px;
            line-height:30px;
            width:40px;
            padding:0;
            color:#fff;
          }
          &.is-active{
            span{
              background:#f93;
              color:#000;
            }
          }

        }
      }
    }
  }
</style>

<script type='text/javascript'>
  import $ from 'jquery'
  // 报价中心
  $(document).on('click', '.layui-layer-close,.layui-layer-shade', function () {
    $('.myDraft').hide()
  })
  // 取消报价
  // $(document).on('click','.closeSecondDraft',function(){
  // $('.closeSecondDraft,.shade').hide();
  // })
  export default {
    name: 'header',
    methods: {
      myDraft () {
        this.$layer.open({
          type: 1,
          title: '报价中心',
          maxmin: true,
          loading: false,
          shadeClose: true, // 点击遮罩关闭层
          area: ['830px', '520px'],
          content: $('.myDraft')
        })
      },
      mySecondDraft () {
        $('.mySecondDraft,.shade').show()
      },
      closeSecondDraft () {
        $('.mySecondDraft,.shade').hide()
      }
    },
    data () {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'))
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'))
            } else {
              callback()
            }
          }
        }, 1000)
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
        activeName2: 'first',
        whether: true,
        radio10: '收',
        offerPopup: false,
        yp_timeLimit: [// 银票-期限
          {
            name: '全部'
          },
          {
            name: '<3m'
          },
          {
            name: '3-6m'
          },
          {
            name: '6-9m'
          },
          {
            name: '9-12m'
          }
        ],
        yp_address: [// 地址
          {
            name: '全部'
          }, {
            name: '北京'
          }, {
            name: '天津'
          }, {
            name: '重庆'
          }, {
            name: '黑龙江'
          }, {
            name: '吉林'
          }, {
            name: '辽宁'
          }, {
            name: '内蒙古'
          }, {
            name: '河北'
          }, {
            name: '新疆'
          }, {
            name: '甘肃'
          }, {
            name: '青海'
          }, {
            name: '陕西'
          }, {
            name: '宁夏'
          }, {
            name: '河南'
          }, {
            name: '山东'
          }, {
            name: '山西'
          }, {
            name: '安徽'
          }, {
            name: '湖北'
          }, {
            name: '湖南'
          }, {
            name: '江苏'
          }, {
            name: '四川'
          }, {
            name: '贵州'
          }, {
            name: '云南'
          }, {
            name: '广西'
          }, {
            name: '西藏'
          }, {
            name: '浙江'
          }, {
            name: '江西'
          }, {
            name: '广东'
          }, {
            name: '福建'
          }, {
            name: '台湾'
          }, {
            name: '海南'
          }, {
            name: '香港'
          }, {
            name: '澳门'
          }
        ],
        yp_institutions: [// 银票-机构
          {
            name: '大行'
          }, {
            name: '股份'
          }, {
            name: '城商'
          }, {
            name: '农信'
          }, {
            name: '财务公司'
          }, {
            name: '其他'
          }
        ],
        yp_num: [// 银票-数量
          {
            name: '100万以下'
          }, {
            name: '100-500万'
          }, {
            name: '500-1000万'
          }, {
            name: '1000-5000万'
          }, {
            name: '5000万以上'
          }
        ],
        yp_tags: [// 银票-标签
          {
            name: '付货款'
          }, {
            name: '柜台票'
          }, {
            name: '光票'
          }, {
            name: '无回头背书'
          }, {
            name: '其他'
          }
        ],
        sp_enterprise: [// 商票-企业
          {
            name: '央企'
          }, {
            name: '国企'
          }, {
            name: '民企'
          }, {
            name: '其他'
          }
        ],
        sp_mainBody: [// 商票-主体
          {
            name: 'AAA'
          }, {
            name: 'AA'
          }, {
            name: 'A'
          }, {
            name: 'BBB'
          }, {
            name: 'BB'
          }, {
            name: 'B'
          }
        ],
        sp_industry: [// 商票-行业
          {
            name: '电气设备'
          }, {
            name: '房地产'
          },
          {
            name: '化工'
          },
          {
            name: '钢铁'
          },
          {
            name: '商业贸易'
          },
          {
            name: '建筑材料'
          },
          {
            name: '采掘'
          },
          {
            name: '电子'
          },
          {
            name: '非银金融'
          },
          {
            name: '国防军工'
          },
          {
            name: '公共事业'
          },
          {
            name: '计算机'
          },
          {
            name: '交通运输'
          },
          {
            name: '机械设备'
          },
          {
            name: '家用电器'
          },
          {
            name: '建筑装饰'
          },
          {
            name: '农林牧渔'
          },
          {
            name: '汽车制造'
          },
          {
            name: '食品饮料'
          },
          {
            name: '休闲服务'
          },
          {
            name: '银行'
          },
          {
            name: '有色金属'
          },
          {
            name: '医药服务'
          },
          {
            name: '综合'
          }
        ],
        sp_timeLimit: [// 商票-期限
          {
            name: '2-7D'
          }, {
            name: '8-14D'
          }, {
            name: '15-21D'
          }, {
            name: '22-1M'
          }, {
            name: '1-2M'
          }, {
            name: '2-3M'
          }, {
            name: '3-6M'
          }, {
            name: '>6M'
          }
        ],
        sp_num: [// 商票-数量
          {
            name: '500万以下'
          }, {
            name: '500-1000万'
          }, {
            name: '1000-5000万'
          }, {
            name: '5000万-1亿'
          }, {
            name: '1-2亿'
          }, {
            name: '2-5亿'
          }, {
            name: '5亿以上'
          }
        ],
        sp_tags: [// 商票-标签
          {
            name: '质押'
          }, {
            name: '拆借'
          }, {
            name: '买断'
          }, {
            name: '承兑保证金'
          }, {
            name: '过桥'
          }, {
            name: '钱在账上'
          }, {
            name: '预约明天'
          }, {
            name: '押利率'
          }, {
            name: '押信用'
          }, {
            name: '押存单'
          }
        ],
        radio1: '全部',
        radio2: '大行',
        radio3: '100万以下',
        radio4: '全部',
        radio5: '付货款'
      }
    },
    components: {

    }
  }
</script>

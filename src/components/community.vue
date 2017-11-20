<template>
  <div class="community">
    <leftDiv></leftDiv>
    <div id="tab">
    <el-tabs type="card" v-model="tabView"  @tab-click="handleTabsClick">
      <el-tab-pane label="银行承兑汇票" name="draftBank" id="draftBank"  ></el-tab-pane>
      <el-tab-pane label="商业承兑汇票" name="draftBusiness"  ></el-tab-pane>
      <el-tab-pane label="线上资金" name="draftOnline" ></el-tab-pane>
    </el-tabs>
      <keep-alive>
        <component v-bind:is="tabView"></component>
      </keep-alive>

    </div>
  </div>
</template>
<script  scoped="scoped">
  import leftDiv from './left'
  import draftBank from './draft/draftBank'
  import draftBusiness from './draft/draftBusiness'
  import draftOnline from './draft/draftOnline'

  export default {
    name: 'community',
    components: {
      leftDiv,
      draftBank,
      draftBusiness,
      draftOnline
    },
    data () {
      this.$store.state.tabView = 'draftBank'
      return {
        tabView: 'draftBank'
      }
    },
    methods: {
      handleTabsClick (tab, event) {
        if (tab.name === 'draftBank') {
          this.tabView = 'draftBank'
        } else if (tab.name === 'draftBusiness') {
          console.log(123)
          this.tabView = 'draftBusiness'
        } else {
          this.$emit('tabView', 'draftOnline')
        }
      }
    }
  }
</script>
<style lang="less">
  .community{
    position: relative;
    padding-top: 15px;
    background:#00002c;
    height: 630px;
    top:30px;
    left:0;
    right:0;
    bottom:0px;
  }
#tab{
  position: relative;
  padding-left:10px;
  overflow:hidden;
}
  el-tabs{

  }
  el-tab-pane{
    padding-left:40px;
    overflow:hidden;
      float:left;
      width:200px;
      height:70px;
      line-height:70px;
      font-size:15px;
      text-align:center;
      border-top-right-radius:5px;
      border-top-left-radius:5px;
    background:#900;
  }
</style>

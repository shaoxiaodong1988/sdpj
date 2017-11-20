<template>
  <div id="home">
    <headerDiv></headerDiv>
    <router-view></router-view>
    <footerDiv></footerDiv>
  </div>
</template>

<script>
import headerDiv from './headerDiv'
import footerDiv from './footerDiv'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  components: {
    headerDiv,
    footerDiv
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

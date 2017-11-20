// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import layer from 'vue-layer'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)
/* 加载插件 */
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$layer = layer(Vue)
Vue.prototype.$ajax = axios

export const store = new Vuex.Store({
  state: {
    url: 'http://localhost:8081/'
  },
  getters: {
  },
  mutations: {
    searchQuote (state) {
      axios.post(state.url, {
        tabView: state.child.community.state.tabView
      })
    }
  },
  modules: {
    community: {
      state: {
        tabView: String
      },
      mutations: {},
      getter: {
        searchQuote (state) {
          axios({method: 'post',
            url: state.url + '',
            data: {
              tabView: state.community.state.tabView
            },
            responseType: 'json'
          }).then(function (response) {
            console.log(response.data)
          })
        }
      },
      modules: {
        left: {
          state: {
            radio1: '全部',
            radio2: '大行',
            radio3: '100万以下',
            radio4: '全部',
            radio5: '付货款'
          },
          mutations: {},
          getter: {
          }
        },
        draftBank: {
          state: {
            tabView: String
          },
          mutations: {},
          getter: {
          }
        }
      }
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

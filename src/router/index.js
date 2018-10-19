import Vue from 'vue'
import Router from 'vue-router'
import newcdcontent from '../components/newCd_Content.vue';
import hotsongcontent from '../components/hotSong_Content.vue';
Vue.use(Router)

export default new Router({
  linkExactActiveClass:'active',
  routes: [
    // {
    //   path:'/zuire',
    //   component:newcdcontent
    // },
    // {
    //   path:'/rihan',
    //   component:newcdcontent

    // },
    // {
    //   path:'/oumei',
    //   component:newcdcontent
    // },
    // {
    //   path:'/huayu',
    //   component:newcdcontent

    // },
    // {
    //   path:'/danqu',
    //   component:newcdcontent
    // },
    // // {
    // //   path:'/hotzuire',
    // //   components:{
    // //     app:hotsongcontent
    // //   }
    // // },
    // // {
    // //   path:'/hotliuxing',
    // //   components:{
    // //     app:hotsongcontent
    // //   }
    // // },
    // // {
    // //   path:'/hotyaogun',
    // //   components:{
    // //     app:hotsongcontent
    // //   }
    // // },
    // // {
    // //   path:'/hotminyao',
    // //   components:{
    // //     app:hotsongcontent
    // //   }
    // // },
    // // {
    // //   path:'/hotyuansheng',
    // //   components:{
    // //     app:hotsongcontent
    // //   }
    // // }
  ]
})

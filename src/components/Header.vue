<template>
  <div class="headerContainer">
    <div class='logo'>
        <div class="font"><a href="#"></a></div>
        <form action="">
             <input type="text" placeholder="唱片名·表演者·条码·ISRC" 
             @keyup="searchMusic" v-model="inputValue" @blur="hiddenSearchList">
        </form>
        <div class="search">
        </div>
    </div>
    <hr>
    <div class="nav">
        <div>音乐人</div>
        <div>潮潮豆瓣音乐周</div>
        <div>金羊毛计划</div>
        <div>专题</div>
        <div>排行榜</div>
        <div>分类浏览</div>
        <div>乐评</div>
        <div>豆瓣FM</div>
        <div>歌单</div>
        <div>阿比路音乐奖</div>
    </div>
    <div class="searchList">
      <div v-for="music in this.$store.state.search.musics"
         :key='music.id'>
         <img :src="music.image" alt="">
         <span>{{music.title}}{{getMedia(music.attrs.media)}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import '../assets/Header.css';  //这个需要加上扩展符，要不然不能识别
export default {
  name:'Header',
  data(){
    return {
      inputValue:'',
    }
  },
  methods:{
    searchMusic:function(){
      var that = this;
      this.delay(function(){
        var params = 'q='+that.inputValue+'&'+'count=7';
        that.$store.dispatch('search/getMusic',params);
      },500);
    },
    hiddenSearchList:function(){
      this.$store.state.search.musics = [];
    },
    delay:function(){  //这个函数是用作延时处理，作用是输入结束后俩秒触发事件
      var timer = 0;
      return function(callback, ms){
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
      }
    }(),
    // getImage:function(url){
    // console.log(url);
    // // 把现在的图片连接传进来，返回一个不受限制的路径
    // if(url !== undefined){
    //     return url[0].replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p');
    // }
    // }
    getMedia:function(media){
      if(media === undefined){
        return '';
      }
      return '(' + media[0] + ')';
    }
  }
}
</script>




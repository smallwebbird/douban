import axios from 'axios';
const state = {
    musics:[]
}

const actions = {
    getMusic:function({commit, state},params){
        state.musics = [];
        axios.get('/api/v2/music/search?'+params) //获取搜索音乐，每次返回7条音乐为默认
             .then(function(response){
                  var result = JSON.parse(JSON.stringify(response));
                  result = result['data']['musics'];
                  commit('addMusic',result);
             })
             .catch(function(err){
                 console.log(err);
             })
    }
}

const mutations = {
    addMusic:function(state,musics){  //把返回的7条音乐放到state的musics数组中
        musics.forEach(function(value,index){
            state.musics.push(value);
        })
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}
import axios from 'axios';
const state = {
    musician:[]
}

const actions = {
    getMusician: function({commit}){
        axios.get('/node/personalized/newsong')
        .then(function(response){
                console.log(response);
                commit('addMusician', response.result.slice(0,4));
            })
        .catch(function(err){
                console.log(err)
            })
    }
}

const mutations = {
    addMusician: function(state, result){
        state.push(result);
    }
}

export default{
    namespaced:true,
    state,
    actions,
    mutations
}
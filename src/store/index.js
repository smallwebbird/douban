import Vue from 'vue';
import Vuex from 'vuex';
import search from './modules/search';
import music from './modules/music';

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        search:search,
        // music:music
    }
});
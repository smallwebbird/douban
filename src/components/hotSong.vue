<template>
    <div class="hotSong">
        <div class="hotSong_head">
                <span class="hotSong_song">近期热门歌曲</span>
                <span class="hotOther">
                    <router-link id="zuire1" to="hotzuire">最热 </router-link>|
                    <router-link id="liuxing" to="hotliuxing">流行</router-link> |
                    <router-link id="yaogun" to="hotyaogun">摇滚</router-link> |
                    <router-link id="minyao" to="hotmiyao">民谣</router-link> |
                    <router-link id="yuansheng" to="hotyuansheng">原声</router-link>
                </span>
                <span class="hotMore">更多</span>
        </div>
        <hotsongcontent></hotsongcontent>
    </div>
</template>

<script>
import '../assets/hotSong.css';
import hotsongcontent from './hotSong_Content.vue';
export default {
    name:'hotsong',
    components:{hotsongcontent},
}
</script>

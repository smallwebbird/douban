<template>
    <div class="newCd">
        <div class="newCd_header">
            <span class="xinge">新碟榜</span>
            <span class="other">
                <router-link id="zuire" to="zuire" exact>最热 </router-link>|
                <router-link id="huayu" to="huayu">华语</router-link> |
                <router-link id="oumei" to="oumei">欧美</router-link> |
                <router-link id="rihan" to="rihan">日韩</router-link> |
                <router-link id="danqu" to="danqu">单曲</router-link>
            </span>
             <span class="more">更多</span>
        </div>
        <newcdcontent></newcdcontent>
    </div>    
</template>
<script>
import '../assets/newCd.css';
import newcdcontent from './newCd_Content.vue';
export default {
    name:'newCd',
    components:{newcdcontent}
}
</script>

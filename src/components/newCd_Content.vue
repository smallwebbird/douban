<template>
    <div class="newCd_content">
            <div v-for="newCd in cds" :key="newCd.id" class="newCd_all">
                <div  class="newCd_pic" :style="{
                    background:'url(' + newCd.pic + ')',
                    backgroundSize: 'cover'
                }"></div>
                <div class="newCd_name">{{newCd.name}}</div>
                <div class="newCd_artist">{{newCd.artist}}</div>
                <span class="newCd_grade">
                    <span class="star" :stars='newCd.grade' :style="{
                        display: 'inline-block', 
                        width: '55px',
                        height: '10px',
                        background:'url('+imgUrl+')',
                    }"></span>
                    <span class="grade">{{newCd.grade}}</span>
                </span>
                
            </div>
    </div>
</template>

<script>
import '../assets/newCd_Content.css';
//import '../assets/newCd_Content.js';
export default {
    name:'newCd_Content',
    data(){
        return {
            imgUrl:'../assets/img.jpg',
            cds:[
                {
                    name:'悟',
                    artist:'吴亦凡',
                    type:'民谣 Fork',
                    pic:'http://p1.music.126.net/ZAomLzPn_cjnzK7jluqwUg==/109951163599014315.jpg',
                    id:1,
                    grade:4
                },
                {
                    name:'耳朵',
                    artist:'李荣浩',
                    type:'民谣 Fork',
                    pic:'http://p2.music.126.net/tt8xwK-ASC2iqXNUXYKoDQ==/109951163606377163.jpg',
                    id:2,
                    grade:5

                },
                {
                    name:'まっしろ',
                    artist:'ビッケブランカ',
                    type:'轻音乐 Easy Listening',
                    pic:'http://p2.music.126.net/vcLbSsR2uV1lZwWaSwOBSg==/109951163605052289.jpg',
                    id:3,
                    grade:6

                },
                {
                    name:'Blur',
                    artist:'MØ',
                    type:'摇滚 Rock',
                    pic:'http://p2.music.126.net/y3sc9cmMP2mwz_Hy48x_Tg==/109951163606414587.jpg',
                    id:4,
                    grade:7
                },
                {
                    name:'#one_love_pop',
                    artist:'宇野実彩子',
                    type:'说唱 Rap',
                    pic:'http://p2.music.126.net/dSnNVI-OFM_TAFg3xsVbbA==/109951163605000877.jpg',
                    id:5,
                    grade:8,

                },
                {
                    name:'FAKE LOVE (Japanese Version)',
                    artist:'BTS (防弹少年团)',
                    type:'流行 Pop',
                    pic:'http://p2.music.126.net/jjSU7RRScacCIqwlFUhb1A==/109951163606398743.jpg',
                    id:6,
                    grade:4

                },
                {
                    name:'Free My Mind',
                    artist:'李文世',
                    type:'民谣 Fork',
                    pic:'http://p2.music.126.net/qlJNHsF57ibC1Y7WdWblYw==/109951163606633561.jpg',
                    id:7,
                    grade:7
                },
                {
                    name:'록시땅',
                    artist:'HAN YO HAN',
                    type:'世界音乐 World',
                    pic:'http://p2.music.126.net/BnMkmZjsw6SQoSozuSoSdg==/109951163606632417.jpg',
                    id:8,
                    grade:10
                },
            ],
        }
    },
}
</script>

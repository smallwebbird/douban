<template>
    <div class="wrap">
        <div class="wrap_content">
            <div class="wheel" id="wheel" >
                <div class="wheel_img" id="wheel_img">
                    <img 
                    v-for="index in wheelImages"
                    :key='index.key'
                    :src="index.url" alt="ok">            
                </div>
                <div class="wheel_num" id="wheel_num">
                    <span v-for="index in wheelIndex"
                    :key='index'>{{index}}</span>
                </div>
                <div class="wheel_next" id="wheel_next">
                    
                </div>
            </div>
            <div class="weekPopularMusic">
                <div class="weekPopularMusic_header">
                    <span>本周流行音乐人</span>
                     |
                    <span>上升最快音乐人</span>
                </div>
                <div class="weekPopularMusic_content">
                    <div v-for="index in musicians" :key="index.id" class="index_all">
                        <div  class="index_pic" :style="{
                            background:'url(' + index.pic + ')',
                            backgroundSize: 'cover'
                        }">
                            <div class="index_bg">
                                <div class="index_font">
                                   <p>这是一个示例部分,真的</p>
                                   <p>这是一首好听的歌，真的</p>
                                   <p>Hello World</p>
                                </div>
                                <div class="index_icon">
                                    <div class="index_trianglify"></div>
                                </div>
                            </div>
                        </div>
                        <div class="index_name">{{index.name}}</div>
                        <div class="index_type">{{index.type}}</div>
                    </div>
                </div>
            </div>
            <div class="editRecommendation">
                <div class="editRecommendation_header">
                    编辑推荐
                </div>
                <div class="editRecommendation_show"  id="edit_all">
                    <div v-for="edit in commends" :key="edit.id" class="edit_all">
                        <div  class="edit_pic" :style="{
                            background:'url(' + edit.pic + ')',
                            backgroundSize: 'cover'
                        }">
                            <div class="edit_bg">
                                <div class="edit_font">
                                   <p>这是一个示例部分,真的</p>
                                   <p>这是一首好听的歌，真的</p>
                                   <p>Hello World</p>
                                </div>
                                <div class="edit_icon">
                                    <div class="edit_trianglify"></div>
                                </div>
                            </div>
                        </div>
                        <div class="edit_type">【{{edit.type}}】</div>
                        <div class="edit_name">{{edit.name}}</div>
                        <div class="edit_text">{{edit.text}}</div>
                    </div>
                </div>
                <div class="edit_arrow_left" id="edit_arrow_left"></div>
                <div class="edit_arrow_right" id="edit_arrow_right"></div>
            </div>
            <newcd></newcd>
            <hotsong></hotsong>
        </div>
        <div class="wrap_sider">
            <join></join>
            <hotsort></hotsort>
            <singmusicsort></singmusicsort>
            <doubanmusic></doubanmusic>
            <radio></radio>
            <programpic></programpic>
            <contactus></contactus>
        </div>
    </div>
</template>
<script>
import '../assets/Content.css';
import '../assets/cont.js';
import newcd from './newCd';
import hotsong from './hotSong';
import join from './join';
import hotsort from './hotSort';
import singmusicsort from './singleMusicSort.vue';
import doubanmusic from './doubanMusic.vue';
import radio from './radio.vue';
import programpic from './programPic.vue';
import contactus from './contactUs.vue';
export default {
    name:'content',
    components:{newcd, hotsong, join, hotsort, singmusicsort, doubanmusic, radio, programpic, contactus},
    data(){
        return {
            wheelImages:[
                {
                    url:'https://img1.doubanio.com/view/music_index_banner/raw/public/banner-2787.jpg',
                    key:1
                },
                {
                    url:'https://img1.doubanio.com/view/music_index_banner/raw/public/banner-2789.jpg',
                    key:2
                },
                {
                    url:'https://img1.doubanio.com/view/music_index_banner/raw/public/banner-2777.jpg',
                    key:3
                },
                {
                    url:'https://img1.doubanio.com/view/music_index_banner/raw/public/banner-2788.jpg',
                    key:4
                },
                {
                    url:'https://img3.doubanio.com/view/music_index_banner/raw/public/banner-2780.jpg',
                    key:5
                },
                {
                    url:'https://img1.doubanio.com/view/music_index_banner/raw/public/banner-2768.jpg',
                    key:6
                },
                {
                    url:'https://img1.doubanio.com/view/music_index_banner/raw/public/banner-2787.jpg',
                    key:7
                }
            ],
            wheelIndex:[1,2,3,4,5,6],
            musicians:[
                {
                    name:'悟',
                    artist:'吴亦凡',
                    type:'民谣 Fork',
                    pic:'http://p1.music.126.net/ZAomLzPn_cjnzK7jluqwUg==/109951163599014315.jpg',
                    id:1

                },
                {
                    name:'耳朵',
                    artist:'李荣浩',
                    type:'民谣 Fork',
                    pic:'http://p2.music.126.net/tt8xwK-ASC2iqXNUXYKoDQ==/109951163606377163.jpg',
                    id:2

                },
                {
                    name:'まっしろ',
                    artist:'ビッケブランカ',
                    type:'轻音乐 Easy Listening',
                    pic:'http://p2.music.126.net/vcLbSsR2uV1lZwWaSwOBSg==/109951163605052289.jpg',
                    id:3

                },
                {
                    name:'Blur',
                    artist:'MØ',
                    type:'摇滚 Rock',
                    pic:'http://p2.music.126.net/y3sc9cmMP2mwz_Hy48x_Tg==/109951163606414587.jpg',
                    id:4
                },
                {
                    name:'#one_love_pop',
                    artist:'宇野実彩子',
                    type:'说唱 Rap',
                    pic:'http://p2.music.126.net/dSnNVI-OFM_TAFg3xsVbbA==/109951163605000877.jpg',
                    id:5

                },
                {
                    name:'FAKE LOVE (Japanese Version)',
                    artist:'BTS (防弹少年团)',
                    type:'流行 Pop',
                    pic:'http://p2.music.126.net/jjSU7RRScacCIqwlFUhb1A==/109951163606398743.jpg',
                    id:6

                },
                {
                    name:'Free My Mind',
                    artist:'李文世',
                    type:'民谣 Fork',
                    pic:'http://p2.music.126.net/qlJNHsF57ibC1Y7WdWblYw==/109951163606633561.jpg',
                    id:7
                },
                {
                    name:'록시땅',
                    artist:'HAN YO HAN',
                    type:'世界音乐 World',
                    pic:'http://p2.music.126.net/BnMkmZjsw6SQoSozuSoSdg==/109951163606632417.jpg',
                    id:8

                },
            ],
            commends:[
                {
                    name:'悟',
                    artist:'吴亦凡',
                    type:'民谣 Fork',
                    pic:'http://p1.music.126.net/ZAomLzPn_cjnzK7jluqwUg==/109951163599014315.jpg',
                    id:1,
                    text:'这是第一张图片的介绍部分，这首歌很棒'
                },
                {
                    name:'耳朵',
                    artist:'李荣浩',
                    type:'民谣 Fork',
                    pic:'http://p2.music.126.net/tt8xwK-ASC2iqXNUXYKoDQ==/109951163606377163.jpg',
                    id:2,
                    text:'这是第一张图片的介绍部分，这首歌很棒'

                },
                {
                    name:'まっしろ',
                    artist:'ビッケブランカ',
                    type:'轻音乐 Easy Listening',
                    pic:'http://p2.music.126.net/vcLbSsR2uV1lZwWaSwOBSg==/109951163605052289.jpg',
                    id:3,
                    text:'这是第一张图片的介绍部分，这首歌很棒'

                },
                {
                    name:'Blur',
                    artist:'MØ',
                    type:'摇滚 Rock',
                    pic:'http://p2.music.126.net/y3sc9cmMP2mwz_Hy48x_Tg==/109951163606414587.jpg',
                    id:4,
                    text:'这是第一张图片的介绍部分，这首歌很棒'
                },
                {
                    name:'#one_love_pop',
                    artist:'宇野実彩子',
                    type:'说唱 Rap',
                    pic:'http://p2.music.126.net/dSnNVI-OFM_TAFg3xsVbbA==/109951163605000877.jpg',
                    id:5,
                    text:'这是第一张图片的介绍部分，这首歌很棒'

                },
                {
                    name:'FAKE LOVE (Japanese Version)',
                    artist:'BTS (防弹少年团)',
                    type:'流行 Pop',
                    pic:'http://p2.music.126.net/jjSU7RRScacCIqwlFUhb1A==/109951163606398743.jpg',
                    id:6,
                    text:'这是第一张图片的介绍部分，这首歌很棒'

                },
            ]
        }
    },
    // mounted:function(){
    //     this.$store.dispatch('music/getMusician');
    // }
}
</script>


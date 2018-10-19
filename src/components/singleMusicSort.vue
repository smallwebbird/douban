<template>
    <div class="singMusicSort">
        <div class="singMusicSort_head">
            <span class="singMusicSort_font">本周歌曲榜</span>
            <span class="singMusicSort_btn">
                <span class="singMusicSort_icon">
                    <span class="singMusicSort_sanjiao"></span>
                </span>
                <span class="singMusicSort_text">播放全部</span>
            </span>
        </div>
        <div class="singMusicSort_content">
            <div class="singMusicSort_content_head">
                <router-link id="sorthot" to="sorthot">最热 </router-link>|
                <router-link id="sortrock" to="hotrock">摇滚</router-link> |
                <router-link id="sortmin" to="sortmin">民谣</router-link> |
                <router-link id="sortpop" to="sortpop">流行</router-link> |
                <router-link id="sortele" to="sortele">电子</router-link> |
                <router-link id="sortrap" to="sortrap">说唱</router-link>
            </div>
            <div class="singMusicSort_content_content">
                <div v-for="music in singMusics"
                     :key='music.id' class="singMusicSort_content_index">
                     <div class="singMusicSort_pic" :style="{
                            background:'url(' + music.pic + ')',
                            backgroundSize: 'cover',
                            borderRadius:'100%'
                        }">
                        <div class="singMusicSort_bg">
                            <span class="singMusicSort_index_sanjiao"></span>
                        </div>
                        </div>
                      <div class="singMusicSort_dec">
                          <p>{{music.name}}</p>
                          <p>{{music.artist}}/{{music.times}}次播放</p>
                      </div>
                      <div class="singMusicSort_num">
                          {{music.id}}
                      </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'singmusicsort',
    data(){
        return {
           singMusics:[
                {
                    name:'悟',
                    artist:'吴亦凡',
                    times:1000,
                    pic:'http://p1.music.126.net/ZAomLzPn_cjnzK7jluqwUg==/109951163599014315.jpg',
                    id:1

                },
                {
                    name:'耳朵',
                    artist:'李荣浩',
                    times:1000,
                    pic:'http://p2.music.126.net/tt8xwK-ASC2iqXNUXYKoDQ==/109951163606377163.jpg',
                    id:2

                },
                {
                    name:'まっしろ',
                    artist:'ビッケブランカ',
                   times:1000,
                    pic:'http://p2.music.126.net/vcLbSsR2uV1lZwWaSwOBSg==/109951163605052289.jpg',
                    id:3

                },
                {
                    name:'Blur',
                    artist:'MØ',
                    times:1000,
                    pic:'http://p2.music.126.net/y3sc9cmMP2mwz_Hy48x_Tg==/109951163606414587.jpg',
                    id:4
                },
                {
                    name:'#one_love_pop',
                    artist:'宇野実彩子',
                    times:1000,
                    pic:'http://p2.music.126.net/dSnNVI-OFM_TAFg3xsVbbA==/109951163605000877.jpg',
                    id:5

                },
                {
                    name:'FAKE LOVE (Japanese Version)',
                    artist:'BTS (防弹少年团)',
                    times:1000,
                    pic:'http://p2.music.126.net/jjSU7RRScacCIqwlFUhb1A==/109951163606398743.jpg',
                    id:6

                },
                {
                    name:'Free My Mind',
                    artist:'李文世',
                    times:1000,
                    pic:'http://p2.music.126.net/qlJNHsF57ibC1Y7WdWblYw==/109951163606633561.jpg',
                    id:7
                },
                {
                    name:'록시땅',
                    artist:'HAN YO HAN',
                    times:1000,
                    pic:'http://p2.music.126.net/BnMkmZjsw6SQoSozuSoSdg==/109951163606632417.jpg',
                    id:8

                },
                {
                    name:'Free My Mind',
                    artist:'李文世',
                    times:1000,
                    pic:'http://p2.music.126.net/qlJNHsF57ibC1Y7WdWblYw==/109951163606633561.jpg',
                    id:9
                },
                {
                    name:'록시땅',
                    artist:'HAN YO HAN',
                    times:1000,
                    pic:'http://p2.music.126.net/BnMkmZjsw6SQoSozuSoSdg==/109951163606632417.jpg',
                    id:10

                },
            ]           
        }
    }
}
</script>
<style>
.singMusicSort{
    width: 300px;
    height: 680px;
    margin-top: 10px;
}
.singMusicSort_head{
    width: 300px;
    height: 31px;
    padding-top: 5px;
    border-bottom: 1px solid #E4E2E2;
}
.singMusicSort_font{
    display: inline-block;
    width: 75px;
    height: 17px;
    font-size: 15px;
}
.singMusicSort_btn{
    display: inline-block;
    width: 90px;
    height: 25px;
    background: #139D72;
    padding: 0;
    margin-left: 120px;
    cursor: pointer;
}
.singMusicSort_icon{
    width: 20px;
    height: 20px;
    margin-top: 5px;
}
.singMusicSort_sanjiao{
    display: inline-block;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width:5px 0 5px 8px;
    border-color: transparent transparent transparent #ffffff;

    margin-left: 5px;
}
.singMusicSort_text{
    display: inline-block;
    width: 60px;
    height: 16px;
    font-size: 13px;
    color:#fff;
}
.singMusicSort_btn:hover{
    opacity: 0.8;
}
.singMusicSort_content_head{
    width:220px;
    height: 21px;
    font-size: 13px;
}
#sortrap{
    color:#666;
}
#sortrap:hover{
    color:#138A64;
}
#sortpop{
    color:#666;
}
#sortpop:hover{
    color:#138A64;
}
#sortrock{
    color:#666;
}
#sortrock:hover{
    color:#138A64;
}
#sortmin{
    color:#666;
}
#sortmin:hover{
    color:#138A64;
}
#sortele{
    color:#666;
}
#sortele:hover{
    color:#138A64;
}
#sorthot{
    color:#666;
}
#sorthot:hover{
    color: #138A64;
}
.singMusicSort_content_head .active{
    color: #138A64 !important;
    font-weight: bolder;
}
.singMusicSort_content_content{
    width: 300px;
    height: 620px;
}
.singMusicSort_content_index{
    width: 300px;
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
}
.singMusicSort_content_index:hover{
    background: rgb(233, 248, 243);
}
.singMusicSort_content_index:hover .singMusicSort_bg{
    background: black;
    opacity: 0.6;
}
.singMusicSort_pic{
    width: 48px;
    height: 48px;
    position: relative;
}
.singMusicSort_bg{
    width: 48px;
    height: 48px;
    position: absolute;
    border-radius: 100%;
    left: 0;
    top:0;
}
.singMusicSort_dec{
    margin-left: 10px;
}
.singMusicSort_dec p:nth-child(1){
    font-size: 15px;
    color: #138A64;
}
.singMusicSort_dec p:nth-child(2){
    margin-top: -15px;
    font-size: 13px;
    color: #666;
}
.singMusicSort_num{
    position: absolute;
    font-size: 35px;
    color: #E6E6E6;
    right: 10px;
}
.singMusicSort_index_sanjiao{
    display: inline-block;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width:5px 0 5px 8px;
    border-color: transparent transparent transparent #ffffff;
    position: absolute;
    top: 20px;
    left: 20px;
    display: none;
}
.singMusicSort_content_index:hover .singMusicSort_index_sanjiao{
    display: block;
}
</style>


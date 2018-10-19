<template>
    <div class="doubanMusic">
        <div class="doubanMusic_head">
            <span>豆瓣音乐</span>
            <span>更多</span>
        </div>
        <div class="doubanMusic_content">
            <div v-for="index in doubanMusics" :key="index.id" class="doubanMusic_item">
                <div class="doubanMusic_pic" :style="{
                            background:'url(' + index.pic + ')',
                            backgroundSize: 'cover',
                        }"></div>
                <div class="doubanMusic_text">{{index.name}}
                    </div>        
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'doubanMusic',
    data(){
        return {
        doubanMusics:[
             {
                    name:'悟',
                    pic:'http://p1.music.126.net/ZAomLzPn_cjnzK7jluqwUg==/109951163599014315.jpg',
                    id:1

                },
                {
                    name:'耳朵',
                    pic:'http://p2.music.126.net/tt8xwK-ASC2iqXNUXYKoDQ==/109951163606377163.jpg',
                    id:2

                },
                {
                    name:'まっしろ',
                    pic:'http://p2.music.126.net/vcLbSsR2uV1lZwWaSwOBSg==/109951163605052289.jpg',
                    id:3

                },
                {
                    name:'Blur',
                    pic:'http://p2.music.126.net/y3sc9cmMP2mwz_Hy48x_Tg==/109951163606414587.jpg',
                    id:4
                },
                {
                    name:'#one_love_pop',
                    pic:'http://p2.music.126.net/dSnNVI-OFM_TAFg3xsVbbA==/109951163605000877.jpg',
                    id:5

                },
                {
                    name:'FAKE LOVE (Japanese Version)',
                    pic:'http://p2.music.126.net/jjSU7RRScacCIqwlFUhb1A==/109951163606398743.jpg',
                    id:6

                },
                {
                    name:'Free My Mind',
                    pic:'http://p2.music.126.net/qlJNHsF57ibC1Y7WdWblYw==/109951163606633561.jpg',
                    id:7
                },
                {
                    name:'록시땅',
                    pic:'http://p2.music.126.net/BnMkmZjsw6SQoSozuSoSdg==/109951163606632417.jpg',
                    id:8

                },
                {
                    name:'Free My Mind',
                    pic:'http://p2.music.126.net/qlJNHsF57ibC1Y7WdWblYw==/109951163606633561.jpg',
                    id:9
                },
        ]
    }
    }
}
</script>
<style>
.doubanMusic{
    width: 300px;
    height: 420px;
    margin-top: 10px;
}
.doubanMusic_head{
    width: 300px;
    height: 26px;
    border-bottom: 1px solid #E4E2E2;
}
.doubanMusic_head span:nth-child(1){
    display: inline-block;
    font-size: 15px;
}
.doubanMusic_head span:nth-child(2){
    display: inline-block;
    font-size: 13px;
    color:#666666;
    margin-left: 200px;
    cursor: pointer;
}
.doubanMusic_head span:nth-child(2):hover{
    background: #666666;
    color: white;
}
.doubanMusic_content{
    width: 330px;
    height: 380px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.doubanMusic_item{
    width: 90px;
    height: 105px;
    margin-right: 10px;
}
.doubanMusic_pic{
    width: 90px;
    height: 80px;
}
.doubanMusic_text{
    text-align: center;
    font-size: 13px;
    color: #138A64;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
}
.doubanMusic_text:hover{
    background: #138A64;
    color: white;
}
</style>



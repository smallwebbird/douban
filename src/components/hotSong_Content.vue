<template>
   <div class="hotSong_content">
    <div class="hotSong_all"
         v-for="song in hotSongs"
         :key="song.id">
        <div class="hotSong_one">
            <div class="hotSong_pic" :style="{
                            background:'url(' + song.pic + ')',
                            backgroundSize: 'cover',
                        }">
                        <div class="hotSong_bg">
                            <div class="hotSong_sanjiao"></div>
                        </div>
                    </div>
                <span class="hotSong_text">
                <span class="hotSong_name">{{song.name}}({{song.num1}})</span>
                <span class="hotSong_artist">{{song.artist}}</span>
                <span class="hotSong_col">制作|{{song.num2}}收藏</span>               
                </span>    
                
        </div>
         <div class="hotSong_two">
             <div class="hotSong_other">
                 <p>{{song.str1}}</p>
                 <p>{{song.str2}}</p>
                 <p>{{song.str3}}</p>
                 <p>{{song.str4}}</p>
             </div>
         </div>
         </div>
   </div>
</template>
<script>
export default {
    name:'hotsongontent',
     data(){
        return{
            hotSongs:[
                {
                    name:'悟',
                    artist:'吴亦凡',
                    num1:30,
                    num2:63,
                    str1:'1 one ',
                    str2:'2 two ',
                    str3:'3 three',
                    str4:' 4 four',
                    pic:'http://p1.music.126.net/ZAomLzPn_cjnzK7jluqwUg==/109951163599014315.jpg',
                    id:1

                },
                {
                    name:'耳朵',
                    artist:'李荣浩',
                    num1:30,
                    num2:63,
                    str1:'1 one ',
                    str2:'2 two ',
                    str3:'3 three',
                    str4:' 4 four',
                    pic:'http://p2.music.126.net/tt8xwK-ASC2iqXNUXYKoDQ==/109951163606377163.jpg',
                    id:2

                },
                {
                    name:'まっしろ',
                    artist:'ビッケブランカ',
                    num1:30,
                    num2:63,
                    str1:'1 one ',
                    str2:'2 two ',
                    str3:'3 three',
                    str4:' 4 four',
                    pic:'http://p2.music.126.net/vcLbSsR2uV1lZwWaSwOBSg==/109951163605052289.jpg',
                    id:3

                },
                {
                    name:'Blur',
                    artist:'MØ',
                    num1:30,
                    num2:63,
                    str1:'1 one ',
                    str2:'2 two ',
                    str3:'3 three',
                    str4:' 4 four',
                    pic:'http://p2.music.126.net/y3sc9cmMP2mwz_Hy48x_Tg==/109951163606414587.jpg',
                    id:4
                },
                {
                    name:'#one_love_pop',
                    artist:'宇野実彩子',
                    num1:30,
                    num2:63,
                    str1:'1 one ',
                    str2:'2 two ',
                    str3:'3 three',
                    str4:' 4 four',
                    pic:'http://p2.music.126.net/dSnNVI-OFM_TAFg3xsVbbA==/109951163605000877.jpg',
                    id:5

                },
                {
                    name:'FAKE LOVE (Japanese Version)',
                    artist:'BTS (防弹少年团)',
                    num1:30,
                    num2:63,
                    str1:'1 one ',
                    str2:'2 two ',
                    str3:'3 three',
                    str4:' 4 four',
                    pic:'http://p2.music.126.net/jjSU7RRScacCIqwlFUhb1A==/109951163606398743.jpg',
                    id:6

                },
            ]
        }
    }
}
</script>
<style>
.hotSong_content{
    width: 675px;
    height: 558px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
}
.hotSong_all{
    width: 320px;
    height: 181px;
    background: #FFFFFF;
    border: 1px solid #EEEEEE;
    margin-left: 10px;
    cursor: pointer;
}
.hotSong_pic{
    margin-top: 15px;
    margin-left: 15px;
    width: 40px;
    height: 40px;
    display: inline-block;
    position: relative;
}
.hotSong_text{
    display: inline-block;
}
.hotSong_name{
    display: block;
    color: #138A64;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 184px;
    font-size: 15px;
}
.hotSong_artist{
    font-size: 13px;
    color: #666;
    cursor: pointer;
}
.hotSong_artist:hover{
    background: #666;
    color: white;
}
.hotSong_col{
    font-size: 13px;
    color: #666;
}
.hotSong_other{
    margin-left: 60px;
    padding-top: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 200px;
    white-space: nowrap;

}
.hotSong_other p{
    margin-top: -15px;
}
.hotSong_bg{
    position: absolute;
    width: 100%;
    height: 100%;
    top:0px;
    left: 0px;
}
.hotSong_sanjiao{
    display: inline-block;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width:5px 0 5px 8px;
    border-color: transparent transparent transparent #ffffff;
    margin-left: 15px;
    margin-top: 15px;
    display: none;
}
.hotSong_all:hover .hotSong_sanjiao{
    display: block;
}
.hotSong_all:hover .hotSong_bg{
    background: black;
    opacity: 0.8;
}
</style>


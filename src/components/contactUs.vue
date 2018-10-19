<template>
    <div class="contactUs">
        <div class="contactUs_head">
            <span class="contactUs_us">联系我们</span>
            <span class="contactUs_email">artists@douban.com</span>
        </div>
        <div class="contactUs_all one">
            <div class="contactUs_pic"></div>
            <p class="contactUs_text">音乐人小站</p>            
        </div>
        <div class="contactUs_all two">
            <div class="contactUs_pic"></div>
            <p class="contactUs_text">音乐人微博</p>            
        </div>
        <div class="contactUs_all three">
            <div class="contactUs_pic" id="one"></div>
            <p class="contactUs_text">音乐人微信</p>            
        </div>
        <div class="contactUs_all four">
            <div class="contactUs_pic"></div>
            <p class="contactUs_text">FM小站</p>            
        </div>
        <div class="contactUs_all five">
            <div class="contactUs_pic"></div>
            <p class="contactUs_text">FM微博</p>            
        </div>
        <div class="contactUs_all six">
            <div class="contactUs_pic" id="two"></div>
            <p class="contactUs_text">FM微信</p>            
        </div>
        <div class="contactUs_erweima1" id="weima1"></div>
        <div class="contactUs_erweima2" id="weima2"></div>
    </div>
</template>
<script>
// import '../assets/contactUs.js';
export default {
    name:'contactus',  
}
</script>
<style>
.contactUs{
    margin-top: 10px;
    width: 300px;
    height: 181px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    position: relative;
}
.contactUs_all{
    width: 75px;
    height: 71px;
    margin-left: 10px;
    padding-top: 10px;
    text-align: center;
}
.contactUs_pic{
    width: 40px;
    height: 40px;
    border-radius: 3px;
    margin: 0 auto;
    cursor: pointer;
}
.contactUs_text{
    margin-top: -2px;
    display: inline-block;
    font-size: 13px;
    color: #138A64;
    cursor: pointer;
}
.one .contactUs_pic{
    background: url(../assets/home_artist.png)
}
.two .contactUs_pic{
    background: url(../assets/home_weibo.png)
}
.three .contactUs_pic{
    background: url(../assets/home_weixin.png)
}

.four .contactUs_pic{
    background: url(../assets/home_fm.jpg)
}
.five .contactUs_pic{
    background: url(../assets/home_weibo.png)
}
.six .contactUs_pic{
    background: url(../assets/home_weixin.png)
}
/* .contactUs_pic:hover .contactUs_bg{
    
} */
.contactUs_text:hover{
    background: #138A64;
    color: white;
}
.contactUs_us{
    margin-left: 5px;
}
.contactUs_email{
    margin-left: 20px;
    font-size: 13px;
    color: #666;
}
.contactUs_erweima1{
    width: 120px;
    height: 120px;
    background: url(../assets/weixin.jpg);
    background-size: cover;
    position: absolute;
    top: 170px;
    left: 200px;
    display: none;
}
.contactUs_erweima2{
    width: 120px;
    height: 120px;
    background: url(../assets/home_qrcode.png);
    background-size: cover;
    position: absolute;
    left: 190px;
    top:110px;
    display: none;
}
</style>


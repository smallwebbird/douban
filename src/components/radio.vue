<template>
    <div class="radio">
        <span class="radio_img"></span>
        <span class="radio_text">
            <p>豆瓣FM客户端</p>
            <p>让音乐继续</p>
        </span>
    </div>
</template>

<script>
export default {
    name:'radio'
}
</script>
<style>
.radio{
    width: 300px;
    height: 70px;
    background: rgba(234, 240, 243, 0.822);
    border-radius: 4px;
    position: relative;
    cursor: pointer;
}
.radio_img{
    position: absolute;
    display: inline-block;
    width: 50px;
    height: 50px;
    background: url(../assets/radio.jpg);
    top:10px;
    left: 10px;
}
.radio_text{
    display: inline-block;
    width: 200px;
    height: 45px;
    margin-left: 70px;
}
.radio_text p:nth-child(1){
    margin-top: 10px;
    font-size: 16px;
    color: #204692;
    font-weight: bold;
}
.radio_text p:nth-child(2){
    margin-top:-15px;
    font-size: 15px;
    color: #4E4E4E;
}
</style>


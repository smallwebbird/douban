<template>
    <div class="join">
        <div class="join_artist">
            <div>
                <p>45022</p>
                <p>音乐人</p>
            </div>
            <div>
                <p>2666</p>
                <p>播客</p>
            </div>
            <div>
                <p>1133</p>
                <p>厂牌</p>
            </div>
        </div>
        <button class="join_join">我要加入</button>
    </div>
</template>

<script>
export default {
    name:'join'
}
</script>
<style>
 .join{
     width: 300px;
     height: 100px;
 }
 .join .join_artist{
     width: 300px;
     height: 57px;
     display: flex;
 }
 .join_artist div{
     width: 100px;
     text-align: center;
     background: #F5F7F8;
     margin-right: 2px;
 }
  .join_artist div p{
      margin:0;
  }
  .join_artist div p:nth-child(1){
      font-size: 15px Arial, Helvetica, sans-serif;
      margin-top:5px;
      color: #072;
      font-weight: bold;
      cursor: pointer;
      display: inline-block;
  }
  .join_artist div p:nth-child(1):hover{
      background: #072;
      color:white;
  }
  .join_artist div p:nth-child(2){
      font-size: 15px;
      margin-top:5px;
      color:#666;
  }
  .join_join{
      width: 300px;
      height: 40px;
      font-size: 17px;
      background: #139D72;
      border: 1px solid #138A64;
      color: #FFF;
      border-radius: 3px;
      cursor: pointer;
    }
    .join_join:hover{
        opacity: 0.8;
    }
</style>


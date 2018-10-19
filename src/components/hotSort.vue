<template>
    <div class="hotSort">
        <div class="hotSort_head">
            <span class="hotSort_sort">热门音乐人分类</span>
            <span class="hotSort_more">更多</span>
        </div>
        <div class="hotSort_content">
            <table>
                <tbody>
                    <tr>
                        <td>流行</td>
                        <td>轻音乐</td>
                    </tr>
                    <tr>
                        <td>
                            摇滚
                        </td>
                        <td>古典</td>
                    </tr>
                    <tr>
                        <td>电子</td>
                        <td>世界音乐</td>
                    </tr>
                    <tr>
                        <td>民谣</td>
                        <td>说唱</td>
                    </tr>
                    <tr>
                        <td>爵士</td>
                        <td>原声</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>  
</template>

<script>
export default {
    name:'hotsort'
}
</script>
<style>
 .hotSort{
     margin-top: 30px;
     width: 300px;
     height: 250px;

}
.hotSort_head{
    width: 300px;
    height: 24px;
}
.hotSort_head span{
    display: inline-block;
}
.hotSort_sort{
    font-size: 15px;
    color: #222;
}
.hotSort_more{
    font-size: 13px;
    color:#999;
    margin-left: 160px;
    cursor: pointer;
}
.hotSort_more:hover{
    background: #666699;
    color: white;
}
.hotSort_content{
    width: 300px;
    height: 210px;

}
.hotSort_content table{
    border-collapse: collapse;
    padding: 0;
    margin: 0;
    border: none;
    margin-left: 10px;
}
.hotSort_content tbody{
    display: table-row-group;
    vertical-align: middle;
}
.hotSort_content tbody td{
    display: table-cell;
    width: 150px;
    height: 39px;
    border-top: 1px solid #F8F6F6;
    border-bottom: 1px solid #F8F6F6;
    border-right: 1px solid #F8F6F6;
    font-size: 15px;
    color: #138A64;
    cursor: pointer; 
}
.hotSort_content tbody td:hover{
    background: rgb(233, 248, 243);
    
}
</style>


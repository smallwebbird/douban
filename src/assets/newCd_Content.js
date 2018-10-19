window.onload = function(){
    var spanList = document.getElementsByClassName('star'),
        len = spanList.length,
        i;
    for(var i = 0; i < len; i++){
        console.log(spanList[i].style);
        spanList[i].style.background = 'url(../assets/ic_rating_s.png)';
        // spanList[i].style.backgroundPosition = -(10-spanList[i].getAttribute('stars'))*10+'px'+ ' '+ (-55)+ 'px';
    }     
}
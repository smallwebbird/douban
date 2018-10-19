window.onload = function(){
    var wheel = document.getElementById('wheel');
    var wheel_img = document.getElementById('wheel_img');
    var wheel_num = document.getElementById('wheel_num').getElementsByTagName('span');
    var wheel_next = document.getElementById('wheel_next');
    var Distance = wheel.offsetWidth, //获取展示区的宽
        index = 0,
        timer; 
    wheel_next.addEventListener('click',function(){
        index++;
        wheel_img.style.transform = 'translateX('+ (-index*Distance) + 'px)';
        if(index > 5){
            index=0;
            wheel_img.style.left = 0+'px';
        }
    },false);


    //俩个按钮
    var editLeft = document.getElementById('edit_arrow_left');
    var editRight = document.getElementById('edit_arrow_right');
    var editAll = document.getElementById('edit_all');
    var isClicked = true;
    editRight.addEventListener('click',function(){
        if(isClicked == true){
            editAll.style.transition ='transform 1s linear';
            editAll.style.transform = 'translateX('+(-655)+'px)';
            isClicked = false;
        }
    },false)
    editLeft.addEventListener('click',function(){
        if(isClicked == false){
            editAll.style.transition ='transform 1s linear';
            editAll.style.transform = 'translateX(0)';
            isClicked = true;
        }
    },false)


    //contact us 
    var one = document.getElementById('one');
    var two = document.getElementById('two')
    var weima2  = document.getElementById('weima2');
    var weima1  = document.getElementById('weima1');
    one.addEventListener('mouseenter',function(){
        weima2.style.display = 'block';
    })
    one.addEventListener('mouseleave',function(){
        weima2.style.display = 'none';
    })
    two.addEventListener('mouseenter',function(){
        weima1.style.display = 'block';
    })
    two.addEventListener('mouseleave',function(){
        weima1.style.display = 'none';
    })
}
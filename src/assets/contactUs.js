window.onload = function(){
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
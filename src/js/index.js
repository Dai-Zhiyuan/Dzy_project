//轮播图
jQuery(function($){
        $('.ban').stop().dzyCarousel({
        img:["img/b1.png","img/b2.png","img/b3.png","img/b4.png","img/b5.png"],
        height:538,
        width:1200,
        type:'fade'
    })
});
document.addEventListener('DOMContentLoaded',function(){

    //返回顶部
    var top = document.querySelector('.top');

    top.onclick = function(){
        var timer = setInterval(function(){

            var scrollTop = window.scrollY;

            var speed = Math.floor(scrollTop/10);

            if(scrollTop<=10 || speed === 0){
                clearInterval(timer);
                window.scrollTo(0,0);
            }
            window.scrollBy(0,-speed);
        },30);
    }



});

document.addEventListener('DOMContentLoaded',function(){

    //返回顶部
    var top = document.querySelector('.to_top');

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

jQuery(function($){

    $('header').load('header.html');
    $('#foot').load('footer.html');
    
    $('.goods').gdsZoom({
        position:'right'
    });

    $('.smallList').on('click','img',function(){
        $('.goods img').attr({
            src:this.src,
            'data-big':this.dataset.big || this.src
        })
    })
});
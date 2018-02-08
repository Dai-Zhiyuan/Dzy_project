require(['config'],function(){
    
    require(['jquery','lunbo'],function($){
        
        //轮播图
        jQuery(function($){
                $('.ban').stop().dzyCarousel({
                img:["img/b1.png","img/b2.png","img/b3.png","img/b4.png","img/b5.png"],
                height:538,
                width:1200,
                type:'fade'
            })
        });

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
        };

        //数据生成商品
        var goods = document.querySelector('.goods');
        
        let arr_status = [200,304];
            
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){

        if(xhr.readyState === 4 && arr_status.includes(xhr.status)){
            var data = JSON.parse(xhr.responseText);console.log(data);
            goods.innerHTML = data.map(function(item){
                return `
                        <li data-id="${item.id}">
                        <img src= '${item.imgs}'>
                        <p>${item.description}</p>
                        <div class="price">
                            <span>活动价<b>￥${item.price}</b></span>
                            |
                            <a href="html/list.html">立即查看</a>
                        </div>
                        </li>
                        <li data-id="${item.id}">
                        <img src= '${item.imgs}'>
                        <p>${item.description}</p>
                        <div class="price">
                            <span>活动价<b>￥${item.price}</b></span>
                            |
                            <a href="html/list.html">立即查看</a>
                        </div>
                        </li>
                        <li data-id="${item.id}">
                        <img src= '${item.imgs}'>
                        <p>${item.description}</p>
                        <div class="price">
                            <span>活动价<b>￥${item.price}</b></span>
                            |
                            <a href="html/list.html">立即查看</a>
                        </div>
                        </li>
                        <li data-id="${item.id}">
                        <img src= '${item.imgs}'>
                        <p>${item.description}</p>
                        <div class="price">
                            <span>活动价<b>￥${item.price}</b></span>
                            |
                            <a href="html/list.html">立即查看</a>
                        </div>
                        </li>
                        
                        `
                }).join('');
            }
        };


        xhr.open('get','api/index.php',true);//readyStage=1

        xhr.send();//readyStage=2

    })
});
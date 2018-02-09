require(['config'],function(){
    
    require(['jquery','zoom'],function($){

        jQuery(function($){
    
            //请求头部和底部
            $('header').load('header.html');
            $('#foot').load('footer.html');
            
            //放大镜
            $('.goods').gdsZoom({
                position:'right'
            });

            $('.smallList').on('click','img',function(){
                $('.goods img').attr({
                    src:this.src,
                    'data-big':this.dataset.big || this.src
                })
            });

            //飞入购物车动画
            var $jiaru = $('.btn_j');
            var $img = $('#img');

            $jiaru.on('click',function(){

                // 复制商品图片
                var $copyImg = $img.clone();

                // 设定图片样式
                $copyImg.css({
                    position:'absolute',
                    left:$img.offset().left,
                    top:$img.offset().top,
                    width:$img.outerWidth(),
                    height:$img.outerHeight()
                });

                // 把图片写入页面
                $('body').append($copyImg);

                // 动画
                $copyImg.animate({
                    left:1200,
                    top:80,
                    width:30,
                    height:30
                },function(){
                    // 动画完成后
                    // 删除复制的图片
                    $copyImg.remove();
                })

            });

        });

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
        };

        //接收参数
        var params = location.search;

        var par = decodeURI(params);   

        var can = par.slice(1);   

        can = can.split('&');   

        var obj = {};

        can.forEach(function(item){
            var arr = item.split('='); 

            obj[arr[0]] = arr[1];
        });console.log(obj);

        var des = document.querySelector('.des');
        var img = document.querySelector('#img');
        var price = document.querySelector('#price');
        var smallimg = document.querySelector('.smallList');

        des.innerText=obj.description;

        img.src=obj.imgs;

        price.innerText = obj.price;

        //存入cookie
        var goods = document.querySelector(".btn");

        var goodslist = [];
        // 获取cookie
        var cookies = document.cookie;
        cookies = cookies.split('; ');
        cookies.forEach(function(item){
            var arr = item.split('=');
            if(arr[0] === 'goodslist'){
                goodslist = JSON.parse(arr[1]);
            }
        });console.log(goodslist)
        
        goods.onclick = function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;

            if(target.tagName.toLowerCase() === 'button'){

                var id = obj.id;

                // 判断当前商品是否已经存在cookie当中
                for(var i=0;i<goodslist.length;i++){
                    if(goodslist[i].id === id){
                        goodslist[i].qty++;
                        break;
                    }
                }
                
                if(i===goodslist.length){
                    // 通过按钮获取商品信息
                    var goods = obj;

                    // 添加到数组
                    goodslist.push(goods);
                }
                // 写入cookie
                document.cookie = 'goodslist='+JSON.stringify(goodslist);
            }
        };

    })
});
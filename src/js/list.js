document.addEventListener('DOMContentLoaded',function(){
    //头部底部
    jQuery(function($){
        $('header').load('header.html');
        $('#foot').load('footer.html');
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
    }

    //数据生成商品
    var goods = document.querySelector('#listgood');
    var page = document.querySelector('.goods_b')
    
    let arr_status = [200,304];
    let pageNo = 2;
    let qty = 15;

        
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){

        if(xhr.readyState === 4 && arr_status.includes(xhr.status)){
            var res = JSON.parse(xhr.responseText);console.log(res);
            goods.innerHTML = res.data.map(function(item){
            return `
                    <li data-id="${item.id}">
                        <img src= "${item.imgs}">
                        <p>${item.description}</p>
                        <p><span>原价￥<del>${item.yuanjia}</del>特惠：￥${item.price}</span></p>
                    </li>
                    `
            }).join('');

            // 处理分页
            let pageQty = Math.ceil(res.total/res.qty);

            page.innerText = '';
            for(let i=0;i<=pageQty;i++){
                let span = document.createElement('span');
                span.innerText = i;
                if(i===res.pageNo){
                    span.className = 'active';
                }
                page.appendChild(span);
            };

            jQuery(function($){
                // 传参
                $('#listgood').on('click','li',function(item){
                    var id = $(this).attr('data-id');
                    // console.log(id);
                    var params = '?';
                    // console.log(data.data);
                    res.data.map(function(item){
                        if(item.id == id){
                            for(var attr in item){
                                params += attr + '=' + item[attr] + '&';
                            }
                            // 删除多余的&
                            params = params.slice(0,-1);
                            // console.log(params);
                            location.href = 'goods.html' + encodeURI(params);
                        }
                    });
            
                });
            })
        }
        
    };

    xhr.open('post','../api/list.php');

    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

    // POS请求发送数据
    xhr.send(`pageNo=${pageNo}&qty=${qty}`);


    // 切换分页
    page.onclick = function(e){
        if(e.target.tagName.toLowerCase() === 'span'){
            pageNo = e.target.innerText*1;
            xhr.open('post','../api/list.php');
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            xhr.send(`pageNo=${pageNo}&qty=${qty}`);
        }
    }


}); 
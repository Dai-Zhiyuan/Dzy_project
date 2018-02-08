document.addEventListener('DOMContentLoaded',function(){

    // 读取cookie
    var goodslist = [];
    var cookies = document.cookie;
    cookies = cookies.split('; ');
    cookies.forEach(function(item){
    var arr = item.split('=');
    if(arr[0] === 'goodslist'){
        goodslist = JSON.parse(arr[1]);
    }
    });console.log(goodslist);

    var ul = document.querySelector('.goods');

    render();

    function render(){
        //数据生成商品
        var zongjia = document.querySelector('#total');
        var qty = document.querySelector('.qty');

        var total = 0;
        var z_qty = 0;

        ul.innerHTML = goodslist.map(function(item){

            total += item.price*item.qty;
            z_qty += item.qty*1;console.log(z_qty);
            // zongjia.innerText = tolal;
            return `
                    <li data-id=${item.id}>
                        <input type="checkbox" class="c_box"/>
                        <img src="${item.imgs}" />
                        <span class="des">${item.description}</span>
                        <span>￥${item.yuanjia}</span>
                        <span class="danjia">￥${item.price}</span>
                        <span class="g_qty">
                            <button>*</button>
                            <i class="shu">${item.qty}</i>
                            <button>*</button>
                        </span>
                        <span>￥${item.yuanjia-item.price}</span>
                        <span class="zongj">￥${item.price*item.qty}</span>
                        <span><button class="del1">删除</button></span>
                    </li>
                    `
        }).join('');

        var zong = total;

        zongjia.innerHTML = zong;
        qty.innerHTML = z_qty;
    };

    // 清空购物车
    var del = document.querySelector('.del');
    
    del.onclick = function(){
        var now = new Date();
        now.setDate(now.getDate()-10);

        // 清除cookie：利用设置过期时间达到删除效果
        document.cookie = 'goodslist=[];expires='+now.toUTCString();

        render();

        location.href = 'car.html';
    };

    // 删除单个商品
    // 利用事件委托
    ul.onclick = function(e){
        e = e || window.event;

        var target = e.target || e.srcElement;

        if(target.className === 'del1'){


            // 获取当前商品对应的id
            var id = target.parentNode.parentNode.getAttribute('data-id');console.log(id)

            for(var i=0;i<goodslist.length;i++){
                if(goodslist[i].id === id){
                    goodslist.splice(i,1);
                    break;
                };
            };

            // 重新写入cookie
            document.cookie = 'goodslist='+JSON.stringify(goodslist);
            //Cookie.set('goodslist',JSON.stringify(goodslist));

            render();
        };
    };

    //全选
    var all = document.querySelector('#all');
    var checks = document.querySelectorAll('.c_box');

    all.onclick = function(){
        for(var i =0;i<checks.length;i++){

            checks[i].checked=all.checked;
        }
        
    }

});
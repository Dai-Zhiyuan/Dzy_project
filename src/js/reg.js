jQuery(function($){

    $('#foot').load('footer.html');

    $('.zhuce').on('click',function(){console.log(666)
        $.ajax({
            url:'../api/reg.php',
            data:{
                username:$('#username').val(),
                password:$('#password').val(),
                phone:$('#phone').val()
            },
            success:function(data){console.log(data);
                
                if(data === 'success'){
                    location.href = '../html/login.html';
                }else{
                    alert('用户名已注册');
                }
            }
        })
    })
    //生成验证码
    var yanzheng = document.querySelector('.yanzhengma');
    yanzheng.innerHTML=vCode();

    //表单验证
    var zhuce = document.querySelector('.zhuce');

    zhuce.onmousedown = function(){
        //验证码是否相等
        var yanzheng = document.querySelector('.yanzhengma').innerHTML;
        var yz = document.querySelector('.yanzheng').value;
        if(yanzheng!==yz){
            alert('验证码不一致');
            return false;
        };
        /*
            手机号码
                11位
                158 8888 8888
                1 [34578]
         */
        var phone = document.querySelector('.shoujihao').value;
        
        if(!/^1[34578]\d{9}$/.test(phone)){
            alert('手机号码不合法');
            return false;
        };
        
        // 验证用户名 ：  
        //    * 不能为空，
        //    * 不能使用特殊字符（数字、字母、横杠），
        //    * 必须以字母开头，
        //    * 长度5-20
        
        var username = document.querySelector('.sjyanzheng');
        if(!/^[a-z][a-z0-9\-]{4,19}$/.test(username.value)){
            alert('用户名不合法');

            return false;
        };
        /*
            密码  
                长度6-20 
                不能包含空格
         */
        var password = document.querySelector('.psw1').value;
        var password2 = document.querySelector('.psw2').value;
        
        if(!/^[^\s]{6,20}$/.test(password)){
            alert('密码不合法');
            return false;
        };
        if(password != password2){
            alert('两次密码不一致');

            return false;
        }
        var yuedu = document.querySelector('#yuedu');

        if(yuedu.checked==false){
            alert('您没阅读条款');

            return false;
        }
    };
        
})

    


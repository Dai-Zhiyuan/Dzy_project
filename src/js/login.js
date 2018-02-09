jQuery(function($){
    $('#foot').load('footer.html');

    $('.btn').on('click',function(){
        $.ajax({
            url:'../api/login.php',
            data:{
                username:$('#username').val(),
                password:$('#password').val()
            },
            success:function(data){console.log(data);
                
                if(data === 'success'){
                    location.href = '../index.html';
                }else if(data === 'fail'){
                    alert('用户名或密码有误！');
                }
            }
        })
    })
});
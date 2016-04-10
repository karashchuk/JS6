(function($) {
    $(function() {
        $(document).on('click', '#send', function(event) {
            var res;
            $('input.active').removeClass('active');
            $.post('validator.php',
           {
                'username': $('#username').val(),
                'password': $('#password').val(),
                'email': $('#email').val(),
                'gender': $('#gender').val(),
                'credit_card': $('#credit_card').val(),
                'bio': $('#bio').val(),
            },
              function(data,res){
                //res = data;
                    if(data.result="false"){
                        $('#response').html('Неправильные данные');
                    }
                    else{
                        $('#response').html('Принято');     
                    }
                var myError = '<br>';
                if (data.error){
                    if (data.error.Username) {
                        myError += data.error.Username+'<br>';
                        $('#username').addClass('active');
                    }
                    var my = '#password';
                    if (data.error.Password) {
                        myError += data.error.Password+'<br>';
                        $(my).addClass('active');
                    }
                    if (data.error.Email) myError += data.error.Email+'<br>';
                    if (data.error.Gender) myError += data.error.Gender+'<br>';
                    if (data.error.Credit_card) myError += data.error.Credit_card+'<br>';
                    if (data.error.Bio) myError += data.error.Bio+'<br>';
                }
                
                $('#response').html($('#response').html() +': <br>'+myError);
                console.log(data.error);
                //console.log(data.error.val());
                console.log(data.error.index);
                //console.log(data.error.index());
                
                console.log(data.result);
                console.log(data);
                
                },"json");
            });
            event.preventDefault();

        });

})(jQuery);


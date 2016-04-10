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
              function(data,myresult){
                //res = $.parseJSON(data);
                
                    if(data.result){
                        $('#response').html('Принято!');
                        
                    }
                    else{
                        $('#response').html('Неправильные данные:');
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
                
                $('#response').html($('#response').html() +'<br>'+myError);
                var mm = data.error;
               
                
                console.log(data);
                console.log(data.error);
                //console.log(res[error]);
                console.log(data.result);
                //console.log(res.result.val());
                
                //console.log(mm.[0]);
                //console.log(mm[2]);
                
                console.log(data);
                console.log(data.error);
                //console.log(data.error.index());
                
                console.log(data.result);
                console.log(data);
                
                },"json");
            });
            event.preventDefault();

        });

})(jQuery);


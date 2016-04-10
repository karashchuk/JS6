var myData=['#username','#password','#email','#gender','#credit_card','#bio'];
var serverData=['Username','Password','Email','Gender','Credit Card','Bio'];

(function($) {
    $(function() {
        $(document).on('click', '#send', function(event) {

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
                
                if(data.result){
                    $('#response').html('Принято!');
                }
                else{
                    $('#response').html('Неправильные данные:');
                }
                
                var myError = '<br>';
                if (data.error){
                    for(var i = 0 ; i < 6 ; i++ ){
                        if (data.error[serverData[i]]) {
                            myError += data.error[serverData[i]] +'<br>';
                            $(myData[i]).addClass('active');
                        }
                    }
                }
                
                $('#response').html($('#response').html() +'<br>'+myError);
                
            },"json");
            
        });
        event.preventDefault();
    });
})(jQuery);


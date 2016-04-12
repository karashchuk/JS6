var serverData=['Username','Password','Email','Gender','Credit Card','Bio'];

(function($) {
    $(function() {
        $(document).on('click', '#send', function(event) {

            $('input.active').removeClass('active');
            
            $.post('validator.php',
           {
                'username': $('#Username').val(),
                'password': $('#Password').val(),
                'email': $('#Email').val(),
                'gender': $('#Gender').val(),
                'credit_card': document.getElementById("Credit Card").value,
                'bio': $('#Bio').val(),
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
                            document.getElementById(serverData[i]).classList.add('active');
                        }
                    }
                }
                
                $('#response').html($('#response').html() +'<br>'+myError);

            },"json");
            
        });
        event.preventDefault();
    });
})(jQuery);


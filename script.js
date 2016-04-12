var serverData=['Username','Password','Email','Gender','Credit Card','Bio'];

(function($) {
    $(function() {
        $(document).on('click', '#send', function(event) {

            $('input.active').removeClass('active');
            $.post('validator.php',
                $("form").serialize(),
                   
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
                            $("#"+serverData[i].toLowerCase().replace(' ','_')).addClass('active');
                        }
                        //console.log(data.error[serverData[i]]);
                    }
                }
                
                $('#response').html($('#response').html() +'<br>'+myError);

            },"json");
            
        });
        event.preventDefault();
    });
})(jQuery);


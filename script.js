
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

                $.each(data.error, function(key,value){
                    myError += key+' : '+value +'<br>';
                    $("#"+key.replace(' ','_')).addClass('active');
                });
                
                $('#response').html($('#response').html() +'<br>'+myError);

            },"json");
            
        });
        event.preventDefault();
    });
})(jQuery);


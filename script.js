//var myData=['#username','#password','#email','#gender','#credit_card','#bio'];
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
                'credit_card': $('#CreditCard').val(),
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
                            if (serverData[i] == 'Credit Card') {
                                $("#CreditCard").addClass('active');   
                            }
                            else $("#"+serverData[i]).addClass('active');
                            //console.log($("#"+serverData[i]));
                        }
                    }
                }
                
                /*$('#response').html($('#response').html() +'<br>'+myError);
                var arr = [];
                $.each(data.error, function(key,value){
                    arr.push(key);
                    console.log( key+' : '+value); 
                });
                console.log(arr);*/

            },"json");
            
        });
        event.preventDefault();
    });
})(jQuery);


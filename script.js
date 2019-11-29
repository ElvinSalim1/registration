$(function(){

    /*
    $("#selectButton").click(function(){
        if (!$("#registration").validate()){
            return false;
        }else{
            $("#registration").submit();
        }
    });
    */

    var $registerForm = $("#registration");
    $.validator.addMethod("Blank", function(value, element){
        return value == '' || value.trim().length != 0
    }, "Gaps are not allowed");
    if($registerForm.length){
        $registerForm.validate({
            rules:{
                firstname:{
                    required: true,
                    Blank: true,
                    minlength: 3
                },
                lastname:{
                    required: true,
                    Blank: true,
                    minlength: 3
                },
                username:{
                    required: true,
                    Blank: true
                },
                email:{
                    required: true,
                    email: true
                },
                password:{
                    required: true,
                    minlength: 6
                },
                password1:{
                    required: true
                },
                confirm:{
                    required: true,
                    equalTo: '#password'
                },
                gender:{
                    required: true
                },
                message:{
                    required: true
                },
                birth:{
                    required: true
                },
                policy:{
                    required: true
                },
                country:{
                    required: true
                }

            },
            messages:{
                firstname:{
                    required: 'Please enter your firstname'
                },
                lastname:{
                    required: 'Please enter your lastname'
                },
                username:{
                    required: 'Please enter your username'
                },
                email:{
                    required: 'Please enter your email',
                    email: 'Please enter valid email'
                },
                password:{
                    required: 'Please enter password'
                },
                password1:{
                    required: 'Please enter password'
                },
                confirm:{
                    required: 'Please confirm your password',
                    equalTo: 'Please enter the same password'
                },
                birth:{
                    required: 'Please enter your birth date'
                },
                message:{
                    required: 'Please write a message'
                },
                gender:{
                    required: 'Please enter your gender'
                },
                policy:{
                    required: 'Please accept policy'
                },
                country:{
                    required: 'Please select country'
                }
            },
            errorPlacement: function(error, element){
                if(element.is(":radio")){
                    error.appendTo(element.parents(".gender"));
                }else{
                    error.insertAfter(element);
                }
            }
        })
    }
})

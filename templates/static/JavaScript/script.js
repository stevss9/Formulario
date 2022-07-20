$.validator.setDefaults( {
  submitHandler: function () {
     alert( "GRACIAS POR ENVIAR TU MENSAJE :D" );
  }
});


$(document).ready(function(){
  $('#signupForm').validate({
     rules: {
        fullname: {
           required: true,
           minlength: 5
        },
        tema: {
           required: true,
           minlength: 5
        },
        email: {
           required: true,
           email: true
        },
        capcha: {
         required: true,

      },
        agree: "required"
        
     },
     messages: {           
        fullname: {
           required: "Por favor ingresa tu nombre completo",
           minlength: "Tu nombre debe ser de no menos de 5 caracteres"
        },
        tema: {
           required: "Por favor ingresa ingresa un tema",
           minlength: "El tema debe tener 5 caracteres de longitud",
        },
        capcha: "Por favor el Captcha válido",
        email: "Por favor ingresa un correo válido",
        agree: "Por favor acepta las politicas",
        luckynumber: {
           required: "Por favor"
        }
     },
     errorElement: "em",
     errorPlacement: function (error, element) {
        // Add the `help-block` class to the error element
        error.addClass("help-block");

        if (element.prop( "type" ) === "checkbox") {
           error.insertAfter(element.parent("label") );
        } else {
           error.insertAfter(element);
        }
     },
     highlight: function ( element, errorClass, validClass ) {
        $( element ).parents( ".col-sm-10" ).addClass( "has-error" ).removeClass( "has-success" );
     },
     unhighlight: function (element, errorClass, validClass) {
        $( element ).parents( ".col-sm-10" ).addClass( "has-success" ).removeClass( "has-error" );  
     } 
  });
});
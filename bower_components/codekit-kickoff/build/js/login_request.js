$(function() {

 $("input").jqBootstrapValidation(
    {
     preventSubmit: true,
     submitError: function($form, event, errors) {
      // something to have when submit produces an error ?
      // Not decided if I need it yet
     },
     submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
       // get values from FORM
       var name = $("input#name").val();  
       var email = $("input#email").val(); 
       var company = $("input#company").val();
        var firstName = name; // For Success/Failure Message
           // Check for white space in name for Success/Fail message
          if (firstName.indexOf(' ') >= 0) {
         firstName = name.split(' ').slice(0, -1).join(' ');
         }        
   $.ajax({
                url: "./bin/login_request.php",
                type: "POST",
                data: {name: name, email: email, company: company},
                cache: false,
          success: function() {  
          // Success message
          var url = "beta-confirm.html";

          // IE8 and lower fix
          if (navigator.userAgent.match(/MSIE\s(?!9.0)/))
          {
              var referLink = document.createElement("a");
              referLink.href = url;
              document.body.appendChild(referLink);
              referLink.click();
          }

          // All other browsers
          else { window.location.replace(url); }
                
      //clear all fields
      $('#request-form').trigger("reset");
        },
     error: function() {    
    // Fail message
     $('#success').html("<div class='alert alert-danger'>");
              $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
               .append( "</button>");
              $('#success > .alert-danger').append("<strong>Sorry "+firstName+" it seems that my mail server is not responding...</strong> Could you please email us directly to <a href='mailto:beta@jonar.com?Subject=beta_signup from jonar.com'>beta@jonar.com</a> ? Sorry for the inconvenience!");
          $('#success > .alert-danger').append('</div>');
    //clear all fields
    $('#request-form').trigger("reset");
      },
           });
         },
         filter: function() {
                   return $(this).is(":visible");
         },
       });

      $("a[data-toggle=\"tab\"]").click(function(e) {
                    e.preventDefault();
                    $(this).tab("show");
        });
  });
 

/*When clicking on Full hide fail/success boxes */ 
$('#name').focus(function() {
     $('#success').html('');
  });

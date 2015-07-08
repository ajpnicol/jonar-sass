/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
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
      var number = $("input#number").val();
      var q4 = $("input#q4").val(); 
      var q5 = $("input#q5").val();
      var q6 = $("input#q6").val(); 
      var q7 = $("input#q7").val();
      var updates = "input#updates"; // For subscription opt-in
          // Check if box is clicked
          if (document.getElementById('updates').checked) {
            return true;
          }
          else { updates = 'Nahh'; } 

      var firstName = name; // For Success/Failure Message
        // Check for white space in name for Success/Fail message
        if (firstName.indexOf(' ') >= 0) {
          firstName = name.split(' ').slice(0, -1).join(' ');
        }

   $.ajax({
                url: "bin/beta.php",
                type: "POST",
                data: {name: name, email: email, number: number, q4: q4, q5: q5, q6: q6, q7: q7, updates: updates},
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
      $('#beta-form').trigger("reset");
        },
     error: function() {    
    // Fail message
     $('#success').html("<div class='alert alert-danger'>");
              $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
               .append( "</button>");
              $('#success > .alert-danger').append("<strong>Sorry "+firstName+" it seems that my mail server is not responding...</strong> Could you please email us directly to <a href='mailto:beta@jonar.com?Subject=beta_signup from jonar.com'>beta@jonar.com</a> ? Sorry for the inconvenience!");
          $('#success > .alert-danger').append('</div>');
    //clear all fields
    $('#beta-form').trigger("reset");
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

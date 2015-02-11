jQuery(document).ready(function($) {

    $('.form-submit').click(function(e){
        var $formId = $(this).parents('form');
        var formAction = $formId.attr('action');
        defaulttextRemove();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        $('li',$formId).removeClass('error');
        $('span.error').remove();
        $('.required',$formId).each(function(){
            var inputVal = $(this).val();
            var $parentTag = $(this).parent();
            if(inputVal == ''){
                $parentTag.addClass('error').append('<span class="error">Required field</span>');
            }
            if($(this).hasClass('email') == true){
                if(!emailReg.test(inputVal)){
                    $parentTag.addClass('error').append('<span class="error">Enter a valid email address.</span>');
                }
            }
        });
        if ($('span.error').length == "0") {
            $formId.append($loading.clone());
            $('fieldset',$formId).hide();
            $.post(formAction, $formId.serialize(),function(data){
                $('.loading').remove();
                $formId.append(data).fadeIn();
            });
        }
        e.preventDefault();
    });
});
function defaulttextRemove(){
    $('.default').each(function(){
        var defaultVal = $(this).attr('title');
        if ($(this).val() == defaultVal){
            $(this).val('');
        }
    });
}
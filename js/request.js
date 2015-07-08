// Login Form

$(function() {
    var button = $('#requestButton');
    var modal = $('#requestModal');
    var form = $('#requestForm');
    button.removeAttr('href');
    button.mouseup(function(login) {
        modal.toggle();
        button.toggleClass('active');
		send();
    });
    form.mouseup(function() { 
        return false;
    });
    $(this).mouseup(function(login) {
        if(!($(login.target).parent('#requestButton').length > 0)) {
            button.removeClass('active');
            modal.hide();
        }
    });
});

function send(){
	var sendButton = document.getElementById('#send');
}
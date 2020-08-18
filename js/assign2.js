$(document).ready(function(){ 
    $('.add').click(function() {
        $('.main:last').before('<div class="main"><input type="file"> <select><option>secondary Image</option><option> Thrid Image</option><option>Fourth Image</option><option>Fifth Image</option></select> <a class="remove anchor" href="#">Remove</a><div>');
    });
    $('form').on('click','.remove',function() {
 	    $(this).parent().remove();
    });
});

$(document).ready(function(){ 
    $('.add').click(function() {
        $('.main:last').before('<div class="main"><input type="text"> <button>Browse</button> <select><option>Property Image</option><option>Property Image 1</option></select> <a class="remove anchor" href="#">Remove</a><div>');
    });
    $('form').on('click','.remove',function() {
 	    $(this).parent().remove();
    });
});

$(document).ready(function(){
    $('.parentcheck').click(function(){
      $(this).parents().siblings("ul").find("input").prop('checked', this.checked);
    });
  
    $('.selecter').find('input').each(function(index, input){
      $(this).on("change", function() {
        var checkbox = $(this);
        var is_checked = checkbox.is(':checked');
        if (is_checked) {
          $(checkbox).parents("ul").siblings("div").find('.parentcheck').prop('checked', this.checked);
        } else {
          let checkboxes = $(this).parents("ul").find("input");
          if (allCheckBoxesUnChecked(checkboxes)) {
            $(checkbox).parents("ul").siblings("div").find('.parentcheck').prop('checked', false);
          }
        }
      });
    });
  
    function allCheckBoxesUnChecked(elems){
      let allUnchecked = true;
      $.each(elems, function(ind, item){
        if (item.checked){
          allUnchecked = false;
          return;
        }
      });
      return allUnchecked;
    }
});
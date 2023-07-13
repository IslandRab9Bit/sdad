//print function
$(function() {
    $("#printable").find('.print').on('click', function() {
      $.print("#printable");
    });
  });
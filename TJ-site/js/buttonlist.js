$("#Rank").change(function(){
   correspondingID = $(this).find(":selected").val()
   $(".style-sub-1").hide();
   $("#" + correspondingID).show();

})
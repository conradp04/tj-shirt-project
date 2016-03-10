$("#shirtorder").change(function(){
   correspondingID = $(this).find(":selected").val()
   $(".style-sub-1").hide();
   $("#" + correspondingID).show();

})

$("#shirtorderTwo").change(function(){
   correspondingID = $(this).find(":selected").val()
   $(".style-sub-2").hide();
   $("#" + correspondingID).show();

})

$("#shirtorderThree").change(function(){
   correspondingID = $(this).find(":selected").val()
   $(".style-sub-3").hide();
   $("#" + correspondingID).show();

})

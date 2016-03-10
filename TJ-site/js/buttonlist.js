$("#shirtorder").change(function(){
   correspondingID = $(this).find(":selected").val()
   $(".style-sub-1").show();
   $("#" + correspondingID).show();

})

	

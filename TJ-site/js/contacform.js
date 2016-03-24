//  function toggleDiv(divId) {
  //         $("#"+'myContent').toggle();
    //    };
        
        
//function asd(a)
{
    if(a==1)
    document.getElementById("asd").style.display="none";
    else
    document.getElementById("asd").style.display="block";
}

   $("#previousbutton").click(function() {
    $("#form_sub_container1").show();
    $("#form_sub_container2").hide(); })

    $("#nextbutton").click(function() {
    $("#form_container").find(":hidden").show().next();
    $("#form_sub_container1").hide();
})

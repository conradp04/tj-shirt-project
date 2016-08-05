Choose_Size = new Array("--");
X_SMALL = new Array("BLUE","RED","GREY OR GREEN");
SMALL = new Array("BLUE","GREY","RED");
MEDIUM = new Array("BLUE","GREY","RED");
LARGE = new Array("BLUE","GREY","RED");
X_LARGE = new Array("BLUE","GREY","RED");
XX_LARGE = new Array("BLUE","GREY","RED");
XXX_LARGE = new Array("BLUE","GREY","RED");

//populateSelect();
$(function() {

      $('#sweatSize').change(function(){
      	console.log("Hello WOrk");
        populateSelect();
    });
    
});

function populateSelect(){
    shirtstyle=$('#sweatSize').val();
    $('#sweatColor').html('');
    
       eval(shirtstyle).forEach(function(t) { 
            $('#sweatColor').append('<option>'+t+'</option>');
           // $('#sweatColor').attr("value:",t);
           // $("#sweatColor").attr("asp:ListItem")
           // $('#sweatColor').append('<asp:ListItem>'+t+'</asp:ListItem>');
        })

};


$(document).ready(function(){
	$(".clickHere").click(function(){
		$(".write").html("waddup");

	})
	
})

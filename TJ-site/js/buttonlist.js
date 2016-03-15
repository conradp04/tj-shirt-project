Pullover=new Array("XSmall","Small","Medium","Large","Large Tall","XLarge","2XL","3XL");
Button=new Array("XSmall","Small","Medium","Large","Large Tall","XLarge","2XL","3XL");


populateSelect();

$(function() {

      $('#style').change(function(){
        populateSelect();
    });
    
});


function populateSelect(){
    shirtstyle=$('#style').val();
    $('#item').html('');
    
       eval(shirtstyle).forEach(function(t) { 
            $('#item').append('<option>'+t+'</option>');
        });
    };
    



var limit = 7;
$('input.single-checkbox').on('change', function(evt) {
   if($("input:checkbox[class=single-checkbox]:checked").length > limit) {
       this.checked = false;
   }
});

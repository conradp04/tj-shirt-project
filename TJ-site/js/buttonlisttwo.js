Pullover=new Array("XXSmall","XSmall","Small","Medium","Large","XLarge","2XL");
Button=new Array("XSmall","Small","Medium","Large","XLarge","2XLarge","3XLarge");


populateSelect();

$(function() {

      $('#womens').change(function(){
        populateSelect();
    });
    
});


function populateSelect(){
    shirtstyle=$('#womens').val();
    $('#itemtwo').html('');
    
       eval(shirtstyle).forEach(function(t) { 
            $('#itemtwo').append('<option>'+t+'</option>');
        });
    };
    


var limit = 7;
$('input.single-checkbox').on('change', function(evt) {
   if($("input:checkbox[class=single-checkbox]:checked").length > limit) {
       this.checked = false;
   }
});

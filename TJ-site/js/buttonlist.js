Pullovers=new Array("XSmall","Small","Medium","Large","Large Tall","XLarge","2XL","3XL");
Buttons=new Array("XSmall","Small","Medium","Large","Large Tall","XLarge","2XL","3XL");


populateSelect();

$(function() {

      $('#shirtstyle').change(function(){
        populateSelect();
    });
    
});


function populateSelect(){
    shirtstyle=$('#shirtstyle').val();
    $('.item').html('');
    
       eval(shirtstyle).forEach(function(t) { 
            $('.item').append('<option>'+t+'</option>');
        });
    };
    


Choose_Size = new Array("--");
X_SMALL = new Array("BLUE", "RED", "GREY OR GREEN");
SMALL = new Array("BLUE", "GREY", "RED");
MEDIUM = new Array("BLUE", "GREY", "RED");
LARGE = new Array("BLUE", "GREY", "RED");
X_LARGE = new Array("BLUE", "GREY", "RED");
XX_LARGE = new Array("BLUE", "GREY", "RED");
XXX_LARGE = new Array("BLUE", "GREY", "RED");

//populateSelect();
$(function () {

    $('#sweatSize').change(function () {
        console.log("Hello WOrk");
        populateSelect();
    });

});

function populateSelect() {
    shirtstyle = $('#sweatSize').val();
    $('#sweatColor').html('');

    eval(shirtstyle).forEach(function (t) {
        $('#sweatColor').append('<option>' + t + '</option>');
    });
};


//         Apply CURRENT DATE 
$(document).ready(function () {

    currentDate();
    function currentDate() {
        var monthNames = ["JANUARY", "FEBREUARY", "MARCH", "APRIL", "MAY", "JUNE",
          "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth();
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }
        var today = monthNames[mm] + ' ' + dd + ',' + yyyy;
        //console.log(today);
        document.getElementById("cDate").innerHTML = today;

    }


});

//   SHOPPING CART //

    var order = [];

    var newHireKit = function (fName, lName, cutter, shirtSize, NHPacks, holster, tagName, tagStyle) {
        this.fName = fName;
        this.lName = lName;
        this.cutter = cutter;
        this.shirtSize = shirtSize;
        this.NHPacks = NHPacks;
        this.holster = holster;
        this.tagName = tagName;
        this.tagStyle = tagStyle;
      
    }
  

    function objectsInCart(fName, lName, cutter, shirtSize, NHPacks, holster, tagName, tagStyle) {
        var crewMember = new newHireKit(fName, lName, cutter, shirtSize, NHPacks, holster, tagName, tagStyle);
        order.push(crewMember);
        console.log(order);
     
    }


    $(".btn").click(function () {
        var fName = document.getElementById('fName').value;
        var lName = document.getElementById('lName').value;
        var cutterSide = $("[id$='radioStacked1']").find(":checked").val();
        var size = document.getElementById('shirtSize').value;
        var tagName = document.getElementById('tagName').value;
        var tagStyle = document.getElementById('tagStyle').value;
        var count = parseInt($('option:selected').attr("data-count"));
        objectsInCart(fName, lName, cutterSide, size, "New Hire Pack", "Holster", tagName, tagStyle);
          

        var newCrewKits = {
            storeinfo:
            [
                {
                    "userName": "112CREW",
                    "storeNumber": "112",
                    "storeDescription": "TJ 112 - MONROVIA, CA",
                    "vendorNumber": 123456,
                    "vendorDescription": "Chino Warehouse"

                }
            ],
            newKits: [
                {
                    "firstName": fName,
                    "lastName": lName
                },
                {
                    "SkuNumber": 8018181,
                    "SkuDescription": cutterSide,
                    "Quantity": 1
                },
                {
                    "SkuNumber": 70283828,
                    "SkuDescription": "Shirt Size - " + size,
                    "Quantity": count
                },
                {
                    "SkuNumber": 2345323,
                    "SkuDescription": "New Hire Kit",
                    "Quantity": 1
                },
                {
                    "SkuNumber": 100001,
                    "SkuDescription": "Leather Holster",
                    "Quantity": 1
                }
            ]
        };
        ;
        var jsonString = JSON.stringify(newCrewKits);
        console.log(jsonString);
        localStorage.setItem("JSONS", jsonString)
        saveCart();
    })



//                      ONCLICK SUBMIT //

    //$('.btn').click(function () {

    //    orderName(order);
    //    orderItems(order);
    //    orderShirt(order);
    //    orderTag(order);
    //    orderTagStyle(order);
    //    orderNHKit(order);

    //})

 

    function orderItems(newHireKit) {
        count = 0;
        for (var i in newHireKit) {
            console.log("SAFETY CUTTER SIDE: " + newHireKit[i].cutter)
        }

    }

    function orderShirt(newHireKit) {
        for (var i in newHireKit) {
            console.log('SHIRT SIZE: ' + newHireKit[i].shirtSize)
        }

    }

    function orderTag(newHireKit) {
        for (var i in newHireKit) {
            console.log('NAME ON TAG: ' + newHireKit[i].tagName)
        }
    }

    function orderTagStyle(newHireKit) {
        for (var i in newHireKit) {
            console.log("PIN or MAGNET: " + newHireKit[i].tagStyle)
        }
    }

    function orderNHKit(newHireKit) {
        for (var i in newHireKit) {
            console.log('New Hire Kit: ' + newHireKit[i].NHPacks)
        }
    }

    function orderNHKit(newHireKit) {
        for (var i in newHireKit) {
            console.log('Holster: ' + newHireKit[i].holster)
        }
    }


    function saveCart() {
        localStorage.setItem("NewHireOrder", JSON.stringify(order));
    };







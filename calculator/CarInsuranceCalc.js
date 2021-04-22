
 $(document).ready(function() {
    $(".total").text("Total cost: Rs. 0");
  
$('input,select').on('change', refreshTotal);
function refreshTotal() {
    var paint = +$('#paint').val();
    var bumper = +$('#bumper').val();
    var hood = +$('#hood').val();
    var fender = +$('#fender').val();
    var roof = +$('#roof').val();
    var fdoor = +$('#fdoor').val();
    var bdoor = +$('#bdoor').val();
    var trunk = +$('#trunk').val();
    var wind = +$('#wind').val();
    var ml = +$('#ml').val();
    var engine = +$('#engine').val();

    if (isNaN(paint)) paint = 0;
    if (isNaN(bumper)) bumper = 0;
    if (isNaN(hood)) hood = 0;
    if (isNaN(fender)) fender = 0;
    if (isNaN(roof)) roof = 0;
    if (isNaN(fdoor)) fdoor = 0;
    if (isNaN(bdoor)) bdoor = 0;
    if (isNaN(trunk)) trunk = 0;
    if (isNaN(wind)) wind = 0;
    if (isNaN(ml)) ml = 0;
    if (isNaN(engine)) engine = 0;
    

    var total = paint + bumper + hood + fender + roof + fdoor + bdoor + trunk + wind + ml + engine;
    $(".total").text("Total cost: Rs. " + total);
    if(total > 10000){
        $(".transfer").text("Transfer to Official");
    } else {
        $(".transfer").text("Proceed to payment");
    }
}
});

$(document).ready(function(){
    $(".transfer").click(function(){
      alert("Do you want to Continue?");
    });
  });
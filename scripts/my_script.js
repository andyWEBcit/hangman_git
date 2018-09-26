
console.log("conneted");


$("#hangLoop").hover(function(){
    $(this).css("width", "10%");
    // $("#invitation").fadeTo(1000, 1);
    $("#invitation").css("opacity", "1");
    // $("#invitation").css("opacity", "1");
    }, function(){
    $(this).css("width", "9%");
    $("#invitation").css("opacity", "0");
});

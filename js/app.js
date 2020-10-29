$("#encuesta").hide();
$("#mostrarEncuesta").on("click", function(){
    $("#intro").hide();
    $("#encuesta").fadeIn("fast");
});
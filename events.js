$(document).ready(function(e) {

	$(".run").click(function(){
		$.ajax({
		  method: "POST",
		  url: "process.php",
		  context: this, /*for keeping 'this' inside ajax funcion*/
		  data: {
		  	number1: $("input#val1").val(),
		  	number2: $("input#val2").val()
		  }
		})
		  .done(function( result ) {
			alert(result);
		  });
	});
	
});

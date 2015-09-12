		$.ajax({
		  method: "POST",
		  url: "some.php",
		  context: this, /*for keeping 'this' inside ajax funcion*/
		  data: { name: "John", location: "Boston" }
		})
		  .done(function( msg ) {
			alert( "Data Saved: " + msg );
		  });

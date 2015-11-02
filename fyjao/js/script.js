/*$(document).ready(
    function()
    {
      $("#portrait").fadeOut(1000);
    }
  );
  */
  
$(document).ready(
    function()
    {
      $('#header').load("header.html");
			body.paddingTop = $('#header').height();
			alert("changed!");
    }
  );


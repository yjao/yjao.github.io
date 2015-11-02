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
			alert("changes!!!asdasdasdasdasds! ");
    }
  );

$("#header").ready(
		function()
		{
			$('body').css("paddingTop", $('#header').height());
			alert($('#header').height());
    }
	);

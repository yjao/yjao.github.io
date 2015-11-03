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
			alert("12:51");
    }
  );

$('#header').load(
		function()
		{
			$('body').css("paddingTop", $('#header').height());
			alert($('#header').height());
    }
	);

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
    }
  );

$('#header').load(
		function()
		{
			$('body').css("paddingTop", $('#header').height());
			alert($('#header').height());
			alert("changes reflected");
    }
	);

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
			alert("1:02");
			$('#header').prepend("header.html");
			$('#header').load(
				function()
				{
					$('body').css("paddingTop", $('#header').height());
					alert($('#header').height());
				}
			);
    }
  );



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
      //alert("");
			$('#header').load("header.html", function()
				{
					$('body').css("paddingTop", $('#header').height());
				});
			
    }
  );

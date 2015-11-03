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
      alert("1:15");
			$('#header').load("header.html", function()
				{
					$('body').css("paddingTop", $('#header').height());
					alert($('#header').height());
				});
			
    }
  );

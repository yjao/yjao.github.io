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
      alert("1:12");
			$('#header').load("header.html");
			$('#header').load(
				function()
				{
					$('body').css("paddingTop", $('#header').height());
					alert($('#header').height());
				}
			);
    }
  );



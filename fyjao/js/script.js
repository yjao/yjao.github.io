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
      displayVersion();
			$('#header').load("header.html", addPadding);
			
    }
  );

var displayVersion = function()
{
  alert("10:52");
};

var addPadding = function()
{
	$('body').css("paddingTop", $('#header').height());
};
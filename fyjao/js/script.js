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
  alert("130");
};

var addPadding = function()
{
	$('body').css("paddingTop", $('#header').height());
	colorTab();
};

var colorTab = function()
{
  alert($('tabID'));
  $('tabID').css('color', 'black');
  $('tabID').css('background-color', '#FFF252');
};
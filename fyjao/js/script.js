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
  alert("123");
};

var addPadding = function()
{
	$('body').css("paddingTop", $('#header').height());
	colorTab();
};

var colorTab = function()
{
  alert($('tabID'));
  $('#linkHome').css('color', 'black');
  $('#linkHome').css('background-color', '#FFF252');
};
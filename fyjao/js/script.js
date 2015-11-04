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
			//colorTab();
    }
  );

var displayVersion = function()
{
  alert("1200");
};

var addPadding = function()
{
	$('body').css("paddingTop", $('#header').height());
};

var colorTab = function()
{
  $('#linkHome').load('header.html #linkHome');
  $('#linkHome').css('background-color', '#FFF252');
};
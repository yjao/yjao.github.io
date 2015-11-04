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
  alert("1202");
};

var addPadding = function()
{
	$('body').css("paddingTop", $('#header').height());
};

var colorTab = function()
{
  $('#linkHome').load('header.html #linkHome');
  $('#linkHome').css('background-color', '#FFF252');
  alert("Header time!");
  $('#header').css('background-color', '#FFF252');
};
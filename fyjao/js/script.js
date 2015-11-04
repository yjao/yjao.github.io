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
  alert("1257");
};

var addPadding = function()
{
	$('body').css("paddingTop", $('#header').height());
	colorTab();
};

var colorTab = function()
{
  $('#linkHome').css('color', 'black');
  $('#linkHome').css('background-color', '#FFF252');
  //alert($('#header').getElementById('#linkHome').style.color);
  /*$('#linkHome').load('header.html #linkHome');
  alert("Header time!");
  $('#header').css('background-color', 'black');*/
};
$(document).ready(
    function()
    {
			$('#header').load("header.html", headerLoaded);
	    //$(window).resize(addPadding);
    }
  );
  
var headerLoaded = function()
{
  displayVersion("1053");
	//addPadding();
	colorTab();
};

var displayVersion = function(versionID)
{
  $('#version').text("Version: "+versionID);
};

var addPadding = function()
{
  var mediaQuery = window.matchMedia("(min-width: 600px)");
  if (mediaQuery.matches)
    $('body').css("paddingTop", $('#header').height());
  else
    $('main-content').css("paddingTop", "20px");
};

var colorTab = function()
{
  var fontColor = 'black';
  var bgColor = '#ffffcc';
  switch (tabID)
  {
    case 0:
      $('#linkHome').css('color', fontColor);
      $('#linkHome').css('background-color', bgColor);
      break;
    case 1:
      $('#linkAbout').css('color', fontColor);
      $('#linkAbout').css('background-color', bgColor);
      break;
    case 2:
      $('#linkWork').css('color', fontColor);
      $('#linkWork').css('background-color', bgColor);
      break;
    case 3:
      $('#linkContact').css('color', fontColor);
      $('#linkContact').css('background-color', bgColor);
      break;
  }
};
$(document).ready(
    function()
    {
			$('#header').load("header.html", headerLoaded);
	    $(window).resize(addPadding);
    }
  );
  
var headerLoaded = function()
{
  displayVersion("1017");
	addPadding();
	colorTab();
};

var displayVersion = function(versionID)
{
  $('#version').text("Version: "+versionID);
};

var addPadding = function()
{
  var padding;
  var mediaQuery = window.matchMedia("(min-width: 600px)");
  if (mediaQuery.matches)
    padding = $('#header').height();
  else
    padding = "20px";
  $('body').css("paddingTop", padding);
};

var colorTab = function()
{
  var fontColor = 'black';
  var bgColor = '#FFF574';
  switch (tabID)
  {
    case 0:
      $('#linkHome').css('color', fontColor);
      $('#linkHome').css('background-color', bgColor);
      break;
    case 1:
      $('#linkWork').css('color', fontColor);
      $('#linkWork').css('background-color', bgColor);
      break;
    case 2:
      $('#linkContact').css('color', fontColor);
      $('#linkContact').css('background-color', bgColor);
      break;
  }
};
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
			$('#header').load("header.html", headerLoaded);
			$(window).resize(addPadding);
    }
  );
  
var headerLoaded = function()
{
  displayVersion("917");
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
  if ($('header').css("position") == "fixed")
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
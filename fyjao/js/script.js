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
  displayVersion("908");
	addPadding();
	colorTab();
};

var displayVersion = function(versionID)
{
  $('#version').text("Version: "+versionID);
};

var addPadding = function()
{
  //displayVersion($('#header').height());
  $('body').css("paddingTop", $('#header').height());
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
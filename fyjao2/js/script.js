$(document).ready(
    function()
    {
			$('#header').load("header.html", headerLoaded);
	    //$(window).resize(addPadding);
    }
  );
  
var headerLoaded = function()
{
  displayVersion("1120");
	//addPadding();
	resizeTabs();
	colorTab();
};

var displayVersion = function(versionID)
{
  $('#version').text("Version: "+versionID);
};

/*var addPadding = function()
{
  displayVersion("9:22");
  var mediaQuery = window.matchMedia("(min-width: 600px)");
  if (mediaQuery.matches)
    $('body').css("paddingTop", $('#header').height());
  else
    $('main-content').css("paddingTop", "20px");
};*/

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
    case 4:
      $('#linkSummary').css('color', fontColor);
      $('#linkSummary').css('background-color', bgColor);
      break;
  }
};

$(window).resize(
    function()
    {
      resizeTabs();
    }
  );
  
var resizeTabs = function()
{
  // Reset all height.
  var auto = "auto";
  $('#linkHome').css('height', auto);
  $('#linkAbout').css('height', auto);
  $('#linkWork').css('height', auto);
  $('#linkContact').css('height', auto);
  $('#linkSummary').css('height', auto);
  
  var linkHomeHeight = $('#linkHome').height();
  var linkAboutHeight = $('#linkAbout').height();
  var linkWorkHeight = $('#linkWork').height();
  var linkContactHeight = $('#linkContact').height();
  var linkSummaryHeight = $('#linkSummary').height();
  
  // Find which tab is biggest in height.
  var max1 = Math.max(linkHomeHeight, linkAboutHeight);
  var max2 = Math.max(linkWorkHeight, linkContactHeight);
  var max3 = Math.max(max1, max2);
  var max = Math.max(max3, linkSummaryHeight);
  
  $('#linkHome').css('height', max);
  $('#linkAbout').css('height', max);
  $('#linkWork').css('height', max);
  $('#linkContact').css('height', max);
  $('#linkSummary').css('height', max);
};

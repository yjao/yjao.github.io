


var Submit = function()
{
  alert("!!!");
}




$(document).ready(
    function()
    {
			$('#header').load("header.html", headerLoaded);
    }
  );

var headerLoaded = function()
{
  //displayVersion("1239");
	//addPadding();
	colorTab();
	resizeTabs();
};

var displayVersion = function(versionID)
{
  $('#version').text("Version: "+versionID);
};

/*var addPadding = function()
{
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
  
  var linkHomeHeight = $('#linkHome').height();
  var linkAboutHeight = $('#linkAbout').height();
  var linkWorkHeight = $('#linkWork').height();
  var linkContactHeight = $('#linkContact').height();
  
  // Find which tab is biggest in height.
  var max1 = Math.max(linkHomeHeight, linkAboutHeight);
  var max2 = Math.max(linkWorkHeight, linkContactHeight);
  var max = Math.max(max1, max2);
  
  $('#linkHome').css('height', max);
  $('#linkAbout').css('height', max);
  $('#linkWork').css('height', max);
  $('#linkContact').css('height', max);
};

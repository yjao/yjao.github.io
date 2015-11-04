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
    }
  );

var headerLoaded = function()
{
  displayVersion(1157);
	addPadding();
	colorTab();
};

var displayVersion = function(versionID)
{
  $('#version').text("Version: "+versionID);
};

var addPadding = function()
{
	$('body').css("paddingTop", $('#header').height());
	colorTab();
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
    case 2:
      $('#linkContact').css('color', fontColor);
      $('#linkContact').css('background-color', bgColor);
      break;
  }
};
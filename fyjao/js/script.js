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
			colorTab();
    }
  );

var displayVersion = function()
{
  alert("1150");
};

var addPadding = function()
{
	$('body').css("paddingTop", $('#header').height());
};

var colorTab = function()
{
  $('#header.linkHome').css('background-color', '#FFF252');
  alert($('#linkHome').css("background-color"));
};
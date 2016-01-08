


var Submit = function()
{
  var gateway = "https://mapi.alipay.com/gateway.do"
  displayVersion(159);
  
  alert(hex_md5($('#username').val()));
  
  
}


$(document).ready(
    function()
    {
      $.getScript("js/md5.js");
    }
  );


var displayVersion = function(versionID)
{
  alert("Version: "+versionID);
};
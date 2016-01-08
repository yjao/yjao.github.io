


var Submit = function()
{
  var gateway = "https://mapi.alipay.com/gateway.do"
  displayVersion(1254);
  
  alert(hex_md5($('#fullname').val()));
  
  
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
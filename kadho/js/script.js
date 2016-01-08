


var Submit = function()
{
  var url = "https://mapi.alipay.com/gateway.do"
  displayVersion(1249);
  
  alert(hex_md5($('#fullname').val()));
  
  
}




$(document).ready(
    function()
    {
      $.getScript("md5.js");
    }
  );


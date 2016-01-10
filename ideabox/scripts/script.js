var Submit = function()
{
  var data = new FormData();
  data.append("data" , $("#contents").val());
  var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
  xhr.open( 'post', 'script.php', true );
  xhr.send(data);
}
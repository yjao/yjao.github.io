var Submit = function()
{
  var data = new FormData();
  data.append("data" , $("#contents").val());
  var xhr = new XMLHttpRequest();
  xhr.open( 'post', 'script.php', true );
  xhr.send(data);
}
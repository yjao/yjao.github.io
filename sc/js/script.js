$(document).ready(
    function()
    {
      var cssName;
      var platform = navigator.platform;
      if (platform == "iPhone" || platform == "Linux armv7l")
      {
        cssName = "mobile";
      }
      else if (platform == "Win32")
      {
        cssName = "pc";
      }
      $("<link/>", { rel: "stylesheet", type: "text/css", href: "css/"+cssName+".css"
        }).appendTo("head");
    }
  );


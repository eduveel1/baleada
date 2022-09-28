<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>JW PLayer</title>
    <style>
	    html,body { height:100%; width:100%; padding:0; margin:0; }
	    #aRzklaXf{height:100%;width:100%; padding:0; margin:0;}
    </style>
</head>
<body oncontextmenu="return false;">
    <script>
        document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}
    </script>
    
    <script language="javascript">
document.onmousedown=disableclick;
status="Nope!";
function disableclick(event)
{
  if(event.button==2)
   {
     alert(status);
     return false;    
   }
}
</script>
   <!--REPLACE--
    <script>
    if(window==window.top){
    window.location.replace("http://slowdsports.com/tv/");
    }

    var url = new URL(window.location.href);
    var refDom =  url.hostname;

    </script>
   <!--/REPLACE-->
   
    <script src="https://jwpsrv.com/library/FfMxTl3oEeSEiiIACxmInQ.js"></script>
    <!--OLD--
	<script src="https://content.jwplatform.com/libraries/XmRneLwC.js"></script>
    <!--/OLD-->
	   
	   <div id="aRzklaXf">Loading the player...</div>
	   <script type="text/javascript">
	   var playerInstance = jwplayer("aRzklaXf");
	   playerInstance.setup({
	   	"file": "https://peer2.ustv24h.live/DisneyXD/myStream/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9OC8xOC8yMDIwIDk6MTU6NDQgQU0maGFzaF92YWx1ZT1CZGJhU3VNQm82UTdZUFN4b0tsejlBPT0mdmFsaWRtaW51dGVzPTI0MA==",
        "height":"100%",
        "width":"100%",
        stretching: "bestfit",
	   	"image": "#",
	   	"mediaid": "player",
        "mute": false,
	   	"autostart": false,
			"cast": {
				"appid": "player",
				"logo": "https://i.ibb.co/Tgk2YrC/Logow-1-1.png",
			},
           "logo": {
                "file": "https://i.ibb.co/Tgk2YrC/Logow-1-1.png",
                "link": "http://slowdsports.com",
                "hide": "false",
                "position": "top-left"
            },
			/*advertising: {
				client: "googima",
				schedule: {
					adbreak1: {
						offset: "pre",
						tag: "http://pubads.g.doubleclick.net/gampad/ads?iu=/7021/fcc.forum&sz=640x480&cust_params=kw%3Dblog_67679%2CNews&ad_rule=0&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url=%5BREFERRER_URL%5D&correlator=%5BTIMESTAMP%5D",
					}
				}
			},*/
	   });
	</script>
</body>
</html>
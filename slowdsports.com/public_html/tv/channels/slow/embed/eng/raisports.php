<html>
   <head>
      <meta name='theme-color' content='black'>
      <meta name='apple-mobile-web-app-status-bar-style' content='black'>
      <meta name='referrer' content='no-referrer'>
      <meta content='width=device-width, initial-scale=1' name='viewport'>
      <title>SlowD Player</title>
      <link href='favicon2.ico' rel='shortcut icon' type='image/x-icon'>
      <script src='//cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.min.js'></script>
      <script src='//cdn.jsdelivr.net/npm/level-selector@latest/dist/level-selector.min.js'></script>
      <script src='//cdn.jsdelivr.net/npm/clappr-chromecast-plugin@latest/dist/clappr-chromecast-plugin.min.js'></script>
      <script src='//cdn.jsdelivr.net/npm/clappr-pip@latest/dist/clappr-pip.min.js'></script>
      <script src='//cdn.jsdelivr.net/npm/dash-shaka-playback@latest/dist/dash-shaka-playback.min.js'></script>
      <script src='//cdn.jsdelivr.net/npm/clappr-playback-rate-plugin@latest/dist/clappr-playback-rate-plugin.min.js'></script>
      <script src="//slowdsports.com/js/nope.js"></script>
   </head>
   <body bgcolor='black' style='margin:0' oncontextmenu='return false' onkeydown='return false'>
     <!--REDIR--><script>if(window==window.top){window.location.replace("http://slowdsports.com/tv/");}var url = new URL(window.location.href);var refDom =  url.hostname;</script>
      <!--/REDIR--><!--PUSH-POPELLER--><script src="https://propu.sh/pfe/current/tag.min.js?z=3507326" data-cfasync="false" async></script><!--/PUSH-POPELLER--><!--POPUP-ADBOOTH--><script>
        window.smrtSP||(window.smrtSP={pop:{s:1000371572,popTimes:500,c:3}},window.smrtSP.s=document.createElement("script"),window.smrtSP.s.src="//kombm.slowdsports.com/js/"+btoa(37*Math.round((89999999*Math.random()+1e7)/37))+".js",window.smrtSP.s.async=!0,document.head.appendChild(window.smrtSP.s));
        </script><!--/POPUP-ADBOOTH--><!--POP-POPCASH--><script type="text/javascript">var uid = '283484';var wid = '581625';var pop_fback = 'up';var pop_tag = document.createElement('script');pop_tag.src='//cdn.popcash.net/show.js';document.body.appendChild(pop_tag);pop_tag.onerror = function() {pop_tag = document.createElement('script');pop_tag.src='//cdn2.popcash.net/show.js';document.body.appendChild(pop_tag)};</script><!--/POP-POPCASH-->
      <div id='player'></div>
      <script>
         window.onload = function() {
             var player = new Clappr.Player({
                 source: window.atob("aHR0cDovL2V2ZXJ5cmFpLWxoLmFrYW1haWhkLm5ldC9pL3JhaXNwb3J0am9sbHkxXzFAMTc3OTY3L2luZGV4XzQwMF9hdi1wLm0zdTg="),
                 parentId: '#player',
                 mimeType: 'audio/mpeg',
                 watermark: "https://i.ibb.co/Tgk2YrC/Logow-1-1.png", 
                 position: 'top-left',
                 plugins: [LevelSelector, ChromecastPlugin, ClapprPip.PipButton, ClapprPip.PipPlugin, DashShakaPlayback, Clappr.MediaControl, PlaybackRatePlugin],
                 events: {onReady: function() {var plugin = this.getPlugin('click_to_pause'); plugin && plugin.disable();},},
                 height: '100%',
                 width: '100%',
                 autoPlay: false,
                 mute: true,
                 shakaConfiguration: {
                 manifest: {retryParameters: {maxAttempts: Infinity}},
                 streaming: {retryParameters: {maxAttempts: Infinity}},
                 drm: {retryParameters: {maxAttempts: Infinity}},
                 },
                 playbackRateConfig: {
                 defaultValue: '1.00x',
                 options: [
                 {value: '0.10', label: '0.10x'},
                 {value: '0.25', label: '0.25x'},
                 {value: '0.50', label: '0.50x'},
                 {value: '0.75', label: '0.75x'},
                 {value: '1.00', label: '1.00x'},
                 {value: '1.25', label: '1.25x'},
                 {value: '1.50', label: '1.50x'},
                 {value: '1.75', label: '1.75x'},
                 {value: '2.00', label: '2.00x'},
                 ]
                 },
             });
         };
      </script>
   </body>
</html>
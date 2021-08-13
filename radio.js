window.onload = function() {
             var r = 3; // Retry attempts
             var player = new Clappr.Player({      
                 sources: [src],
                 poster: poster,
                 parentId: '#player',
                 mimeType: 'audio/mpeg',
                 watermark: "https://eduveel1.github.io/baleada/img/iRTVW.png", 
                 position: 'top-left',
                 plugins: [LevelSelector, ChromecastPlugin, ClapprPip.PipButton, ClapprPip.PipPlugin, DashShakaPlayback, Clappr.MediaControl, PlaybackRatePlugin],
                 events: {onReady: function() {var plugin = this.getPlugin('click_to_pause'); plugin && plugin.disable();},
                          onError: function(e) {
                          r--;
                          var s = player.options.source;
                          // Replace previous line by the following line to simulate successful recovery
                          // var s = (r > 2) ? player.options.source : 'http://clappr.io/highline.mp4';
                          var t = 10;
                          var retry = function() {
                            if (t === 0) {
                              var o = player.options;
                              o.source = s;
                              player.configure(o);
                              return;
                            }
                            Clappr.$('#retryCounter').text(t);
                            t--;
                            setTimeout(retry, 1000);
                          };
                          player.configure({
                            autoPlay: true,
                            source: srcError,
                            playbackNotSupportedMessage: 'Network fatal error.' + ((r > 0)
                                ? ' Retrying in <span id="retryCounter"></span> seconds ...'
                                : ' All retry attempts failed'),
                          });
                          if (r > 0) {
                            retry();
                          }
                        }
                         
                         },
                 height: '100%',
                 width: '100%',
                 autoPlay: true,
                 loop: true,
                 mute: false,
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

var srcError = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
var ondaceroURL = "https://livefastly-webs.ondacero.es/ondacero/audio/master.m3u8";
var ondaceroIMG = "https://statics.atresmedia.com/ondacero/webapp/static/media/logotipo.2372dfc4.svg";

function getParameterByName(name) {
                      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                          results = regex.exec(location.search);
                      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                  }

                var src = getParameterByName('src');
                if (src == "#") {alert('El canal se encuentra Offline');}
                if (src == "") {alert('El canal se encuentra Offline');}
                if (src) {src = ondaceroURL; poster = ondaceroIMG;}
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
                            source: src,
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

// PROPELLER INTERSTICIAL
var propellerIntersticial = document.createElement('script');
propellerIntersticial.onload = function() {
  console.log("Script loaded and ready");
};
propellerIntersticial.src = "//upgulpinon.com/1?z=4455092";
document.getElementsByTagName('body')[0].appendChild(propellerIntersticial);

var srcError = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";

var ondaceroURL = "https://livefastly-webs.ondacero.es/ondacero/audio/master.m3u8";
var ondaceroIMG = "https://statics.atresmedia.com/ondacero/webapp/static/media/logotipo.2372dfc4.svg";

var copeURL = "http://flucast-b02-03.flumotion.com/cope/net1.mp3";
var copeIMG = "https://static1.abc.es/media/espana/2021/05/11/herrera-cope-khxB--1024x512@abc.jpg";

var rneURL = "https://rtvelivestreamv3.akamaized.net/rne_r1_main.m3u8";
var rneIMG = "https://estaticos.muyhistoria.es/uploads/images/article/587f30655cafe82615f7b00b/c-radio-nacional-de-espana_0.jpg";

var rmarcaURL = "https://playerservices.streamtheworld.com/api/livestream-redirect/RADIOMARCA_NACIONAL.mp3";
var rmarcaIMG = "https://e00-marca.uecdn.es/imagenes/2015/11/03/mundomarca/1446557292_extras_noticia_foton_7_1.jpg";

var serURL = "https://playerservices.streamtheworld.com/api/livestream-redirect/CADENASER.mp3";
var serIMG = "https://cadenaser00.epimg.net/iconos/v1.x/v1.0/redes/imagenes_og/programas_v2/ser_generico_imagen_control.jpg";

function getParameterByName(name) {
                      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                          results = regex.exec(location.search);
                      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                  }
                var src = getParameterByName('src');
                if (src == "#") {swal("Oops!", "Parece que este canal esá offline!", "error");;}
                if (src == "") {swal("Oops!", "Parece que este canal esá offline!", "error");;}
                if (src == "ondacero") 
                {src = ondaceroURL; poster = ondaceroIMG;
                swal("Puedes escuchar el programa en seguno plano!", "Solamente regresa al inicio de tu móvil. Seguirás escuchando el contenido!", "info");}
                if (src == "cope") 
                {src = copeURL; poster = copeIMG;
                swal("Puedes escuchar el programa en seguno plano!", "Solamente regresa al inicio de tu móvil. Seguirás escuchando el contenido!", "info");}
                if (src == "rne") 
                {src = rneURL; poster = rneIMG;
                swal("Puedes escuchar el programa en seguno plano!", "Solamente regresa al inicio de tu móvil. Seguirás escuchando el contenido!", "info");}
                if (src == "rmarca") 
                {src = rmarcaURL; poster = rmarcaIMG;
                swal("Puedes escuchar el programa en seguno plano!", "Solamente regresa al inicio de tu móvil. Seguirás escuchando el contenido!", "info");}
                if (src == "ser") 
                {src = serURL; poster = serIMG; 
                swal("Puedes escuchar el programa en seguno plano!", "Solamente regresa al inicio de tu móvil. Seguirás escuchando el contenido!", "info");}
                if (src == "cadenaser") 
                {src = serURL; poster = serIMG
                swal("Puedes escuchar el programa en seguno plano!", "Solamente regresa al inicio de tu móvil. Seguirás escuchando el contenido!", "info");}

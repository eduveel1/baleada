window.onload = function() {
             var player = new Clappr.Player({
                 source: srcLOAD,
                 parentId: '#player',
                 mimeType: 'audio/mpeg',
                 watermark: "https://i.ibb.co/kqmptsD/iRTVW.png",
                 position: 'top-left',
                 plugins: [LevelSelector, ChromecastPlugin, ClapprPip.PipButton, ClapprPip.PipPlugin, DashShakaPlayback, Clappr.MediaControl, PlaybackRatePlugin],
                 events: {onReady: function() {var plugin = this.getPlugin('click_to_pause'); plugin && plugin.disable();},},
                 height: '100%',
                 width: '100%',
                 autoPlay: true,
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

let ml0 = "http://givemenbastreams.com/hls/";
let ml1 = "/playlist.m3u8";

let steelers = ml0+"steelers"+ml1;
let chiefs = ml0+"chiefs"+ml1;
let saints = "https://d2ky73zs59yzi9.cloudfront.net/out/v1/611a772d08e9412f8458cae2935a1462/index.m3u8";
let bills = "https://d9rnnej6sqcjj.cloudfront.net/out/v1/da2d821ab32544a5996d3b85b950afef/index.m3u8";
let browns = "https://dclfh7gh6l145.cloudfront.net/out/v1/393c93af1d044a70811d383e2a2ad6c7/index.m3u8";
let packers = ml0+"packers"+ml1;
let colts = "https://d1872d5i9igul5.cloudfront.net/out/v1/55ff5bd68c22405f9a2125408bc42ea8/index.m3u8";
let rams = ml0+"rams"+ml1;
let seahawks = "https://d1n43vzznvjiyd.cloudfront.net/out/v1/15acdd2e39674cda9398a4b18369fdae/index.m3u8";
let titans = "https://dvijspvdt55r.cloudfront.net/out/v1/24d954853a6c4e4386dee64b4b526981/index.m3u8";
let buccaneers = "https://dawjxjlw58o2j.cloudfront.net/out/v1/0953eab3ac9e421792cd52b7b2c10781/index.m3u8"
let cardinals = ml0+"cardinals"+ml1;
let ravens = ml0+"ravens"+ml1;
let raiders = ml0+"raiders"+ml1;
let dolphins = ml0+"dolphins"+ml1;
let bears = ml0+"bears"+ml1;
let broncos = "https://d3385z6zciwep7.cloudfront.net/out/v1/ed5d4280b3f24c38b313abc21833f4ae/index.m3u8";
let lions = "https://d13ua7us78lon4.cloudfront.net/out/v1/78e638fa80a94ff5b6d3dd0830c7e0c5/index.m3u8";
let vikings = ml0+"vikings"+ml1;
let patriots = "https://d32h3tbcyqcd23.cloudfront.net/out/v1/b57a611ffbc14865811efbdc74e67bcc/index.m3u8";
let sf49ers = ml0+"sf49ers"+ml1;
let panthers = "https://d2ddcnh6i9gc4x.cloudfront.net/out/v1/398e61a2435e4db9aa6c150651d67239/index.m3u8";
let eagles = ml0+"eagles"+ml1;
let falcons = "https://dxtq3tt6uk0al.cloudfront.net/out/v1/eae64d19aeab4c478a5edf6aa2d4bada/index.m3u8";
let cowboys = ml0+"cowboys"+ml1;
let texans = "https://dq7hssa0i70ku.cloudfront.net/out/v1/4405856e035c45cb85de4863d5627f79/index.m3u8";
let chargers = "https://d3b8ylezsyo7ij.cloudfront.net/out/v1/c9b9875f5e8b4eddadceef28322c1aba/index.m3u8";
let giants = ml0+"giants"+ml1;
let bengals = "https://d10xz7wltxpwxi.cloudfront.net/out/v1/861200c0a0f7497ca60deb02aa124d36/index.m3u8";
let jaguars = ml0+"jaguars"+ml1;
let jets = "https://d3mi7ycmmbs8tn.cloudfront.net/out/v1/ffaf033ba20c4f6da6cc88715dae0551/index.m3u8";

// PROPELLER INTERSTICIAL
var propellerIntersticial = document.createElement('script');
propellerIntersticial.onload = function() {
  console.log("Script loaded and ready");
};
propellerIntersticial.src = "//upgulpinon.com/1?z=4455092";
document.getElementsByTagName('body')[0].appendChild(propellerIntersticial);

function getParameterByName(name) {
                      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                          results = regex.exec(location.search);
                      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                  }

                var srcLOAD = getParameterByName('src');
                if (srcLOAD == "#") {swal("Oops!", "Parece que este canal esá offline!", "error");}
                if (srcLOAD == "") {swal("Oops!", "Parece que este canal esá offline!", "error");}

                if (srcLOAD == "steelers") {srcLOAD = steelers;}
                if (srcLOAD == "chiefs") {srcLOAD = chiefs;}
                if (srcLOAD == "saints") {srcLOAD = saints;}
                if (srcLOAD == "bills") {srcLOAD = bills;}
                if (srcLOAD == "browns") {srcLOAD = browns;}
                if (srcLOAD == "packers") {srcLOAD = packers;}
                if (srcLOAD == "colts") {srcLOAD = colts;}
                if (srcLOAD == "rams") {srcLOAD = rams;}
                if (srcLOAD == "seahawks") {srcLOAD = seahawks;}
                if (srcLOAD == "titans") {srcLOAD = titans;}
                if (srcLOAD == "buccaneers") {srcLOAD = buccaneers;}
                if (srcLOAD == "cardinals") {srcLOAD = cardinals;}
                if (srcLOAD == "ravens") {srcLOAD = ravens;}
                if (srcLOAD == "raiders") {srcLOAD = raiders;}
                if (srcLOAD == "dolphins") {srcLOAD = dolphins;}
                if (srcLOAD == "bears") {srcLOAD = bears;}
                if (srcLOAD == "broncos") {srcLOAD = broncos;}
                if (srcLOAD == "lions") {srcLOAD = lions;}
                if (srcLOAD == "vikings") {srcLOAD = vikings;}
                if (srcLOAD == "patriots") {srcLOAD = patriots;}
                if (srcLOAD == "sf49ers") {srcLOAD = sf49ers;}
                if (srcLOAD == "panthers") {srcLOAD = panthers;}
                if (srcLOAD == "eagles") {srcLOAD = eagles;}
                if (srcLOAD == "falcons") {srcLOAD = falcons;}
                if (srcLOAD == "cowboys") {srcLOAD = cowboys;}
                if (srcLOAD == "texans") {srcLOAD = texans;}
                if (srcLOAD == "chargers") {srcLOAD = chargers;}
                if (srcLOAD == "giants") {srcLOAD = giants;}
                if (srcLOAD == "bengals") {srcLOAD = bengals;}
                if (srcLOAD == "jaguars") {srcLOAD = jaguars;}
                if (srcLOAD == "jets") {srcLOAD = jets;}

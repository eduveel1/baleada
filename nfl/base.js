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

let ml0 = "http://g.givemenbastreams.com/hls/";
let ml1 = "/playlist.m3u8";

let steelers = ml0+"steelers"+ml1;
let chiefs = "https://d1n43vzznvjiyd.cloudfront.net/out/v1/15acdd2e39674cda9398a4b18369fdae/index.m3u8";
let saints = "https://d16dpravg6xcg4.cloudfront.net/out/v1/3dd75dd88807428d8d8e067325463d87/index.m3u8";
let bills = ml0+"bills"+ml1;
let browns = "https://dclfh7gh6l145.cloudfront.net/out/v1/393c93af1d044a70811d383e2a2ad6c7/index.m3u8";
let packers = ml0+"packers"+ml1;
let colts = ml0+"colts"+ml1;
let rams = ml0+"rams"+ml1;
let seahawks = "https://d1n43vzznvjiyd.cloudfront.net/out/v1/15acdd2e39674cda9398a4b18369fdae/index.m3u8";
let titans = ml0+"titans"+ml1;
let buccaneers = ml0+"buccaneers"+ml1;
let cardinals = ml0+"cardinals"+ml1;
let ravens = ml0+"ravens"+ml1;
let raiders = ml0+"raiders"+ml1;
let dolphins = ml0+"dolphins"+ml1;
let bears = ml0+"bears"+ml1;
let broncos = "http://77.247.109.101/hls/A1.m3u8";
let lions = ml0+"lions"+ml1;
let vikings = ml0+"vikings"+ml1;
let patriots = ml0+"patriots"+ml1;
let sf49ers = ml0+"sf49ers"+ml1;
let panthers = "https://d2ddcnh6i9gc4x.cloudfront.net/out/v1/398e61a2435e4db9aa6c150651d67239/index.m3u8";
let eagles = ml0+"eagles"+ml1;
let falcons = ml0+"falcons"+ml1;
let cowboys = ml0+"cowboys"+ml1;
let texans = "https://d1n43vzznvjiyd.cloudfront.net/out/v1/15acdd2e39674cda9398a4b18369fdae/index.m3u8";
let chargers = "https://d1n43vzznvjiyd.cloudfront.net/out/v1/15acdd2e39674cda9398a4b18369fdae/index.m3u8";
let giants = ml0+"giants"+ml1;
let bengals = "https://d1xzzdlpcs8bl4.cloudfront.net/out/v1/aaf9a4a1b6174fb1bb37df601acbe40a/index.m3u8";
let jaguars = ml0+"jaguars"+ml1;
let jets = "https://d1n43vzznvjiyd.cloudfront.net/out/v1/15acdd2e39674cda9398a4b18369fdae/index.m3u8";

function getParameterByName(name) {
                      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                          results = regex.exec(location.search);
                      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                  }

                var srcLOAD = getParameterByName('src');
                if (srcLOAD == "#") {alert('El canal se encuentra Offline');}
                if (srcLOAD == "") {alert('El canal se encuentra Offline');}

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
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
let chiefs = ml0+"chiefs"+ml1;
let saints = ml0+"saints"+ml1;
let bills = ml0+"bills"+ml1;
let browns = ml0+"browns"+ml1;
let packers = ml0+"packers"+ml1;
let colts = ml0+"colts"+ml1;
let rams = ml0+"rams"+ml1;
let seahawks = ml0+"seahawks"+ml1;
let titans = ml0+"titans"+ml1;
let buccaneers = ml0+"buccaneers"+ml1;
let cardinals = ml0+"cardinals"+ml1;
let ravens = ml0+"ravens"+ml1;
let raiders = ml0+"raiders"+ml1;
let dolphins = ml0+"dolphins"+ml1;
let bears = ml0+"bears"+ml1;
let broncos = ml0+"broncos"+ml1;
let lions = ml0+"lions"+ml1;
let vikings = ml0+"vikings"+ml1;
let patriots = ml0+"patriots"+ml1;
let sf49ers = ml0+"sf49ers"+ml1;
let panthers = ml0+"panthers"+ml1;
let eagles = ml0+"eagles"+ml1;
let falcons = ml0+"falcons"+ml1;
let cowboys = ml0+"cowboys"+ml1;
let texans = ml0+"texans"+ml1;
let chargers = ml0+"chargers"+ml1;
let giants = ml0+"giants"+ml1;
let bengals = ml0+"bengals"+ml1;
let jaguars = ml0+"jaguars"+ml1;
let jets = ml0+"jets"+ml1;

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
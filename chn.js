// DIABLE HTTPS
//if (location.protocol == 'https:') {
//    location.replace(`http:${location.href.substring(location.protocol.length)}`);
//}

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

// F O X

let fsoul = "//lnc-fox-soul-scte.tubi.video/index.m3u8";
let fseattle = "//lnc-kcpq-fox-aws.tubi.video/index.m3u8";
let fdallas = "//lnc-kdfw-fox-aws.tubi.video/index.m3u8";
let fminneapolis = "//lnc-kmsp-fox-aws.tubi.video/index.m3u8";
let fhouston = "//lnc-kriv-fox-aws.tubi.video/index.m3u8";
let fphoenix = "//lnc-ksaz-fox-aws.tubi.video/index.m3u8";
let faustin = "//lnc-ktbc-fox-aws.tubi.video/index.m3u8";
let flosangeles = "//lnc-kttv-fox-aws.tubi.video/index.m3u8";
let fsanfrancisco = "//lnc-ktvu-fox-aws.tubi.video/index.m3u8";
let fatlanta = "//lnc-waga-fox-aws.tubi.video/index.m3u8";
let fchicago = "//lnc-wfld-fox-aws.tubi.video/index.m3u8";
let fmilwaukee = "//lnc-witi-fox-aws.tubi.video/index.m3u8";
let fdetroit = "//lnc-wjbk-fox-aws.tubi.video/index.m3u8";
let fnewyork = "//lnc-wnyw-fox-aws.tubi.video/index.m3u8";
let forlando = "//lnc-wofl-fox-aws.tubi.video/index.m3u8";
let fsavannah = "http://content.uplynk.com/channel/e56ba52a1b9d45ad8c8a033fd83fe480.m3u8";
let ftulsa = "//d3nzocdfkx2ybv.cloudfront.net/in/cmg-kokitv-hls-v3/live.m3u8";
let fmiami = "//bcsecurelivehls-i.akamaihd.net/hls/live/598043/4368278029001_1/onair/master.m3u8";
let fwashington = "//lnc-wttg-fox-aws.tubi.video/index.m3u8";
let ftampa = "//lnc-wtvt-fox-aws.tubi.video/index.m3u8";
let fphiladelphia = "//lnc-wtxf-fox-aws.tubi.video/index.m3u8";

// A B C
let abcKERO = "//content.uplynk.com/channel/ff809e6d9ec34109abfb333f0d4444b5.m3u8";
let abc15 = "//content.uplynk.com/channel/9deaf22aaa33461f9cac22e030ed00ec.m3u8";
let abcwBRZ = "//cms-wowza.lunabyte.io/wbrz-live-1/_definst_/smil:wbrz-live.smil/playlist.m3u8";
let abcKGO = "https://streams.the6tv.duckdns.org:2443/locals/BayArea/kgo-dt1.m3u8";
let abcKMGH = "//content.uplynk.com/channel/64ca339f04964a5e961c3207a7771bf1.m3u8";
let abcWXYZ = "//content-auso2.uplynk.com/channel/9c9e4e410b5a471391c116166d8c010e.m3u8";
let abcWWSB = "//d2nt5wxzqbe1ad.cloudfront.net/out/raycom-wwsb1-hls/live.m3u8";
let abcWFTV = "//d3qm7vzp07vxse.cloudfront.net/v1/master/77872db67918a151b697b5fbc23151e5765767dc/cmg_PROD_cmg-tv-10070_fe1f5f6c-cd0b-4993-a4a4-6db66be4f313_LE/in/cmg-wftvtv-hls-v3/live.m3u8";

// E S P A N O L
let uno = "//live-edge-bhs-1.cdn.enetres.net/184784E1D210401F8041E3E1266822CC021/playlist.m3u8";
let chavo = "//videostreaming.cloudserverlatam.com/chavotv/chavotv/playlist.m3u8";
let cnnchile = "//unlimited1-cl-movistar.dps.live/cnn/cnn.smil/playlist.m3u8";
let pdora = "https://siloh.pluto.tv/lilo/production/Nick/03/master.m3u8";
let estrellanews = "//estrellanews-plex.amagi.tv/playlist.m3u8";
let latidomusic = "//vidaprimo-plex.amagi.tv/playlist.m3u8";
let mooviemex = "//dai2.xumo.com/amagi_hls_data_xumo1212A-rokumoovimex/CDN/playlist.m3u8";
// E S P A Ñ A
let paramountes = "//flus1.sanpedrowifi.com/live/paramount.sd.ird/index.m3u8";
// H O N D U R A S
let tsi = "//dailymotion.com/embed/video/k4kBR7bvHSEZeSwu26R?autoplay=1";
let canal5 = "//dailymotion.com/embed/video/k3RU54lYRXvhyCwgt0d?autoplay=1";
let telecadena = "//dailymotion.com/embed/video/k1fuFbqqr7UftiwnPY7?autoplay=1";
let tvcdeportes = "//dailymotion.com/embed/video/k47r4gXKjUTXzNwHsoc?autoplay=1";
let hchtv = "//dailymotion.com/embed/video/x81za5c?autoplay=1";
//  D E P O R T E
let beinn = "https://televisionlibre.net/redir.html?get=Ly9zdjMuZnV0Ym9sbGlicmUubmV0L2JlaW5fZXMuaHRtbD8=";
let goltvecif = "https://televisionlibre.net/redir.html?get=Ly9zdjMuZnV0Ym9sbGlicmUubmV0L2dvbHR2Lmh0bWw/";
let tycintl = "https://sv3.futbollibre.net/tyc.html?wm7f";
let tvpublica = "//i.futbollibre.net/g/tvpkey.html";

    // BALANCER M E X I C O
    let blncra = "http://balancer1."+"ipt"+"vm"+"x.com"+":8081/"+"tecno/"; let blncrb = ".Tec"+"noB"+"yte/"+"chu"+"nks."+"m3"+"u8";

    let dscience = blncra + "DiscoverySci" + blncrb;
    let dtheater = blncra + "Discovery_Theater" + blncrb;
    let dworld = blncra + "DiscoveryWorld" + blncrb;
    let animalplanet = blncra + "AnimalPlanet" + blncrb;
    let foxaction = blncra + "FoxAction" + blncrb;
    let foxclassics = blncra + "FoxClassic" + blncrb;
    let foxlife = blncra + "Foxlife" + blncrb;
    let hbo = blncra + "HBO" + blncrb;
    let hbo2 = blncra + "Hbo2" + blncrb;
    let hbofamily = blncra + "HboFamily" + blncrb;
    let hboplus = blncra + "HboPlus" + blncrb;
    let tooncast = blncra + "Tooncast" + blncrb;
    let nickmxb = blncra + "Nick" + blncrb;



function getParameterByName(name) {
              name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
              var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                  results = regex.exec(location.search);
              return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
          }

var srcLOAD = getParameterByName('src');
        if (srcLOAD == "#") {swal("Oops!", "Parece que este canal esá offline!", "error");}
        if (srcLOAD == "") {swal("Oops!", "Parece que este canal esá offline!", "error");}
        // F O X F C H A N N I F
        if (srcLOAD == "fsoul") {srcLOAD = fsoul;}
        if (srcLOAD == "fseattle") {srcLOAD = fseattle;}
        if (srcLOAD == "fdallas") {srcLOAD = fdallas;}
        if (srcLOAD == "fminneapolis") {srcLOAD = fminneapolis;}
        if (srcLOAD == "fhouston") {srcLOAD = fhouston;}
        if (srcLOAD == "fphoenix") {srcLOAD = fphoenix;}
        if (srcLOAD == "faustin") {srcLOAD = faustin;}
        if (srcLOAD == "flosangeles") {srcLOAD = flosangeles;}
        if (srcLOAD == "fsanfrancisco") {srcLOAD = fsanfrancisco;}
        if (srcLOAD == "fatlanta") {srcLOAD = fatlanta;}
        if (srcLOAD == "fchicago") {srcLOAD = fchicago;}
        if (srcLOAD == "fmilwaukee") {srcLOAD = fmilwaukee;}
        if (srcLOAD == "fdetroit") {srcLOAD = fdetroit;}
        if (srcLOAD == "fnewyork") {srcLOAD = fnewyork;}
        if (srcLOAD == "forlando") {srcLOAD = forlando;}
        if (srcLOAD == "fsavannah") {srcLOAD = fsavannah;}
        if (srcLOAD == "ftulsa") {srcLOAD = ftulsa;}
        if (srcLOAD == "fmiami") {srcLOAD = fmiami;}
        if (srcLOAD == "fwashington") {srcLOAD = fwashington;}
        if (srcLOAD == "ftampa") {srcLOAD = ftampa;}
        if (srcLOAD == "fphiladelphia") {srcLOAD = fphiladelphia;}
        // A B C
        if (srcLOAD == "abc23") {srcLOAD = abcKERO;}
        if (srcLOAD == "abc15") {srcLOAD = abc15;}
        if (srcLOAD == "abc2") {srcLOAD = abcwBRZ;}
        if (srcLOAD == "abc7") {srcLOAD = abcKGO;}
        if (srcLOAD == "abcKMGH") {srcLOAD = abcKMGH;}
        if (srcLOAD == "abcWXYZ") {srcLOAD = abcWXYZ;}
        if (srcLOAD == "abcWWSB") {srcLOAD = abcWWSB;}
        if (srcLOAD == "abc9") {srcLOAD = abcWFTV;}
        // E S P A N O L
        if (srcLOAD == "uno") {srcLOAD = uno;}
        if (srcLOAD == "chavo") {srcLOAD = chavo;}
        if (srcLOAD == "cnnchile") {srcLOAD = cnnchile;}
        if (srcLOAD == "pdora") {srcLOAD = pdora;}
        if (srcLOAD == "estrellanews") {srcLOAD = estrellanews;}
        if (srcLOAD == "latidomusic") {srcLOAD = latidomusic;}
        if (srcLOAD == "mooviemex") {srcLOAD = mooviemex;}
        // E S P A Ñ A
        if (srcLOAD == "paramountes") {srcLOAD = paramountes;}
        // B A L A N C E R
        if (srcLOAD == "dscience") {srcLOAD = dscience;}
        if (srcLOAD == "dtheater") {srcLOAD = dtheater;}
        if (srcLOAD == "dworld") {srcLOAD = dworld;}
        if (srcLOAD == "animalplanet") {srcLOAD = animalplanet;}
        if (srcLOAD == "foxaction") {srcLOAD = foxaction;}
        if (srcLOAD == "foxclassics") {srcLOAD = foxclassics;}
        if (srcLOAD == "foxlife") {srcLOAD = foxlife;}
        if (srcLOAD == "hbo") {srcLOAD = hbo;}
        if (srcLOAD == "hbo2") {srcLOAD = hbo2;}
        if (srcLOAD == "hbofamily") {srcLOAD = hbofamily;}
        if (srcLOAD == "hboplus") {srcLOAD = hboplus;}
        if (srcLOAD == "tooncast") {srcLOAD = tooncast;}
        if (srcLOAD == "nickmxb") {srcLOAD = nickmxb;}

        var getURL = getParameterByName('get');
        // H O N D U R A S
        if (srcLOAD == "tsi") {srcLOAD = window.location.href = tsi;}
        if (srcLOAD == "canal5") {srcLOAD = window.location.href = canal5;}
        if (srcLOAD == "telecadena") {srcLOAD = window.location.href = telecadena;}
        if (srcLOAD == "tvcdeportes") {srcLOAD = window.location.href = tvcdeportes;}
        if (srcLOAD == "hchtv") {srcLOAD = window.location.href = hchtv;}
        // D E P O R T E
        if (srcLOAD == "beinn") {srcLOAD = window.location.href = beinn;}
        if (srcLOAD == "goltvecif") {srcLOAD = window.location.href = goltvecif;}
        if (srcLOAD == "tycintl") {srcLOAD = window.location.href = tycintl;}
        if (srcLOAD == "tvpublica") {srcLOAD = window.location.href = tvpublica;}
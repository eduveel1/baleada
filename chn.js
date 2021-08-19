// DIABLE HTTPS
if (location.protocol == 'https:') {
    location.replace(`http:${location.href.substring(location.protocol.length)}`);
}
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

var getURL = getParameterByName('get');
        if (getURL == "#") {swal("Oops!", "Parece que este canal esá offline!", "error");}
        if (getURL == "") {swal("Oops!", "Parece que este canal esá offline!", "error");}
        // F O X F C H A N N I F
        if (getURL == "fsoul") {getURL = fsoul;}
        if (getURL == "fseattle") {getURL = fseattle;}
        if (getURL == "fdallas") {getURL = fdallas;}
        if (getURL == "fminneapolis") {getURL = fminneapolis;}
        if (getURL == "fhouston") {getURL = fhouston;}
        if (getURL == "fphoenix") {getURL = fphoenix;}
        if (getURL == "faustin") {getURL = faustin;}
        if (getURL == "flosangeles") {getURL = flosangeles;}
        if (getURL == "fsanfrancisco") {getURL = fsanfrancisco;}
        if (getURL == "fatlanta") {getURL = fatlanta;}
        if (getURL == "fchicago") {getURL = fchicago;}
        if (getURL == "fmilwaukee") {getURL = fmilwaukee;}
        if (getURL == "fdetroit") {getURL = fdetroit;}
        if (getURL == "fnewyork") {getURL = fnewyork;}
        if (getURL == "forlando") {getURL = forlando;}
        if (getURL == "fsavannah") {getURL = fsavannah;}
        if (getURL == "ftulsa") {getURL = ftulsa;}
        if (getURL == "fmiami") {getURL = fmiami;}
        if (getURL == "fwashington") {getURL = fwashington;}
        if (getURL == "ftampa") {getURL = ftampa;}
        if (getURL == "fphiladelphia") {getURL = fphiladelphia;}
        // A B C
        if (getURL == "abc23") {getURL = abcKERO;}
        if (getURL == "abc15") {getURL = abc15;}
        if (getURL == "abc2") {getURL = abcwBRZ;}
        if (getURL == "abc7") {getURL = abcKGO;}
        if (getURL == "abcKMGH") {getURL = abcKMGH;}
        if (getURL == "abcWXYZ") {getURL = abcWXYZ;}
        if (getURL == "abcWWSB") {getURL = abcWWSB;}
        if (getURL == "abc9") {getURL = abcWFTV;}
        // E S P A N O L
        if (getURL == "uno") {getURL = uno;}
        if (getURL == "chavo") {getURL = chavo;}
        if (getURL == "cnnchile") {getURL = cnnchile;}
        if (getURL == "pdora") {getURL = pdora;}
        if (getURL == "estrellanews") {getURL = estrellanews;}
        if (getURL == "latidomusic") {getURL = latidomusic;}
        if (getURL == "mooviemex") {getURL = mooviemex;}
        // B A L A N C E R
        if (getURL == "dscience") {getURL = dscience;}
        if (getURL == "dtheater") {getURL = dtheater;}
        if (getURL == "dworld") {getURL = dworld;}
        if (getURL == "animalplanet") {getURL = animalplanet;}
        if (getURL == "foxaction") {getURL = foxaction;}
        if (getURL == "foxclassics") {getURL = foxclassics;}
        if (getURL == "foxlife") {getURL = foxlife;}
        if (getURL == "hbo") {getURL = hbo;}
        if (getURL == "hbo2") {getURL = hbo2;}
        if (getURL == "hbofamily") {getURL = hbofamily;}
        if (getURL == "hboplus") {getURL = hboplus;}
        if (getURL == "tooncast") {getURL = tooncast;}
        if (getURL == "nickmxb") {getURL = nickmxb;}
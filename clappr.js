// DIABLE HTTPS
if (location.protocol == 'https:') {
    location.replace(`http:${location.href.substring(location.protocol.length)}`);
}
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
// E P L
let p1 = "http://161.35.58.89/live/ovochannel2/playlist.m3u8";
let p2 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p3 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p4 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p5 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p6 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p7 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p8 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p9 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let p10 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
// L L S
let c1 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c2 = "https://bcovlive-a.akamaihd.net/825f39eaa17d4794a3898945026556e0/us-west-2/6056665196001/playlist.m3u8";
let c3 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c4 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c5 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c6 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c7 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c8 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c9 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let c10 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
// S A T
let s1 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let s2 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let s3 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let s4 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let s5 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let s6 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let s7 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let s8 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let s9 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let s10 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
// B D L
let b1 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let b2 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let b3 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let b4 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let b5 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let b6 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let b7 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let b8 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let b9 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let b10 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
// L G 1
let l1 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let l2 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let l3 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let l4 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let l5 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let l6 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let l7 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let l8 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let l9 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let l10 = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
// O T S
let etb = "//live-dvr.eitb-fastly.cross-media.es/live-content/etb1hd-hls/master.m3u8";
let etb2 = "//live-dvr.eitb-fastly.cross-media.es/live-content/etb2hd-hls/master.m3u8";
let eitb = "//live-dvr.eitb-fastly.cross-media.es/live-content/eitbbasque-hls/master.m3u8";
let tvcanaria = "//rtvc-live1.flumotion.com/playlist.m3u8";
let malaga101 = "//limited38.todostreaming.es/live/101tv-web101tv.m3u8";
let apunt = "//bcovlive-a.akamaihd.net/469e448f034b4d46afa4bcac53297d60/eu-central-1/6057955885001/playlist_dvr.m3u8";
let tlmch = "//wmaqlive-f.akamaihd.net/i/wmaqb1_1@24420/master.m3u8";
let tlmwash = "//wrclive-f.akamaihd.net/i/wrcb2_1@46880/master.m3u8";
let lestrellas = "//dai.google.com/linear/hls/event/_e1s_U52SCGL6zTnlTrbVQ/master.m3u8";
let estrellatv = "//estrellatv-plex.amagi.tv/playlist.m3u8";
let espn2sur = "//qlobbidev.s.llnwi.net/bpk-tv/ESPN2/hls/index.m3u8";
let espnus = "//134.19.182.131:8080/edg8_2.m3u8";
let tv3cat = "//directes-tv-int.ccma.cat/int/ngrp:tv3_web/playlist.m3u8";
let lasexta = "http://91.126.141.13:1935/live/21/playlist.m3u8";
let clarosp = "//dai.google.com/linear/hls/event/MErimHzcQJyFY4sABtO2Lg/master.m3u8";
let tcsgo = "//5.9.104.206:2536/live/iraffle/slowd2021/67.m3u8";

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
                // E P L
                if (srcLOAD == "p1") {srcLOAD = p1;}
                if (srcLOAD == "p2") {srcLOAD = p2;}
                if (srcLOAD == "p3") {srcLOAD = p3;}
                if (srcLOAD == "p4") {srcLOAD = p4;}
                if (srcLOAD == "p5") {srcLOAD = p5;}
                if (srcLOAD == "p6") {srcLOAD = p6;}
                if (srcLOAD == "p7") {srcLOAD = p7;}
                if (srcLOAD == "p8") {srcLOAD = p8;}
                if (srcLOAD == "p9") {srcLOAD = p9;}
                if (srcLOAD == "p10") {srcLOAD = p10;}
                // L L S
                if (srcLOAD == "c1") {srcLOAD = c1;}
                if (srcLOAD == "c2") {srcLOAD = c2;}
                if (srcLOAD == "c3") {srcLOAD = c3;}
                if (srcLOAD == "c4") {srcLOAD = c4;}
                if (srcLOAD == "c5") {srcLOAD = c5;}
                if (srcLOAD == "c6") {srcLOAD = c6;}
                if (srcLOAD == "c7") {srcLOAD = c7;}
                if (srcLOAD == "c8") {srcLOAD = c8;}
                if (srcLOAD == "c9") {srcLOAD = c9;}
                if (srcLOAD == "c10") {srcLOAD = c10;}
                // S A T
                if (srcLOAD == "s1") {srcLOAD = s1;}
                if (srcLOAD == "s2") {srcLOAD = s2;}
                if (srcLOAD == "s3") {srcLOAD = s3;}
                if (srcLOAD == "s4") {srcLOAD = s4;}
                if (srcLOAD == "s5") {srcLOAD = s5;}
                if (srcLOAD == "s6") {srcLOAD = s6;}
                if (srcLOAD == "s7") {srcLOAD = s7;}
                if (srcLOAD == "s8") {srcLOAD = s8;}
                if (srcLOAD == "s9") {srcLOAD = s9;}
                if (srcLOAD == "s10") {srcLOAD = s10;}
                // B D L
                if (srcLOAD == "b1") {srcLOAD = b1;}
                if (srcLOAD == "b2") {srcLOAD = b2;}
                if (srcLOAD == "b3") {srcLOAD = b3;}
                if (srcLOAD == "b4") {srcLOAD = b4;}
                if (srcLOAD == "b5") {srcLOAD = b5;}
                if (srcLOAD == "b6") {srcLOAD = b6;}
                if (srcLOAD == "b7") {srcLOAD = b7;}
                if (srcLOAD == "b8") {srcLOAD = b8;}
                if (srcLOAD == "b9") {srcLOAD = b9;}
                if (srcLOAD == "b10") {srcLOAD = b10;}
                // L G 1
                if (srcLOAD == "l1") {srcLOAD = l1;}
                if (srcLOAD == "l2") {srcLOAD = l2;}
                if (srcLOAD == "l3") {srcLOAD = l3;}
                if (srcLOAD == "l4") {srcLOAD = l4;}
                if (srcLOAD == "l5") {srcLOAD = l5;}
                if (srcLOAD == "l6") {srcLOAD = l6;}
                if (srcLOAD == "l7") {srcLOAD = l7;}
                if (srcLOAD == "l8") {srcLOAD = l8;}
                if (srcLOAD == "l9") {srcLOAD = l9;}
                if (srcLOAD == "l10") {srcLOAD = l10;}
                // O T S
                if (srcLOAD == "etb") {srcLOAD = etb;}
                if (srcLOAD == "etb2") {srcLOAD = etb2;}
                if (srcLOAD == "eitb") {srcLOAD = eitb;}
                if (srcLOAD == "tvcanaria") {srcLOAD = tvcanaria;}
                if (srcLOAD == "malaga101") {srcLOAD = malaga101;}
                if (srcLOAD == "apunt") {srcLOAD = apunt;}
                if (srcLOAD == "tlmch") {srcLOAD = tlmch;}
                if (srcLOAD == "tlmwash") {srcLOAD = tlmwash;}
                if (srcLOAD == "lestrellas") {srcLOAD = lestrellas;}
                if (srcLOAD == "estrellatv") {srcLOAD = estrellatv;}
                if (srcLOAD == "espn2sur") {srcLOAD = espn2sur;}
                if (srcLOAD == "espnus") {srcLOAD = espnus;}
                if (srcLOAD == "tv3cat") {srcLOAD = tv3cat;}
                if (srcLOAD == "lasexta") {srcLOAD = lasexta;}
                if (srcLOAD == "clarosp") {srcLOAD = clarosp;}
                if (srcLOAD == "tcsgo") {srcLOAD = tcsgo;}
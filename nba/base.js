let ml0 = "http://g.givemenbastreams.com/hls/";
let ml1 = "/playlist.m3u8";

let nba1 = "http://cbsnhls-i.akamaihd.net/hls/live/264710/CBSN_mdialog/prodstream/master.m3u8";
let nba2 = "http://cbsnhls-i.akamaihd.net/hls/live/264710/CBSN_mdialog/prodstream/master.m3u8";
let nba3 = "http://cbsnhls-i.akamaihd.net/hls/live/264710/CBSN_mdialog/prodstream/master.m3u8";
let nba4 = "http://cbsnhls-i.akamaihd.net/hls/live/264710/CBSN_mdialog/prodstream/master.m3u8";
let nba5 = "http://cbsnhls-i.akamaihd.net/hls/live/264710/CBSN_mdialog/prodstream/master.m3u8";
let nba6 = "http://cbsnhls-i.akamaihd.net/hls/live/264710/CBSN_mdialog/prodstream/master.m3u8";

function getParameterByName(name) {
                      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                          results = regex.exec(location.search);
                      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                  }

        var srcLOAD = getParameterByName('src');
                if (srcLOAD == "#") {alert('El canal se encuentra Offline');}
                if (srcLOAD == "") {alert('El canal se encuentra Offline');}

                if (srcLOAD == "nba1") {srcLOAD = nba1;}
                if (srcLOAD == "nba2") {srcLOAD = nba2;}
                if (srcLOAD == "nba3") {srcLOAD = nba3;}
                if (srcLOAD == "nba4") {srcLOAD = nba4;}
                if (srcLOAD == "nba5") {srcLOAD = nba5;}
                if (srcLOAD == "nba6") {srcLOAD = nba6;}
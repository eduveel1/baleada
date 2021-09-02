var bga = "https"+"://"+"black"+"ghost"+".li"+"ve"+"/"+"play/"+"hl"+"s.p"+"hp?";

let fs1ar = bga + "fox1";
let fs2ar = bga + "fox2";
let espn1 = bga + "espn1";
let espn2 = bga + "espn2";
let espn3 = bga + "fox2";
let golpe = bga + "fox2";
let foxp = bga + "fox2";
let tntar = bga + "fox2";
let tntcl = bga + "fox2";

function getParameterByName(name) {
              name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
              var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                  results = regex.exec(location.search);
              return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
          }

var srcLOAD = getParameterByName('src');
        if (srcLOAD == "#") {swal("Oops!", "Parece que este canal esá offline!", "error");}
        if (srcLOAD == "") {swal("Oops!", "Parece que este canal esá offline!", "error");}

        if (srcLOAD == "fs1ar") {srcLOAD = window.location.href = fs1ar;}
        if (srcLOAD == "fs2ar") {srcLOAD = window.location.href = fs2ar;}
        if (srcLOAD == "espn1") {srcLOAD = window.location.href = espn1;}
        if (srcLOAD == "espn2") {srcLOAD = window.location.href = espn2;}
        if (srcLOAD == "espn3") {srcLOAD = window.location.href = espn3;}
        if (srcLOAD == "golpe") {srcLOAD = window.location.href = golpe;}
        if (srcLOAD == "foxp") {srcLOAD = window.location.href = foxp;}
        if (srcLOAD == "tntar") {srcLOAD = window.location.href = tntar;}
        if (srcLOAD == "tntcl") {srcLOAD = window.location.href = tntcl;}
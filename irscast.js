// S E R V E R
let srva = "http:"; let srvb = "//5.9.104.206"; let srvc = ":2536"; let srvd = "/live"; let srve = "/irafflecast"; let key = "/vs2r"; let srvg = "/"; let srvh = "." + "m3" + "u8";
let srv = srva + srvb + srvc + srvd + srve + key + srvg;
let ch1 = srv + "1" + srvh; let bar = ch1;
let ch2 = srv + "2" + srvh; let mlaliga1 = ch2;
let ch3 = srv + "3" + srvh; let mlaliga2 = ch3;
let ch4 = srv + "4" + srvh; let mlaliga3 = ch4;
let ch5 = srv + "5" + srvh; let beinus = ch5;
let ch6 = srv + "6" + srvh; let beinne = ch6;
let ch7 = srv + "7" + srvh; let telecinco = ch7;
let ch8 = srv + "8" + srvh; let daznf1 = ch8;
let ch9 = srv + "9" + srvh; let mdepb = ch9;
let ch10 = srv + "10" + srvh; let mdep2 = ch10;
let ch11 = srv + "11" + srvh; let mlcamp1 = ch11;
let ch12 = srv + "12" + srvh; let unimas = ch12;
let ch13 = srv + "13" + srvh; let mvamos = ch13;
let ch14 = srv + "14" + srvh; let goles = ch14;
let ch15 = srv + "15" + srvh;
let ch16 = srv + "16" + srvh; let univision = ch16;
let ch17 = srv + "17" + srvh; let galavision = ch17;
let ch18 = srv + "18" + srvh; let directv1 = ch18;
let ch19 = srv + "19" + srvh; let dazn1es = ch19;
let ch20 = srv + "20" + srvh; let dazn2es = ch20;
let ch21 = srv + "21" + srvh; let espnsur = ch21;
let ch22 = srv + "22" + srvh; let espn2surs = ch22;
let ch23 = srv + "23" + srvh; let espn3sur = ch23;
let ch24 = srv + "24" + srvh; let tycar = ch24;
let ch25 = srv + "25" + srvh; let bemad = ch25;
let ch26 = srv + "26" + srvh; let mega = ch26;
let ch27 = srv + "27" + srvh; let goltvec = ch27;
let ch28 = srv + "28" + srvh;
let ch29 = srv + "29" + srvh;
let ch30 = srv + "30" + srvh; let espnus = ch30;
let ch31 = srv + "31" + srvh; let espnmx = ch31;
let ch32 = srv + "32" + srvh; let espn2mx = ch32;
let ch33 = srv + "33" + srvh; let espn3mx = ch33;
let ch34 = srv + "34" + srvh; let barcatv = ch34;
let ch35 = srv + "35" + srvh; let nbcu = ch35;
let ch36 = srv + "36" + srvh; let fs1mx = ch36;
let ch37 = srv + "37" + srvh; let fs2mx = ch37;
let ch38 = srv + "38" + srvh; let dazn3es = ch38;
let ch39 = srv + "39" + srvh; let dazn4es = ch39;
let ch40 = srv + "40" + srvh;
let ch41 = srv + "41" + srvh; let mutv = ch41;
let ch42 = srv + "42" + srvh; let betistv = ch42;
let ch43 = srv + "43" + srvh;
let ch44 = srv + "44" + srvh;
let ch45 = srv + "45" + srvh; let clarosp = ch45;
let ch46 = srv + "46" + srvh; let win = ch46;
let ch47 = srv + "47" + srvh; 
let ch48 = srv + "48" + srvh; let foxa = ch48;
let ch49 = srv + "49" + srvh; 
let ch50 = srv + "50" + srvh; 
let ch50 = srv + "51" + srvh; let mlcamp = ch48;
let ch50 = srv + "52" + srvh; let mlcamp1 = ch48;
let ch50 = srv + "53" + srvh; let mlcamp2 = ch48;
let ch50 = srv + "54" + srvh; let mlcamp3 = ch48;
let ch60 = srv + "60" + srvh; let barsd = ch60;


// P O T C L L
    // F T V
let potclla = "//"+"pho"+"toc"+"all"+"."+"tv"; let potcllb = "/"+"ftv"+"."+"m3"+"u8";
let itv = potclla+key+potcllb + "?ch=itv";
let itv2 = potclla+key+potcllb + "?ch=itv2";
let itv3 = potclla+key+potcllb + "?ch=itv3";
let itv4 = potclla+key+potcllb + "?ch=itv4";
let itvbe = potclla+key+potcllb + "?ch=itvbe";
let citv = potclla+key+potcllb + "?ch=citv";
let bbcnews = potclla+key+potcllb + "?ch=bbcnews";
let bbcone = potclla+key+potcllb + "?ch=bbcone";
let bbctwo = potclla+key+potcllb + "?ch=bbctwo";
let bbcfour = potclla+key+potcllb + "?ch=bbcfour";

// PROPELLER INTERSTICIAL
//var propellerIntersticial = document.createElement('script');
//propellerIntersticial.onload = function() {
//  console.log("Script loaded and ready");
//};
//propellerIntersticial.src = "//upgulpinon.com/1?z=4455092";
//document.getElementsByTagName('body')[0].appendChild(propellerIntersticial);

function getParameterByName(name) {
              name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
              var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                  results = regex.exec(location.search);
              return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
          }
              var getURL = getParameterByName('get');

        if (getURL == "#") {swal("Oops!", "Parece que este canal esá offline!", "error");}
        if (getURL == "") {swal("Oops!", "Parece que este canal esá offline!", "error");}
         // BALEADA
        if (getURL == "bar") {getURL = ch1;}
        if (getURL == "ch1") {getURL = bar;}
        if (getURL == "mlaliga1") {getURL = ch2;}
        if (getURL == "ch2") {getURL = mlaliga1;}
        if (getURL == "mlaliga2") {getURL = ch3;}
        if (getURL == "ch3") {getURL = mlaliga2;}
        if (getURL == "mlaliga3") {getURL = ch4;}
        if (getURL == "ch4") {getURL = mlaliga3;}
        if (getURL == "beinus") {getURL = ch5;}
        if (getURL == "ch5") {getURL = beinus;}
        if (getURL == "beinne") {getURL = ch6;}
        if (getURL == "ch6") {getURL = beinne;}
        if (getURL == "telecinco") {getURL = ch7;}
        if (getURL == "ch7") {getURL = telecinco;}
        if (getURL == "daznf1") {getURL = ch8;}
        if (getURL == "ch8") {getURL = daznf1;}
        if (getURL == "mdepb") {getURL = ch9;}
        if (getURL == "ch9") {getURL = mdepb;}
        if (getURL == "mdep2") {getURL = ch10;}
        if (getURL == "ch10") {getURL = mdep2;}
        if (getURL == "mlcamp1") {getURL = ch11;}
        if (getURL == "ch11") {getURL = mlcamp1;}
        if (getURL == "unimas") {getURL = ch12;}
        if (getURL == "ch12") {getURL = unimas;}
        if (getURL == "mvamos") {getURL = ch13;}
        if (getURL == "ch13") {getURL = mvamos;}
        if (getURL == "goles") {getURL = ch14;}
        if (getURL == "ch14") {getURL = goles;}
        if (getURL == "15") {getURL = ch15;}
        if (getURL == "univision") {getURL = ch16;}
        if (getURL == "ch16") {getURL = univision;}
        if (getURL == "galavision") {getURL = ch17;}
        if (getURL == "ch17") {getURL = galavision;}
        if (getURL == "directv1") {getURL = ch18;}
        if (getURL == "ch18") {getURL = directv1;}
        if (getURL == "dazn1es") {getURL = ch19;}
        if (getURL == "ch19") {getURL = dazn1es;}
        if (getURL == "dazn2es") {getURL = ch20;}
        if (getURL == "ch20") {getURL = dazn2es;}
        if (getURL == "espnsur") {getURL = ch21;}
        if (getURL == "ch21") {getURL = espnsur;}
        if (getURL == "espn2surs") {getURL = ch22;}
        if (getURL == "ch22") {getURL = espn2surs;}
        if (getURL == "espn3sur") {getURL = ch23;}
        if (getURL == "ch23") {getURL = espn3sur;}
        if (getURL == "tycar") {getURL = ch24;}
        if (getURL == "ch24") {getURL = tycar;}
        if (getURL == "bemad") {getURL = ch25;}
        if (getURL == "ch25") {getURL = bemad;}
        if (getURL == "mega") {getURL = ch26;}
        if (getURL == "megaes") {getURL = ch26;}
        if (getURL == "ch26") {getURL = mega;}
        if (getURL == "goltvec") {getURL = ch27;}
        if (getURL == "ch27") {getURL = goltvec;}
        if (getURL == "28") {getURL = ch28;}
        if (getURL == "29") {getURL = ch29;}
        if (getURL == "espnus") {getURL = ch30;}
        if (getURL == "ch30") {getURL = espnus;}
        if (getURL == "espnmx") {getURL = ch31;}
        if (getURL == "ch31") {getURL = espnmx;}
        if (getURL == "espn2mx") {getURL = ch32;}
        if (getURL == "ch32") {getURL = espn2mx;}
        if (getURL == "espn3mx") {getURL = ch33;}
        if (getURL == "ch33") {getURL = espn3mx;}
        if (getURL == "barcatv") {getURL = ch34;}
        if (getURL == "ch34") {getURL = barcatv;}
        if (getURL == "nbcu") {getURL = ch35;}
        if (getURL == "ch35") {getURL = nbcu;}
        if (getURL == "fs1mx") {getURL = ch36;}
        if (getURL == "ch36") {getURL = fs1mx;}
        if (getURL == "fs2mx") {getURL = ch37;}
        if (getURL == "ch37") {getURL = fs2mx;}
        if (getURL == "dazn3es") {getURL = ch38;}
        if (getURL == "ch38") {getURL = dazn3es;}
        if (getURL == "dazn4es") {getURL = ch39;}
        if (getURL == "ch39") {getURL = dazn4es;}
        if (getURL == "40") {getURL = ch40;}
        if (getURL == "41") {getURL = ch41;}
        if (getURL == "betistv") {getURL = ch42;}
        if (getURL == "ch42") {getURL = betistv;}
        if (getURL == "esport3") {getURL = ch43;}
        if (getURL == "ch43") {getURL = esport3;}
        if (getURL == "44") {getURL = ch44;}
        if (getURL == "clarosp") {getURL = ch45;}
        if (getURL == "ch41") {getURL = mutv;}
        if (getURL == "mutv") {getURL = ch41;}
        if (getURL == "ch45") {getURL = clarosp;}
        if (getURL == "win") {getURL = ch46;}
        if (getURL == "ch46") {getURL = win;}
        if (getURL == "47") {getURL = ch47;}
        if (getURL == "foxa") {getURL = ch48;}
        if (getURL == "ch48") {getURL = foxa;}
        if (getURL == "49") {getURL = ch49;}
        if (getURL == "50") {getURL = ch50;}
        if (getURL == "mlcamp") {getURL = ch51;}
        if (getURL == "ch51") {getURL = mlcamp;}
        if (getURL == "mlcamp1") {getURL = ch52;}
        if (getURL == "ch52") {getURL = mlcamp1;}
        if (getURL == "mlcamp2") {getURL = ch53;}
        if (getURL == "ch53") {getURL = mlcamp2;}
        if (getURL == "mlcamp3") {getURL = ch54;}
        if (getURL == "ch54") {getURL = mlcamp3;}
        if (getURL == "barsd") {getURL = ch60;}
        if (getURL == "ch60") {getURL = barsd;}
        // P O T C L L
        if (getURL == "itv") {getURL = itv;}
        if (getURL == "itv2") {getURL = itv2;}
        if (getURL == "itv3") {getURL = itv3;}
        if (getURL == "itv4") {getURL = itv4;}
        if (getURL == "itvbe") {getURL = itvbe;}
        if (getURL == "citv") {getURL = citv;}
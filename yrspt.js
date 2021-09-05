// DIABLE HTTPS
if (location.protocol == 'https:') {
    location.replace(`http:${location.href.substring(location.protocol.length)}`);
}
// PROPELLER INTERSTICIAL
var propellerIntersticial = document.createElement('script');
propellerIntersticial.onload = function() {
  console.log("Script loaded and ready");
};
propellerIntersticial.src = "//upgulpinon.com/1?z=4455092";
document.getElementsByTagName('body')[0].appendChild(propellerIntersticial);

var srcError = "https://sportsgrid-klowdtv.amagi.tv/playlist.m3u8";
let yrspta = "http://"+"your"+"spor"+"ts."+"stre"+"am/" + "ing/";
let espnnl = yrspta +  "tvx2?ch=fs1nl";
let espn2nl = yrspta +  "tvx2?ch=fs2nl";
let espn3nl = yrspta +  "tvx2?ch=fs3nl";
let espn4nl = yrspta +  "tvx2?ch=fs4nl";
let espn5nl = yrspta +  "tvx2?ch=fs5nl";
let espn = yrspta +  "espn";
let espn2 = yrspta +  "espn2";
let fs1 = yrspta +  "fs1";
let fs2 = yrspta +  "fs2";
let fsdeportes = yrspta +  "fsdeportes";
let espndep = "https://es-cdn.com/stream/r/espndep.html";
let espnsur = yrspta +  "espnsur";
let espn2sur = yrspta +  "espn2sur";
let espn3sur = yrspta +  "espn3sur";
let espnjm = yrspta +  "espnjm";
let espn2jm = yrspta +  "espn2jm";
let lnh = yrspta +  "lnh";
let mlbn = yrspta +  "mlbn";
// OTROS
let tvpublica = "//i.futbollibre.net/g/tvpkey.html";
let directv1 = "//embedmegatv9.000webhostapp.com/dtv_bitmovin.html#player";
let tdtvp = "//conceptoweb-studio.com/radio/video/tododeportesplus/#player";
let tsi = "//dailymotion.com/embed/video/k4kBR7bvHSEZeSwu26R?autoplay=1";
let canal5hn = "//dailymotion.com/embed/video/k3RU54lYRXvhyCwgt0d?autoplay=1";
let telecadena = "//dailymotion.com/embed/video/k1fuFbqqr7UftiwnPY7?autoplay=1";
let tvcdeportes = "//dailymotion.com/embed/video/k47r4gXKjUTXzNwHsoc?autoplay=1";
// EVENTUALES
let tsie = "";
let canal5hne = "";
let telecadenae = "";
let tvcdeportese = "https://www.dailymotion.com/cdn/live/video/x7xs2wx.m3u8?sec=Q1SDWS6gnXr0e4vL1Yp0IFKIldwqOIq058QPQcj2I788EEw3BaimiYaFbbhui8ndzEBSmBH2EBtWcuGDTICRtQ";

let tudnif = "//futbollibre.net/en-vivo/tudn/embed.html?";
let tycif = "//futbollibre.net/en-vivo/tyc-sports/embed.html";

swal("¿El contenido no reproduce?", "Utiliza Google Chrome!", "success");

function getParameterByName(name) {
                      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                          results = regex.exec(location.search);
                      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
                  }
                var src = getParameterByName('src');
                if (src == "#") {swal("Oops!", "Parece que este canal esá offline!", "error");;}
                if (src == "") {swal("Oops!", "Parece que este canal esá offline!", "error");}
                if (src == "espnnl") {src = espnnl;}
                if (src == "espnnl?cast") {src = espnnl; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "espn2nl") {src = espn2nl;}
                if (src == "espn2nl?cast") {src = espn2nl; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "espn3nl") {src = espn3nl;}
                if (src == "espn3nl?cast") {src = espn3nl; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "espn4nl") {src = espn4nl;}
                if (src == "espn4nl?cast") {src = espn4nl; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "espn5nl") {src = espn5nl;}
                if (src == "espn5nl?cast") {src = espn5nl; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "espn") {src = espn;}
                if (src == "espn?cast") {src = espn; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "espn2") {src = espn2;}
                if (src == "espn2?cast") {src = espn2; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "fs1") {src = fs1;}
                if (src == "fs1?cast") {src = fs1; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "fs2") {src = fs2;}
                if (src == "fs2?cast") {src = fs2; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "fsdeportes") {src = fsdeportes;}
                if (src == "fsdeportes?cast") {src = fsdeportes; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "espndep") {src = espndep;}
                if (src == "espndep?cast") {src = espndep; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "espnsur") {src = espnsur;}
                if (src == "espnsur?cast") {src = espnsur; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "espn2sur") {src = espn2sur;}
                if (src == "espn2sur?cast") {src = espn2sur; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "espn3sur") {src = espn3sur;}
                if (src == "espn3sur?cast") {src = espn3sur; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "espnjm") {src = espnjm;}
                if (src == "espnjm?cast") {src = espnjm; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "espn2jm") {src = espn2jm;}
                if (src == "espn2jm?cast") {src = espn2jm; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "lnh") {src = lnh;}
                if (src == "lnh?cast") {src = lnh; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "mlbn") {src = mlbn;}
                if (src == "mlbn?cast") {src = mlbn; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "tvpublica") {src = tvpublica;}
                if (src == "tvpublica?cast") {src = tvpublica; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "directv1") {src = directv1;}
                if (src == "directv1?cast") {src = directv1; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "tdtvp") {src = tdtvp;}
                if (src == "tdtvp?cast") {src = tdtvp; }

                if (src == "tsi") {src = tsi;}
                if (src == "tsi?cast") {src = tsi; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "tsie") {src = window.location.href = tsie;}

                if (src == "canal5hn") {src = canal5hn;}
                if (src == "canal5hn?cast") {src = canal5hn; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}
                if (src == "canal5hne") {src = window.location.href = canal5hne;}

                if (src == "telecadena") {src = telecadena;}
                if (src == "telecadena?cast") {src = telecadena; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "telecadenae") {src = window.location.href = telecadenae;}

                if (src == "tvcdeportes") {src = tvcdeportes;}
                if (src == "tvcdeportes?cast") {src = tvcdeportes; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "tvcdeportese") {src = window.location.href = tvcdeportese;}

                if (src == "tudnif") {src = tudnif;}
                if (src == "tudnif?cast") {src = tudnif; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}

                if (src == "tycif") {src = tycif;}
                if (src == "tycif?cast") {src = tycif; swal({
                    icon: "info",
                    title: "Oops!",
                    text: "Este contenido no reproducirá al menos que utilices Web Caster para enviar a tu TV.",
                    closeOnEsc: false,
                    closeOnClickOutside: false,
                    buttons: [false],
                });}


                // PLAYER
                var plyrIF = document.createElement('iframe');
                plyrIF.onload = function() {
                  console.log("Script loaded and ready");
                };
                plyrIF.class = "yrspt";
                plyrIF.style = "border:0px;";
                plyrIF.frameborder = "0";
                plyrIF.height = "99%";
                plyrIF.width = "99%";
                plyrIF.src = src;
                plyrIF.allowfullscreen = "yes";
                plyrIF.scrolling = "no";
                plyrIF.allowtransparency;
                document.getElementsByTagName('body')[0].appendChild(plyrIF);

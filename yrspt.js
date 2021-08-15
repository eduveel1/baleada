// GOOGLE ANALYTICS
var GAnalytics = document.createElement('script');
GAnalytics.onload = function() {
  console.log("Script loaded and ready");
};
GAnalytics.src = "https://www.googletagmanager.com/gtag/js?id=UA-174658361-1";
document.getElementsByTagName('head')[0].appendChild(GAnalytics);

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-174658361-1');

// ALERT
let alertyrspt =
`
<section class="container">
<section style="background-color: #000;color: #fff;position: fixed;width: 50%" class="alert alert-2 alert-info" role="alert">
<i class="fa fa-info-circle"></i> Gracias por utilizar iRaffle Sports!
</section>
</section>
`;
for (const ele of document.getElementsByClassName("alertyrspt")){ele.innerHTML=(alertyrspt)}

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
let espndep = yrspta +  "espndep";
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
let tudnif = "//futbollibre.net/en-vivo/tudn/embed.html?";


function getParameterByName(name) {
              name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
              var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                  results = regex.exec(location.search);
              return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
          }
              var getURL = getParameterByName('get');
              var getAlert = "Haz docle clic para entrar a fullscreen";  
        if (getURL == "#") {alert('El canal se encuentra Offline');}
        if (getURL == "") {alert('El canal se encuentra Offline');}
        if (getURL == "espnnl") {getURL = espnnl;}
        if (getURL == "espn2nl") {getURL = espn2nl;}
        if (getURL == "espn3nl") {getURL = espn3nl;}
        if (getURL == "espn4nl") {getURL = espn4nl;}
        if (getURL == "espn5nl") {getURL = espn5nl;}
        if (getURL == "espn") {getURL = espn;}
        if (getURL == "espn2") {getURL = espn2;}
        if (getURL == "fs1") {getURL = fs1;}
        if (getURL == "fs2") {getURL = fs2;}
        if (getURL == "fsdeportes") {getURL = fsdeportes;}
        if (getURL == "espndep") {getURL = espndep;}
        if (getURL == "espnsur") {getURL = espnsur;}
        if (getURL == "espn2sur") {getURL = espn2sur;}
        if (getURL == "espn3sur") {getURL = espn3sur;}
        if (getURL == "espnjm") {getURL = espnjm;}
        if (getURL == "espn2jm") {getURL = espn2jm;}
        if (getURL == "lnh") {getURL = lnh;}
        if (getURL == "mlbn") {getURL = mlbn;}
        if (getURL == "tvpublica") {getURL = tvpublica;}
        if (getURL == "directv1") {getURL = directv1;}
        if (getURL == "tdtvp") {getURL = tdtvp;}
        if (getURL == "tsi") {getURL = tsi;}
        if (getURL == "canal5hn") {getURL = canal5hn;}
        if (getURL == "telecadena") {getURL = telecadena;}
        if (getURL == "tvcdeportes") {getURL = tvcdeportes;}
        if (getURL == "tudnif") {getURL = tudnif;}

document.write(" <iframe  class='yrspt' frameborder='0' height=100% width=100% src='" + getURL + "' allowfullscreen='yes' scrolling='no' allowtransparency></iframe>");
        
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

  var options = {
    width: '100%',
    height: '100%',
    channel: srcLOAD,
    autoplay: true,
    muted: false,
    // Only needed if this page is going to be embedded on other websites
    parent: ["127.0.0.1", "slowdsports.000webhostapp.com", "slowdsports.github.io"]
  };
  var player = new Twitch.Player("twitchPlayer", options);
  player.setVolume(1.0);
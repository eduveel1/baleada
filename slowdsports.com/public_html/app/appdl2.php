<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>SlowD Sports - download the app</title>
<style>
.news-app-promo {
  box-sizing: border-box;
  /*background-color: #000;*/
  padding: 0.5em;
  margin-top: 1em;
}

.news-app-promo__section {
  display: inline-block;
  margin: 0 auto;
  position: relative;
  width: 100%;
  text-align: center;
  margin-top: 8px;
}

.news-app-promo-text {
  color: #fff;
  font-family: helvetica;
  min-width: 277px;
  border-right: 0.25em solid #fff;
  border-left: 0.25em solid #fff;
  padding: 0 1em;
  width: 35%;
  margin: 1em auto;
  display: block;
}

.news-app-promo-text__tagline {
  font-size: 1.09em;
}

.news-app-promo-text__download {
  font-size: 2.25em;
  font-weight: 600;
}

.news-app-promo-buttons {
  margin: 0 auto;
  max-width: 35%;
  display: block;
}

.news-app-promo-buttons__buttons {
  display: block;
}

.news-app-promo-buttons__logo {
  display: inline-block;
}

.news-app-promo-subsection {
  display: inline-block;
  margin: 0 auto;
  margin-right: 10px;
}

.news-app-promo__bbc-logo {
  display: inline-block;
  width: 106px;
  margin-bottom: 8px;
}

.news-app-promo__play-store,
.news-app-promo__app-store {
  display: block;
  width: 161px;
  height: auto;
  margin-bottom: 8px;
}

.news-app-promo-subsection--link {
  text-decoration: none;
  border: 0;
}
#myVideo {
position: fixed;
top: -10%;
right: 0;
bottom: 0%;
min-width: 100%; 
min-height: 100%;
z-index: -100;
background-size: cover;
filter: blur(5px);
-webkit-filter: blur(5px);    
}
</style>

</head>
<body>
<!-- partial:index.partial.html -->
<div id="app" class="news-app-promo">
   <video autoplay muted loop id="myVideo">
  <source src="http://iraffle.me/api/assets/iraffle/players/bg.mp4" type="video/mp4">
</video>
    <div class="news-app-promo-text">
        <div class="news-app-promo-text__tagline">Television y Deportes en Vivo</div><br>
        <div class="news-app-promo-text__download">Descarga SlowD Sports App</div>
    </div>
    <div class="news-app-promo__section">
        <div class="news-app-promo-subsection">
            <img class="news-app-promo__bbc-logo" src="https://i.ibb.co/ChnHy0b/Logow-1.png" width="106" height="106">
        </div>
        <div class="news-app-promo-subsection">
            <a class="news-app-promo-subsection--link news-app-promo-subsection--playstore" href="http://slowdsports.com/app/gplay.php" target="_parent">
               
                <img class="news-app-promo__play-store" src="http://slowdsports.com/app/img/gplay.png" width="161" height="auto" border="0">
            </a>
            <a class="news-app-promo-subsection--link news-app-promo-subsection--appstore" href="http://slowdsports.com/app/mega.php" target="_parent">
                <img class="news-app-promo__app-store" src="http://slowdsports.com/app/img/mega.png" width="161" height="auto" border="0">
            </a>
        </div>
    </div>
    <div class="news-app-promo__section">

    </div>
</div>
<!-- partial -->
  
</body>
</html>

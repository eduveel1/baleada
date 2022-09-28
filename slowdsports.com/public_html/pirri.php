<!DOCTYPE html>
<html>
    <head>
        <title>SlowD Sports</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="https://i.ibb.co/PNytkmd/logob-1.png">
        <!--UIKit Styles-->
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/uikit@latest/dist/css/uikit.min.css">
        <!--Schedule Styles-->
        <link rel="stylesheet" href="http://slowdsports.com/css/schedule.css">
        <!--Main Styles-->
        <link rel="stylesheet" href="http://slowdsports.com/css/main.css">
        <!--Flags-->
        <link rel="stylesheet" href="http://slowdsports.com/css/flags.css">
        <!--FontAwesome-->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
        <!--FontAwesome Animated -->
        <link rel="stylesheet" href="https://slowdsports.com/css/font-awesome-animation.css">
        <!--Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-174658361-1"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-174658361-1');
        </script>
        <style>
            .table-liga{scroll-behavior: smooth;}body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}      
  canvas {
    position:fixed;
    top:0;
    left:0;
    z-index: 1;  
}
  uk-table{
      position: static;
      z-index: -999;
            }
  img-champion{
  border-radius: 50%;
  background: #73AD21;
  padding: 20px;
  width: 200px;
  height: 150px;              
  }            
        </style>
    </head>
    <body>
    <canvas class="uk-position-cover" id="canvas"></canvas>
    <script>
(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();


var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 0,
    height = 0,
    vanishPointY = 0,
    vanishPointX = 0,
    focalLength = 300,
    angleX = 180,
    angleY = 180,
    angleZ = 180,
    angle = 0,
    cycle = 0,
    colors = {r : 255, g : 0, b : 0},
    lastShot = new Date().getTime();

canvas.width = width;
canvas.height = height;

/*
 *	Controls the emitter
 */
function Emitter() {
    this.reset();
}

Emitter.prototype.reset = function () {
    var PART_NUM = 200,
        x = (Math.random() * 400) - 200,
        y = (Math.random() * 400) - 200,
        z = (Math.random() * 800) - 200;
    
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    
    var color = [~~(Math.random() * 150) + 10, ~~(Math.random() * 150) + 10, ~~(Math.random() * 150) + 10]
    this.particles = [];

    for (var i = 0; i < PART_NUM; i++) {
        this.particles.push(new Particle(this.x, this.y, this.z, {
            r: colors.r,
            g: colors.g,
            b: colors.b
        }));
    }
}

Emitter.prototype.update = function () {
    var partLen = this.particles.length;

    angleY = (angle - vanishPointX) * 0.0001;
    angleX = (angle - vanishPointX) * 0.0001;

    this.particles.sort(function (a, b) {
        return b.z - a.z;
    });

    for (var i = 0; i < partLen; i++) {
        this.particles[i].update();
    }
    
    if(this.particles.length <= 0){
      this.reset();   
    }

};

Emitter.prototype.render = function (imgData) {
    var data = imgData.data;

    for (i = 0; i < this.particles.length; i++) {
        var particle = this.particles[i],
            dist = Math.sqrt((particle.x - particle.ox) * (particle.x - particle.ox) + (particle.y - particle.oy) * (particle.y - particle.oy) + (particle.z - particle.oz) * (particle.z - particle.oz));

        if (dist > 255) {
            particle.render = false;
            this.particles.splice(i, 1);
            this.particles.length--;
        }

        if (particle.render && particle.xPos < width && particle.xPos > 0 && particle.yPos > 0 && particle.yPos < height) {
            for (w = 0; w < particle.size; w++) {
                for (h = 0; h < particle.size; h++) {
                    if (particle.xPos + w < width && particle.xPos + w > 0 && particle.yPos + h > 0 && particle.yPos + h < height) {
                        pData = (~~ (particle.xPos + w) + (~~ (particle.yPos + h) * width)) * 4;
                        data[pData] = particle.color[0];
                        data[pData + 1] = particle.color[1];
                        data[pData + 2] = particle.color[2];
                        data[pData + 3] = 255 - dist;
                    }
                }
            }
        }
    }
};


/*
 *	Controls the individual particles
 */
function Particle(x, y, z, color) {
    this.x = x;
    this.y = y;
    this.z = z;

    this.startX = this.x;
    this.startY = this.y;
    this.startZ = this.z;

    this.ox = this.x;
    this.oy = this.y;
    this.oz = this.z;

    this.xPos = 0;
    this.yPos = 0;

    this.vx = (Math.random() * 10) - 5;
    this.vy = (Math.random() * 10) - 5;
    this.vz = (Math.random() * 10) - 5;

    this.color = [color.r, color.g, color.b];
    this.render = true;

    this.size = Math.round(1 + Math.random() * 1);
}

Particle.prototype.rotate = function () {
    var x = this.startX * Math.cos(angleZ) - this.startY * Math.sin(angleZ),
        y = this.startY * Math.cos(angleZ) + this.startX * Math.sin(angleZ);

     this.x = x;
     this.y = y;
}

Particle.prototype.update = function () {
    var cosY = Math.cos(angleX),
        sinY = Math.sin(angleX);

    this.x = (this.startX += this.vx);
    this.y = (this.startY += this.vy);
    this.z = (this.startZ -= this.vz);
    this.rotate();

    this.vy += 0.1;
    this.x += this.vx;
    this.y += this.vy;
    this.z -= this.vz;

    this.render = false;

    if (this.z > -focalLength) {
        var scale = focalLength / (focalLength + this.z);

        this.size = scale * 2;
        this.xPos = vanishPointX + this.x * scale;
        this.yPos = vanishPointY + this.y * scale;
        this.render = true;
    }
};

function render() {
    colorCycle();
    angleY = Math.sin(angle += 0.01);
    angleX = Math.sin(angle);
    angleZ = Math.sin(angle);

    var imgData = ctx.createImageData(width, height);

    for (var e = 0; e < 30; e++) {
        emitters[e].update();
        emitters[e].render(imgData);
    }
    ctx.putImageData(imgData, 0, 0);
    requestAnimationFrame(render);
}

function colorCycle() {
    cycle += .6;
    if (cycle > 100) {
        cycle = 0;
    }
    colors.r = ~~ (Math.sin(.3 * cycle + 0) * 127 + 128);
    colors.g = ~~ (Math.sin(.3 * cycle + 2) * 127 + 128);
    colors.b = ~~ (Math.sin(.3 * cycle + 4) * 127 + 128);
}

var emitters = [];
for (var e = 0; e < 30; e++) {
    colorCycle();
    emitters.push(new Emitter());
}
//render();


// smart trick from @TimoHausmann for full screen pens
setTimeout(function () {
    width = canvas.width = window.innerWidth;
    height = canvas.height = document.body.offsetHeight;
    vanishPointY = height / 2;
    vanishPointX = width / 2;
    render();
}, 500);    
</script>
   <header id="hero-header">
  <div class="uk-section-secondary">
    <!-- change her the bg image + The overlay color/opacity/direction (under style="") -->
    <!-- Use "data-uk-height-viewport" for full 100VH hero (entire viewport) -->
    <div id="change-her-the-bg-image" class="uk-background-norepeat uk-background-cover uk-background-center-center  uk-section uk-section-large uk-flex uk-flex-middle" uk-parallax="bgx: 0,-60" data-uk-height-viewport="offset-top: false" style="background: linear-gradient(to right, rgba(30, 75, 115, 0.9), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1554703869-8bb432598cf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');">
      <div class="uk-width-1-1">
        <!-- hero container -->
        <div class="uk-container uk-container-large">
          <!-- Heading: Add margin top for h1 - like this the text looks more center v beacuse the navbar is transpernt -->
          <h1 class="uk-margin-small uk-margin-medium-top uk-width-large@m uk-text-left@m uk-text-center uk-h6 uk-heading-line" data-uk-parallax="opacity: 1,0;viewport: 0.95;media: @s">
            <!-- extra span for uk-heading-line -->
            <span><img src="https://i.ibb.co/w0qg9JF/trans.png" alt="" class="competition ucl"> UEFA CHAMPIONS LEAGUE WINNER!</span>
          </h1>
          <h2 style="color: red;" class="uk-margin-small uk-text-left@m uk-text-center uk-heading-large" 
              data-uk-parallax="y: 0,60;opacity: 1,0; easing: 0.8;viewport: 0.95;media: @s">
              <img src="https://i.ibb.co/w0qg9JF/trans.png" alt="" class="competition bayern">
            TE<span style="color: white;">AM</span> NA<span style="color: white;">ME</span>
          </h2>
          <!-- Arrow: With link to #main section + uk-scroll="" for smooth scrolling + offset (Beacuse the nav is sticky)-->
          <div class="uk-margin uk-text-left@m uk-text-center" data-uk-parallax="y: 0,450;opacity: 1,0;easing: 0.3;target: !.uk-section;media: @s">
            <a uk-icon="icon: arrow-down;ratio: 1.5" class="uk-icon-link uk-icon" href="#main" data-uk-scroll="offset: 100"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
    <!--HEADER-->
            <header id="header" style="background-color: rgba(255, 99, 71, 0)!important;" data-uk-sticky="show-on-up: true; animation: uk-animation-fade; media: @l">
			<div class="uk-container">
				<nav id="navbar" data-uk-navbar="mode: click;">
				
					<div style="background-color: rgba(255, 99, 71, 0);" class="uk-navbar-left nav-overlay uk-visible@m">
						<ul class="uk-navbar-nav">
							<li class="uk-active"><a class="nav-text" href="http://slowdsports.com/soccer/">Soccer</a></li>
                            <li><a class="nav-text" href="http://slowdsports.com/basket/">Basket</a></li>
                            <li><a class="nav-text" href="http://slowdsports.com/box/">Box</a></li>
                            <li><a class="nav-text" href="http://slowdsports.com/football/">Football</a></li>
                            <li><a class="nav-text" href="http://slowdsports.com/tennis/">Tennis</a></li>
						</ul>
					</div>
					
					<div class="uk-navbar-center nav-overlay">
						<a class="uk-navbar-item uk-logo nav-logo" href="http://slowdsports.com" title="Logo"><img src="https://i.ibb.co/PNytkmd/logob-1.png" alt="Logo"></a>
					</div>
					
					<div class="uk-navbar-right nav-overlay uk-visible@m">
                    <ul class="uk-navbar-nav nav-right-custom">
					    <li><a class="nav-text" href="http://slowdsports.com/golf/">Golf</a></li>
                        <li><a class="nav-text" href="http://slowdsports.com/baseball/">Baseball</a></li>
                        <li><a class="nav-text" href="http://slowdsports.com/others/">Others</a></li>
                        <li><a class="nav-text" href="http://slowdsports.com/tv/">TV</a></li>
                        <li><a class="nav-text" href="http://slowdsports.com/dmca/">DMCA</a></li>
                    </ul>
                    
                    </div>
                    
                    
                    <div class="uk-navbar-right nav-overlay">
                    
						<div class="uk-navbar-item">
						
							<a class="uk-visible@s" style="margin-right: 4px" href="#" data-uk-icon=""></a>
							<a class="uk-visible@s" style="margin-right: 4px" href="https://www.buymeacoffee.com/slowdsports" target="_blank" data-uk-icon="credit-card"></a>
							<a class="uk-visible@s" style="margin-right: 4px" href="https://t.me/slowdsports" target="_blank" data-uk-icon="question"></a>
							<a class="uk-navbar-toggle uk-hidden@m" data-uk-toggle data-uk-navbar-toggle-icon href="#offcanvas-nav"></a>
							
						</div>
						
					</div>
					<div class="nav-overlay uk-navbar-left uk-flex-1" hidden>
						<div class="uk-navbar-item uk-width-expand">
							<form class="uk-search uk-search-navbar uk-width-1-1">
								<input class="uk-search-input" type="search" placeholder="Search...">
							</form>
						</div>
						<a class="uk-navbar-toggle" data-uk-close data-uk-toggle="target: .nav-overlay; animation: uk-animation-fade" href="#"></a>
					</div>
				</nav>
			</div>
		</header>
				
		<hr>
		
    <div class="uk-container">
		    
		
    <div class="uk-child-width-expand@s uk-text-center" uk-grid>
       <!--CHANNEL--
        <div>        
        <div class="uk-card uk-card-default uk-card-body">
            
            <div class="uk-card-badge uk-label badge-soccer">Soccer</div>
            <img style="width: 45px;" class="channel-img" src="https://image.flaticon.com/icons/svg/870/870901.svg" alt="">
            <h3 class="uk-card-title">ESPN</h3>
            <p>ESPN is an American multinational basic cable sports channel owned by ESPN Inc.</p>
            <p class="channel-owner">
            <i>Owner: Sports24</i>
            </p>
            <a href="http://slowdsports.com/tv/sp-espn.php" class="uk-button uk-button-default" type="button">Watch <i>HD</i></a>
        </div>
        
        </div>
       <!--/CHANNEL-->
       
       <!--CHANNEL--
        <div>        
        <div class="uk-card uk-card-default uk-card-body">
            
            <div class="uk-card-badge uk-label badge-soccer">Soccer</div>
            <img style="width: 55px;" class="channel-img" src="https://media.foxsports.com.au/technology/resources/prod/images/foxsports-australia-logo.png" alt="">
            <h3 class="uk-card-title">Fox Sports </h3>
            <p>Fox Sports is the brand name for a number of sports channelsaround the world.</p>
            <p class="channel-owner">
                <i>Owner: Sports24</i>
            </p>
            <a href="http://slowdsports.com/tv/sp-fs1.php" class="uk-button uk-button-default" type="button">Watch <i>HD</i></a>
        </div>
        
        </div>
       <!--/CHANNEL-->
       
        
    </div>
  
</div>
  <hr class="uk-divider-icon">
		
		<!--SOCIAL-->
  <center>
   <p>
   <span>//</span>
   Join:
    <a href="#" class="uk-icon-link"><i style="margin-right: 8px;" class="fab fa-twitter"></i></a>
    <a href="http://slowdsports.com/whatsapp.html" class="uk-icon-link"><i style="margin-right: 8px;" class="fab fa-whatsapp"></i></a>
    <a href="https://t.me/slowdsports" class="uk-icon-link"><i style="margin-right: 8px;" class="fa fa-paper-plane"></i></a>
    <span>//</span>
   </p>
  </center>
  <hr>
  <!--/SOCIAL-->
   
      <div class="uk-container uk-width-auto">
   <!--TABLE-->
    <script src="http://slowdsports.com/js/timer7.js"></script><script>t5am();t530am();t6am();t630am();t7am();t730am();t8am();t830am();t9am();t930am();t10am();t1030am();t11am();t1130am();t12am();t1230am();t1pm();t130pm();;t2pm();t230pm();;t3pm();t330pm();;t4pm();t430pm();;t5pm();t530pm();;t6pm();t630pm();;t7pm();t730pm();;t8pm();t830pm();t9pm();t930pm();;t10pm();t1030pm();</script>
         
    <!--FILTER-->          
         <p>Filter By Competition:</p>
          <div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
    <nav class="uk-navbar-container" uk-navbar style="position: relative; z-index: 980;">
        <div class="uk-navbar-left">

            <ul class="uk-subnav uk-subnav-pill">
        <!-- UEFA CHAMPIONS LEAGUE -->
        <li><a href="#ucl" uk-scroll><img alt="UEFA CHAMPIONS LEAGUE" class="competition ucl" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>
        <!-- UEFA EUROPA LEAGUE --
        <li><a href="#uel" uk-scroll><img alt="UEFA EUROPA LEAGUE" class="competition uel" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>
        <!-- PREMIER LEAGUE --
        <li><a href="#premier" uk-scroll><img alt="PREMIER LEAGUE" class="competition premier" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>
        <!-- EFL CUP --
        <li><a href="#efl" uk-scroll><img alt="EFL CUP" class="competition eflcup" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>
        <!-- FA CUP -->
        <li><a href="#facup" uk-scroll><img alt="FA CUP" class="competition facup" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>
        <!-- LA LIGA SANTANDER - SMARTBANK --
        <li><a href="#laliga" uk-scroll><img alt="LA LIGA SANTANDER" class="competition laliga" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>        
        <!-- COPA DEL REY --
        <li><a href="#copadelrey" uk-scroll><img alt="COPA DEL REY" class="competition copadelrey" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>
        <!-- SERIE A --
        <li><a href="#seriea" uk-scroll><img alt="SERIE A" class="competition seriea" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>
        <!-- COPPA ITALIA --
        <li><a href="#coppaitalia" uk-scroll><img alt="COPPA ITALIA" class="competition coppaitalia" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>
        <!-- BUNDESLIGA --
        <li><a href="#bundesliga" uk-scroll><img alt="BUNDESLIGA" class="competition bundesliga" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>
        <!-- LIGUE 1 -->
        <li><a href="#ligue1" uk-scroll><img alt="LIGUE 1" class="competition ligue1" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>
        <!-- COUPE DE LA LIGUE --
        <li><a href="#coupedelaligue" uk-scroll><img alt="COUPE DE LA LIGUE" class="competition coupedelaligue" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>
        <!-- LIGA MX -->
        <li><a href="#ligamx" uk-scroll><img alt="LIGA MX" class="competition ligamx" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>
        <!-- COPA MX --
        <li><a href="#copamx" uk-scroll><img alt="COPA MX" class="competition copamx" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>
        <!-- MLS -->
        <li><a href="#mls" uk-scroll><img alt="MLS" class="competition mls" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>
        <!-- LIBERTADORES --
        <li><a href="#libertadores" uk-scroll><img alt="LIBERTADORES" class="competition libertadores" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>
        <!-- COPA SUDAMERICANA --
        <li><a href="#copasudamericana" uk-scroll><img alt="COPA SUDAMERICANA" class="competition sudamericana" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>
        <!-- LNFP --
        <li><a href="#lnfp" uk-scroll><img alt="LNFP" class="competition lnfp" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>
        <!-- FPD -->
        <li><a href="#fdp" uk-scroll><img alt="FPD" class="competition fpd" src="https://i.ibb.co/w0qg9JF/trans.png" alt=""></a></li>
        
        <!-- END Competitions -->       
        </ul>  

        </div>
    </nav>
</div>
    <!--//FILTER-->
       <table class="uk-table uk-table-small uk-table-divider uk-table-justify">
    <caption>Scheduled - Aug</caption>
    <thead>
        <tr class="center">
            <th style="text-align:center;">Competition</th>
            <th style="text-align:center;">Match</th>
            <th style="text-align:center;">Link</th>
            <th style="text-align:center;">Link</th>
        </tr>
    </thead>
    <tbody>
       
                   
       <!--LIGA-->
        <tr id="ucl" class="uk-table table-liga center">
            <td><img src="https://i.ibb.co/w0qg9JF/trans.png" alt="" class="competition ucl"></td>
            <td> <b>UEFA Champions League</b></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
       <!--/LIGA-->
                                  
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="t1pm">Aug 23</p>
            </td>
            <td>
            
            PSG vs Bayern München
            
            </td>
            <td>
            <a href="http://slowdsports.com/tv/channels/spc/ueles.php" class="uk-button uk-button-default" type="button"><i class="flag es"></i>Watch</a></td>
            
            <td><a href="http://slowdsports.com/tv/channels/ds/d2.php" class="uk-button uk-button-default" type="button"><i class="flag us"></i>Watch</a></td>
            <td>
            </td>
        </tr>
       <!--/MATCH-->
       
       <!--LIGA--
        <tr id="uel" class="uk-table table-liga center">
            <td><img src="https://i.ibb.co/w0qg9JF/trans.png" alt="" class="competition uel"></td>
            <td> <b>UEFA Europa League</b></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
       <!--/LIGA-->
       
        <!--MATCH--
        <tr class="center">
            <td>
                <p class="t1pm">Aug 21</p>
            </td>
            <td>
            
            Sevilla vs Inter
            
            </td>
            <td>
            <a href="http://slowdsports.com/tv/channels/spc/uel2es.php" class="uk-button uk-button-default" type="button"><i class="flag es"></i>Watch</a></td>
            
            <td><a href="http://slowdsports.com/tv/channels/ds/d2.php" class="uk-button uk-button-default" type="button"><i class="flag us"></i>Watch</a></td>
            <td>
            </td>
        </tr>
       <!--/MATCH-->
       
       <!--LIGA--
        <tr id="laliga" class="uk-table table-liga center">
            <td><img src="https://i.ibb.co/w0qg9JF/trans.png" alt="" class="competition laliga"></td>
            <td> <b>Liga Adelante - Promotion Playoffs</b></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
       <!--/LIGA-->
       
       <!--MATCH--
        <tr class="center">
            <td>
                <p class="t2pm">Aug 16</p>
            </td>
            <td>
            
            Elche vs Girona
            
            </td>
            
            <td></td>
            
            <td><a href="http://slowdsports.com/tv/channels/ds/d1.php" class="uk-button uk-button-default" type="button"><i class="flag es"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
       
       <!--LIGA-->
        <tr id="facup" class="uk-table table-liga center">
            <td><img src="https://i.ibb.co/w0qg9JF/trans.png" alt="" class="competition facup"></td>
            <td> <b>FA - Community Shield</b></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
       <!--/LIGA-->
                   
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="930pm">Aug 29</p>
            </td>
            <td>
            
            Arsenal vs Liverpool
            
            </td>
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag es"></i>Watch</a></td>
            
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag us"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
       
       <!--LIGA-->
        <tr id="ligue1" class="uk-table table-liga center">
            <td><img src="https://i.ibb.co/w0qg9JF/trans.png" alt="" class="competition ligue1"></td>
            <td> <b>Ligue 1</b></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
       <!--/LIGA-->
                       
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="t5am">Aug 23</p>
            </td>
            <td>
            
            AS Monaco vs Reims
            
            </td>
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag es"></i>Watch</a></td>
            
            <td><a href="http://slowdsports.com/soccer/event/spb/13.php" class="uk-button uk-button-default" type="button"><i class="flag us"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
                  
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="t7am">Aug 23</p>
            </td>
            <td>
            
            Montpellier vs OL
            
            </td>
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag es"></i>Watch</a></td>
            
            <td><a href="http://slowdsports.com/soccer/event/spb/14.php" class="uk-button uk-button-default" type="button"><i class="flag us"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
     
       <!--LIGA-->
        <tr id="mls" class="uk-table table-liga center">
            <td><img src="https://i.ibb.co/w0qg9JF/trans.png" alt="" class="competition mls"></td>
            <td> <b>MLS is Back Tournament</b></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
       <!--/LIGA-->
                                           
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="5pm">Aug 24</p>
            </td>
            <td>
            
            NYCFC vs Columbus Crew
            
            </td>
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag es"></i>Watch</a></td>
            
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag us"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
                          
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="5pm">Aug 25</p>
            </td>
            <td>
            
            DC United vs NE Revolution
            
            </td>
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag es"></i>Watch</a></td>
            
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag us"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
                          
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="530pm">Aug 25</p>
            </td>
            <td>
            
            Chicago Fire vs FC Cincinnati
            
            </td>
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag es"></i>Watch</a></td>
            
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag us"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
                          
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="530pm">Aug 25</p>
            </td>
            <td>
            
            Philadelphia Union vs NY Red Bulls
            
            </td>
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag es"></i>Watch</a></td>
            
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag us"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
                          
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="6pm">Aug 25</p>
            </td>
            <td>
            
            Montreal Impact vs Vancouver Whitecaps
            
            </td>
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag es"></i>Watch</a></td>
            
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag us"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
                          
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="630pm">Aug 25</p>
            </td>
            <td>
            
            Sporting KC vs Houston Dynamo
            
            </td>
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag es"></i>Watch</a></td>
            
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag us"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
                          
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="430pm">Aug 26</p>
            </td>
            <td>
            
            Orlando City vs Nasville
            
            </td>
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag es"></i>Watch</a></td>
            
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag us"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
                          
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="6pm">Aug 26</p>
            </td>
            <td>
            
            Inter Miami vs Atlanta United
            
            </td>
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag es"></i>Watch</a></td>
            
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag us"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
                          
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="630pm">Aug 26</p>
            </td>
            <td>
            
            FC Dallas vs Colorado Rapids
            
            </td>
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag es"></i>Watch</a></td>
            
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag us"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
                          
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="730pm">Aug 26</p>
            </td>
            <td>
            
            Real Salt Lake vs LAFC
            
            </td>
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag es"></i>Watch</a></td>
            
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag us"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
                          
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="830pm">Aug 26</p>
            </td>
            <td>
            
            LA Galaxy vs Seattle Sounders
            
            </td>
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag es"></i>Watch</a></td>
            
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag us"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
       
       <!--LIGA-->
        <tr id="ligamx" class="uk-table table-liga center">
            <td><img src="https://i.ibb.co/w0qg9JF/trans.png" alt="" class="competition ligamx"></td>
            <td> <b>Liga MX - Apertura</b></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
       <!--/LIGA-->
                                                                                   
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="t630pm">Aug 23</p>
            </td>
            <td>
            
            San Luis vs Cruz Azul
            
            </td>
            <td>
            </td>
            
            <td><a href="http://slowdsports.com/soccer/event/spb/8.php" class="uk-button uk-button-default" type="button"><i class="flag mx"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
                                                                                   
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="t8pm">Aug 23</p>
            </td>
            <td>
            
            Tijuana vs Puebla
            
            </td>
            <td>
            </td>
            
            <td><a href="http://slowdsports.com/soccer/event/spb/9.php" class="uk-button uk-button-default" type="button"><i class="flag mx"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
       
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="t8pm">Aug 24</p>
            </td>
            <td>
            
            Pachuca vs Mazatlán
            
            </td>
            
            <td></td>
            
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag mx"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
       
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="630pm">Aug 28</p>
            </td>
            <td>
            
            Puebla vs Toluca
            
            </td>
            
            <td></td>
            
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag mx"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
       
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="830pm">Aug 28</p>
            </td>
            <td>
            
            Mazatlán vs Tigres
            
            </td>
            
            <td></td>
            
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag mx"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
       
       <!--LIGA-->
        <tr id="fpd" class="uk-table table-liga center">
            <td><img src="https://i.ibb.co/w0qg9JF/trans.png" alt="" class="competition fpd"></td>
            <td> <b>Liga Promérica - Jornada 2</b></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
       <!--/LIGA-->
                                                                                   
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="t3pm">Aug 23</p>
            </td>
            <td>
            
            Grecia vs Pérez Zeledón
            
            </td>
            <td>
            </td>
            
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag cr"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
                                                                                   
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="t6pm">Aug 23</p>
            </td>
            <td>
            
            San Carlos vs Saprissa
            
            </td>
            <td>
            </td>
            
            <td><a href="#" class="uk-button uk-button-default" type="button"><i class="flag cr"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
                                                                                   
       <!--MATCH-->
        <tr class="center">
            <td>
                <p class="3pm">Suspended</p>
            </td>
            <td>
            
            <s>Cartaginés vs Jicaral</s>
            
            </td>
            <td>
            </td>
            
            <td><a href="http://slowdsports.com/tv" class="uk-button uk-button-default" type="button"><i class="flag cr"></i>Watch</a></td>
        </tr>
       <!--/MATCH-->
       
    </tbody>
</table>
       
      </div>
   <!--/TABLE-->
   
   <!--FOOTER-->
   <footer class="uk-section uk-section-small uk-section-muted footer">
    <div class="uk-container">
	<p class="uk-text-small uk-text-center">Website made by<a href="https://t.me/slowdmelendez360"> slowdmelendez360 </a>| Using <a href="http://getuikit.com" title="Visit UIkit 3 site" target="_blank" data-uk-tooltip><span data-uk-icon="uikit"></span></a></p>
	</div>
	</footer>
    <!--/FOOTER-->
    
    <!-- OFFCANVAS -->
		<div id="offcanvas-nav" data-uk-offcanvas="flip: true; overlay: true">
			<div class="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
				<button class="uk-offcanvas-close uk-close" type="button" data-uk-close></button>
				<ul class="uk-nav uk-nav-default">
                
				    <li class="uk-nav-header">Categories</li>
				    
					<li class="uk-active"><a class="nav-text" href="http://slowdsports.com/soccer/">
                    <img src="https://image.flaticon.com/icons/svg/3099/3099380.svg" width="12px" alt=""> Soccer</a></li>
                    <li><a class="nav-text" href="http://slowdsports.com/basket/">
                    <img src="https://image.flaticon.com/icons/svg/3076/3076850.svg" width="12px" alt=""> Basket</a></li>
                    <li><a class="nav-text" href="http://slowdsports.com/box/">
                    <img src="https://image.flaticon.com/icons/svg/889/889515.svg" width="12px" alt=""> Box</a></li>
                    <li><a class="nav-text" href="http://slowdsports.com/football/">
                    <img src="https://image.flaticon.com/icons/svg/1508/1508171.svg" width="12px" alt=""> Football</a></li>
                    <li><a class="nav-text" href="http://slowdsports.com/tennis/">
                    <img src="https://image.flaticon.com/icons/svg/2906/2906838.svg" width="12px" alt=""> Tennis</a></li>
                    <li><a class="nav-text" href="http://slowdsports.com/golf/">
                    <img src="https://image.flaticon.com/icons/svg/2906/2906838.svg" width="12px" alt=""> Golf</a></li>
                    <li><a class="nav-text" href="http://slowdsports.com/baseball/">
                    <img src="https://image.flaticon.com/icons/svg/3106/3106438.svg" width="12px" alt=""> Baseball</a></li>
                    <li><a class="nav-text" href="http://slowdsports.com/others/">
                    <img src="https://image.flaticon.com/icons/svg/2910/2910799.svg" width="12px" alt=""> Others</a></li>
                    <li><a class="nav-text" href="http://slowdsports.com/tv/">
                    <img src="https://image.flaticon.com/icons/svg/3075/3075918.svg" width="12px" alt=""> TV</a></li>
                    <li><a class="nav-text" href="http://slowdsports.com/dmca/">
                    <img src="https://image.flaticon.com/icons/svg/3288/3288394.svg" width="12px" alt=""> DMCA</a></li>
                    
					<li class="uk-nav-header">Download App</li>
					
					<li><a href="https://bit.ly/2EVoPLM" target="_blank"><span class="uk-margin-small-right"><img src="https://cdn.worldvectorlogo.com/logos/mega-icon.svg" width="14px" alt="" class=""></span> Server</a></li>
					
					<li><a href="https://bit.ly/30wivT9"><span class="uk-margin-small-right"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Play_Arrow_logo.svg/1200px-Google_Play_Arrow_logo.svg.png" width="12px" alt=""></span> Google Play</a></li>
					
					<li class="uk-nav-divider"></li>
					
					<li><a href="https:/t.me/slowdsports"><span class="uk-margin-small-right"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Telegram_alternative_logo.svg/1200px-Telegram_alternative_logo.svg.png" width="15px" alt=""></span> Join Telegram</a></li>
				</ul>
				<h3>About</h3>
				<p>SlowD Sports Watch Live Sports and Television online Streaming Entertainment from Top TV Channels like ABC, CBS, ESPN, ESPN2, NBC, Animal Planet, AXN, BBC, ITV, CNN, The CW, Discovery Channel, ESPN USA, Eurosport, FOX, FS1, FX, HBO, MTV, National Geographic, SHOWTIME, Sky Sports, SPIKE, USA Network, TBS, TNT and much more. Watch live Sport like UFC, Boxing, Basketball, NBA, Baseball, MLB, Football, NFL, Tennis ATP and WTA, Premier League, Hockey, NHL, College Football,College Basketball, NCCA, Golf, PGA, Motorsport, NASCAR, Formula 1, Cricket here in live streaming. Always find working live feeds and streams for any sports you love!. We Always do our best to get you the best HD Streams to watch Live Sports Online. Enjoy streaming live Sports and Television.
                SlowD Sports does not host, upload or control any broadcasts or media files. All streams and videos found here are shared by sports fans around the world and are available through sites like Twitch, Ustream and so on. We simply help making the search for streams and videos easier, and are not responsible for any infringements. for that please contact appropriate media file owners/hosters. For claims, suggestions, or inquiries contact us at slowdsports@gmail.com or read more about our DMCA polices at: <a href="dmca">DMCA</a> page.</p>
			</div>
		</div>
		<!-- /OFFCANVAS -->
   
       <!-- BOTTOM BAR -->
		<div class="uk-section uk-section-xsmall uk-section-default uk-position-bottom uk-position-fixed" style="border-top: 1px solid #f2f2f2">
			<div class="uk-container uk-container-small uk-text-small">
				<div class="uk-grid" data-uk-grid>
					<div class="uk-width-expand">
						<a href="https://bit.ly/30wivT9" class="uk-link-reset"><span data-uk-icon="icon: arrow-down"></span> <strong>Download our App <i class="fab fa-android"></i></strong>
						<span class="uk-visible@s">- If you like our work, you will love our app!</span></a>
					</div>
					<div class="uk-width-auto uk-text-right">
						<a href="https://bit.ly/30wivT9" class="uk-icon-link"><img style="margin-right: 8px;" width="20" src="https://cdn.iconscout.com/icon/free/png-256/google-play-9-624929.png" alt=""></a>|
						<a href="https://bit.ly/2EVoPLM" class="uk-icon-link"><img style="margin-right: 8px;" width="20" src="https://image.flaticon.com/icons/png/512/873/873184.png" alt=""></a>|
						<a href="http://www.appcreator24.com/app1191578" class="uk-icon-link"><img style="margin-right: 8px;" width="25" src="https://simpleicon.com/wp-content/uploads/cloud-download.svg" alt=""></a>
					</div>
				</div>
			</div>
		</div>
		<!-- /BOTTOM BAR -->
    
    <!--SCRIPTS-->
       <script src="https://cdn.jsdelivr.net/npm/uikit@latest/dist/js/uikit.min.js"></script>
       <script src="https://cdn.jsdelivr.net/npm/uikit@latest/dist/js/uikit-icons.min.js"></script>        
    <!--/SCRIPTS-->
    </body>
</html>
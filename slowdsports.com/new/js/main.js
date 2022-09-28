let navbar = `
<!--HEADER-->
            <header id="header" style="background-color: #fff;" data-uk-sticky="show-on-up: true; animation: uk-animation-fade; media: @l">
			<div class="uk-container">
				<nav id="navbar" data-uk-navbar="mode: click;">

					<div class="uk-navbar-left nav-overlay uk-visible@m">
						<ul class="uk-navbar-nav">
							<li class="uk-"><a class="nav-text" href="http://slowdsports.com/soccer/">Soccer</a></li>
                            <li class="uk-active"><a class="nav-text" href="http://slowdsports.com/basket/">Basket</a></li>
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
		<!--/HEADER-->
`;
for(const ele of document.getElementsByClassName("navbar")){ele.innerHTML=(navbar)};

// FILTROS

let categFilter = `
<!--CATEG-FILTERS-->
       <div uk-filter="target: .js-filter">
    <p>Fliter By Category:</p>
    <ul class="uk-subnav uk-subnav-pill">
        <li uk-filter-control=".tag"><a href="#"><i class="fa fa-grip-lines-vertical"></i>
        All</a></li>
        <li uk-filter-control=".tag-sports"><a href="#"><i class="fa fa-futbol"></i>
        Sports</a></li>
        <li uk-filter-control=".tag-entertainment"><a href="#"><i class="fa fa-person-booth"></i>
        Entertainment</a></li>
        <li uk-filter-control=".tag-culture"><a href="#"><i class="fa fa-brain"></i>
        Culture</a></li>
        <li uk-filter-control=".tag-news"><a href="#"><i class="fa fa-newspaper"></i>
        News</a></li>
        <li uk-filter-control=".tag-music"><a href="#"><i class="fa fa-music"></i>
        Music</a></li>
    </ul>
    <hr>
    <!--/CATEG-FILTERS-->
`;
for(const ele of document.getElementsByClassName("categFilter")){ele.innerHTML=(categFilter)};

let langFilter = `
<!--LANG-FILTERS-->
       <div uk-filter="target: .js-filter">
    <p>Filter By Country | Language:</p>
    <ul class="uk-subnav uk-subnav-pill">
        <li uk-filter-control=".tag"><a href="#"><i class="fa fa-grip-lines-vertical"></i>
        All</a></li>
        <li uk-filter-control=".tag-ar"><a href="#"><i class="ar flag"></i>
        Argentina</a></li>
        <li uk-filter-control=".tag-au"><a href="#"><i class="au flag"></i>
        Australia</a></li>
        <li uk-filter-control=".tag-ca"><a href="#"><i class="ca flag"></i>
        Cannada</a></li>
        <li uk-filter-control=".tag-co"><a href="#"><i class="co flag"></i>
        Colombia</a></li>
        <li uk-filter-control=".tag-ch"><a href="#"><i class="ch flag"></i>
        Chile</a></li>
        <li uk-filter-control=".tag-de"><a href="#"><i class="de flag"></i> Germany</a></li>
        <li uk-filter-control=".tag-hn"><a href="#"><i class="hn flag"></i> Honduras</a></li>
        <li uk-filter-control=".tag-it"><a href="#"><i class="it flag"></i>
        Italy</a></li>
        <li uk-filter-control=".tag-mx"><a href="#"><i class="mx flag"></i>
        Mexico</a></li>
        <li uk-filter-control=".tag-es"><a href="#"><i class="es flag"></i> Spain</a></li>
        <li uk-filter-control=".tag-tu"><a href="#"><i class="turkey flag"></i> Turkey</a></li>
        <li uk-filter-control=".tag-us"><a href="#"><i class="us flag"></i>
        USA</a></li>
        <li uk-filter-control=".tag-uk"><a href="#"><i class="england flag"></i> 
        UK</a></li>
    </ul>
    <hr>
    <!--/LANG-FILTERS-->
`;
for(const ele of document.getElementsByClassName("langFilter")){ele.innerHTML=(langFilter)};

// OFFCANVAS

let offcanvas = `
<!-- OFFCANVAS -->
		<div id="offcanvas-nav" data-uk-offcanvas="flip: true; overlay: true">
			<div class="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
				<button class="uk-offcanvas-close uk-close" type="button" data-uk-close></button>
				<ul class="uk-nav uk-nav-default">

				    <li class="uk-nav-header">Categories</li>

					<li class="uk-"><a class="nav-text" href="http://slowdsports.com/soccer/">
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
                    <li class="uk-active"><a class="nav-text" href="http://slowdsports.com/tv/">
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
`;
for(const ele of document.getElementsByClassName("offcanvas")){ele.innerHTML=(offcanvas)};
const container = document.getElementById("canales");
var img = "https://i.ibb.co/w0qg9JF/trans.png";

channelList.forEach(result => {

  // Construct card content
const content = `

<li data-name="${result.name}" class="tag tag-${result.categoria} tag-${result.flag}">
<a class="uk-link-toggle uk-width-1-3@m" href="${result.url}">
    <div>
        <div class="uk-card uk-card-default uk-card-hover">
        <div class="uk-card-badge uk-label tv-country"><i class="flag ${result.flag}"></i>${result.flag}</div>
            <div class="uk-card-media-top">
                <img style="min-width: 80px;" width="80px" height="100%" class="${result.name}" src="${img}" alt="${result.name}">
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">${result.name}</h3>
            </div>
        </div>
    </div>
</a>
</li>

    `;

  // Insertar las tarjetas creadas al container
container.innerHTML += content;

});
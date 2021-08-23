var img = "https://i.ibb.co/w0qg9JF/trans.png";
var hlink;

const teamDataOne = [
  {
    name: "101",
    title: "málaga 101",  
    link: "",
    imgClass: "malaga101",
    dDown: 'data-toggle="dropdown"',
      // OPTS
    dDown_Opts: 
      '<a href="go:malaga101" target="_blank"><li class="dropdown-item">Directo</li></a>                                                                                                <a href="http://slowdsports000.webhostapp/cast.html?src=malaga101" target="_blank"><li class="dropdown-item">Cast</li></a>',
  },
  {
    name: "La 1",
    title: "RTVE La 1",  
    link: "",
    imgClass: "la1",
    dDown: 'data-toggle="dropdown"',
      // OPTS
    dDown_Opts: 
      '<a href="go:la1" target="_blank"><li class="dropdown-item">Directo</li></a>                                                                                                <a href="http://slowdsports000.webhostapp/cast.html?src=la1" target="_blank"><li class="dropdown-item">Cast</li></a>',
  },
  {
    name: "La 2",
    title: "RTVE La 2",  
    link: "",
    imgClass: "la2",
    dDown: 'data-toggle="dropdown"',
      // OPTS
    dDown_Opts: 
      '<a href="go:la2" target="_blank"><li class="dropdown-item">Directo</li></a>                                                                                                <a href="http://slowdsports000.webhostapp/cast.html?src=la2" target="_blank"><li class="dropdown-item">Cast</li></a>',
  },
  {
    name: "Uno",
    title: "Uno",  
    link: "",
    imgClass: "uno",
    dDown: 'data-toggle="dropdown"',
      // OPTS
    dDown_Opts: 
      '<a href="go:uno" target="_blank"><li class="dropdown-item">Directo</li></a>                                                                                                <a href="http://slowdsports000.webhostapp/cast.html?src=uno" target="_blank"><li class="dropdown-item">Cast</li></a>',
  },
    
    
];

const container = document.getElementById("locales");

teamDataOne.forEach(result => {
  // Construct card content
  const content = `
<div class="col-6 col-sm-4">  
    <div class="dropdown">
        <a class="card darkolorbg text-white card-canal card-link text-white" href="${result.link}" ${result.dDown}>
        <div class="card-body">
        <div class="d-flex justify-content-center">
            <img class="canal-img ${result.imgClass}" src="${img}" alt="">
        </div>
            <div class="d-flex justify-content-center"><h5>${result.name} <span class="hlstatus"></span> </div>
        </div>
        </a>
        <ul class="dropdown-menu">
        ${result.dDown_Opts}
        </ul>
        </div>
</div>
    `;
  // Append newyly created card element to the container
  container.innerHTML += content;
});

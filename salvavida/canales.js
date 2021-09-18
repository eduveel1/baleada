// LINK DE LOS CANALES

let telecadena = "telecadena.m3u8";
let tsi = "tsi.m3u8";
let canal5 = "canal5.m3u8"

let tigohn = "go:tigohn";
let tdtvp = "go:tdtvp";

// CANAL DEL EQUIPO

var olimpia = telecadena;
var marathon = telecadena;
var motagua = telecadena;
var vida = telecadena;
var lobos = telecadena;
var realespana = telecadena;
var realespana = minas;
var platense = telecadena;
var realsociedad = telecadena;
var hondurasprogreso = telecadena;
var victoria = telecadena;

 

let SALOlimpia = `
<a href="//slowdsports.000webhostapp.com/salvavida.php?g=olimpia">
<li class="canalito list-group-item darkolorbg blancolor">
<i class="hn flag"></i> Local | HD</li>
</a>
`;
for (const ele of document.getElementsByClassName("saltv-olimpia")){ele.innerHTML=(SALOlimpia)}

let SALMarathon = `
<a href="//slowdsports.000webhostapp.com/salvavida.php?g=marathon">
<li class="canalito list-group-item darkolorbg blancolor">
<i class="hn flag"></i> Local | HD</li>
</a>
`;
for (const ele of document.getElementsByClassName("saltv-marathon")){ele.innerHTML=(SALMarathon)}

let SALMotagua = `
<a href="//slowdsports.000webhostapp.com/salvavida.php?g=motagua">
<li class="canalito list-group-item darkolorbg blancolor">
<i class="hn flag"></i> Local | HD</li>
</a>
`;
for (const ele of document.getElementsByClassName("saltv-motagua")){ele.innerHTML=(SALMotagua)}

let SALVida = `
<a href="//slowdsports.000webhostapp.com/salvavida.php?g=vida">
<li class="canalito list-group-item darkolorbg blancolor">
<i class="hn flag"></i> Local | HD</li>
</a>
`;
for (const ele of document.getElementsByClassName("saltv-vida")){ele.innerHTML=(SALVida)}

let SALLobos = `
<a href="//slowdsports.000webhostapp.com/salvavida.php?g=lobos">
<li class="canalito list-group-item darkolorbg blancolor">
<i class="hn flag"></i> Local | HD</li>
</a>
`;
for (const ele of document.getElementsByClassName("saltv-lobos")){ele.innerHTML=(SALLobos)}

let SALRealEspana = `
<a href="//slowdsports.000webhostapp.com/salvavida.php?g=realespana">
<li class="canalito list-group-item darkolorbg blancolor">
<i class="hn flag"></i> Local | HD</li>
</a>
`;
for (const ele of document.getElementsByClassName("saltv-realespana")){ele.innerHTML=(SALRealEspana)}

let SALRealdeMinas = `
<a href="//slowdsports.000webhostapp.com/salvavida.php?g=minas">
<li class="canalito list-group-item darkolorbg blancolor">
<i class="hn flag"></i> Local | HD</li>
</a>
`;
for (const ele of document.getElementsByClassName("saltv-minas")){ele.innerHTML=(SALRealdeMinas)}

let SALPlatense = `
<a href="//slowdsports.000webhostapp.com/salvavida.php?g=platense">
<li class="canalito list-group-item darkolorbg blancolor">
<i class="hn flag"></i> Local | HD</li>
</a>
`;
for (const ele of document.getElementsByClassName("saltv-platense")){ele.innerHTML=(SALPlatense)}

let SALRealSociedad = `
<a href="//slowdsports.000webhostapp.com/salvavida.php?g=realsociedad">
<li class="canalito list-group-item darkolorbg blancolor">
<i class="hn flag"></i> Local | HD</li>
</a>
`;
for (const ele of document.getElementsByClassName("saltv-realsociedad")){ele.innerHTML=(SALRealSociedad)}

let SALHondurasProgreso = `
<a href="//slowdsports.000webhostapp.com/salvavida.php?g=hondurasprogreso">
<li class="canalito list-group-item darkolorbg blancolor">
<i class="hn flag"></i> Local | HD</li>
</a>
`;
for (const ele of document.getElementsByClassName("saltv-hondurasprogreso")){ele.innerHTML=(SALHondurasProgreso)}

let SALVictoria = `
<a href="//slowdsports.000webhostapp.com/salvavida.php?g=victoria">
<li class="canalito list-group-item darkolorbg blancolor">
<i class="hn flag"></i> Local | HD</li>
</a>
`;
for (const ele of document.getElementsByClassName("saltv-victoria")){ele.innerHTML=(SALVictoria)}
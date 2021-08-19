$.get(hlink).done(function test () 
{
for (const ele of document.getElementsByClassName("hlstatus")) {ele.innerHTML = 
"<span class=''><i class='fa fa-circle faa-flash animated'></i></span>"
//  alert("success");
}}).fail(function () {
for (const ele of document.getElementsByClassName("hlstatus")) {ele.innerHTML = 
"<span class=''><i class='fa fa-exclamation-triangle faa-flash animated'></i></span>";     
//   alert("failed.");
}});
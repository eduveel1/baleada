console.log("Script cargado.");

// TITLE
var title = document.createElement("title");
title.content = "SlowD Sports";
document.head.appendChild(title);

// META DESCRIPTION
var descripcion = document.createElement("meta");
descripcion.name = "description";
descripcion.content = "Eventos deportivos en vivo. Televisión premium y abierta online, como partidos de futbol soccer, juegos de Basketball de la NBA, NHL en Vivo, eventos de MLB en directo, NASCAR, F1.";
// document.head.appendChild(descripcion);
document.getElementsByTagName('head')[0].appendChild(descripcion);

// META CHARSET
var charset = document.createElement("meta charset");
charset.content = "UTF-8";
// document.head.appendChild(charset);
document.getElementsByTagName('head')[1].appendChild(charset);

// META KEYWORDS
var keywords = document.createElement("meta");
keywords.name = "keywords";
keywords.content = "Partidos, juegos, eventos, futbol, mlb, nhl, nfl, formula 1, nba, laliga, premier, ligue1, bundesliga, champions league, europa league, smartbank, directo, gratis, toros, deportes, tv, m3u, m3u8, hd, en vivo, live stream, watch, free, tennis, hockey, racing, golf, cycling, motorsports, calcio, seriea,";
document.head.appendChild(keywords);

// META ROBOTS
var robots = document.createElement("meta");
robots.name = "robots";
robots.content = "index";
document.head.appendChild(robots);

// META ROBOTS NO FOLLOW
var robotsNF = document.createElement("meta");
robotsNF.name = "robots";
robotsNF.content = "nofollow";
document.head.appendChild(robotsNF);

// META VIEWPORT
var viewport = document.createElement("meta");
viewport.name = "viewport";
viewport.content = "width=device-width, initial-scale=1";
document.head.appendChild(viewport);
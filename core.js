function Sprite(name,x,y,costumes){this.x = x;this.y = y;this.costumes = costumes;this.display=true;this.frame = function (){};this.follows = null;this.costume = 0;this.dir=0;this.name = name;document.body.innerHTML += "<img id='" + name + "'>";gamemap.draw(this)}
var gamemap = {};
gamemap.draw = function (sprite){
sprite.frame();
var s = document.getElementById(sprite.name).style;
s.position = "absolute";
s.top = sprite.y;
s.left = sprite.x;
s.backgroundImage = "url(" + sprite.costumes[sprite.costume] + ")";
s.transform = "rotateZ(" + sprite.dir + "deg)";
s.display = sprite.display ? "block" : "none";}
gamemap.addEventListener = function (name,sprite,hand){
document.getElementById(sprite.name).addEvemtListener(name,hand);
gamemap.framerate = 300;
gamemap.start = function (){gamemap.interval = setInterval(function (){for(var i = 0;i < gamemap.redraw.length;i++){gamemap.draw(gamemap.redraw[i])}},gamemap.framerate);};
gamemap.bg = new Sprite("bg",0,0,gamemap.samples.bg.white);
gamemap.redraw = [gamemap.bg];
Sprite.prototype.draw = function (){gamemap.draw(this)};
gamemap.getSpriteById = function (id){
var s = document.getElementById(id).style;
return {x: s.left, y: s.top, costume: 0,costumes: s.backgroundImage.slice(4,s.backgroundImage.length - 1),name: id};}
function Position(x,y){this.x = x;this.y = y;}
function Shape(x,y,x2,y2){this.x = x;this.y2 = y2;this.y = y;this.x2 = x2}
Sprite.prototype.touching = function (who){
var me = document.getElementById(this.name);
var u = document.getElementById(who.name);
var mepos = new Position(this.x,this.y);
var upos = new Position(who.x,who.y);
var mes = new Shape(mepos.x,mepos.y,me.style.width + mepos.x,me.style.height + mepos.y);
var us = new Shape(upos.x,upos.y,u.style.width + upos.x,u.style.height + upos.y);
return mes.x 
}

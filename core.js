function Sprite(name,x,y,costumes){this.x = x;this.y = y;this.costumes = costumes;this.display=true;this.costume = 0;this.dir=0;this.name = name;document.body.innerHTML += "<img id='" + name + "'>";gamemap.draw(this)}
var gamemap = {};
gamemap.draw = function (sprite){
var s = document.getElementById(sprite.name).style;
s.position = "absolute";
s.top = sprite.y;
s.left = sprite.x;
s.backgroundImage = "url(" + sprite.costumes[sprite.costume] + ")";
s.transform = "rotateZ(" + sprite.dir + "deg)";
s.display = sprite.display ? "block" : "none";}
gamemap.addEventListener = function (name,sprite,hand){
document.getElementById(sprite.name).addEvemtListener(name,hand);
gamemap.redraw = [gamemap.bg];
gamemap.framerate = 300;
gamemap.interval = setInterval(function (){for(var i = 0;i < gamemap.redraw.length;i++){gamemap.draw(gamemap.redraw[i])}},gamemap.framerate);
gamemap.bg = new Sprite("bg",0,0,null);

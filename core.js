function Gamemap(id){this.id = id;this.scenes = {
open: function (sc){document.getElementById(sc).removeAttribute("hidden")},
close: function (sc){document.getElementById(sc).setAttribute("hidden","hidden")} 
};
this.sprites = {};
for(var gmi = 0;gmi < document.getElementsByTagName("sprite");gmi++){
this.sprites[document.getElementsByTagName("sprite")[gmi].getAttribute("name")] = document.getElementsByTagName("sprite")[gmi].style;
};

};

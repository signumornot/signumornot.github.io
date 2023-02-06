function mytotem() 
    { 
    var beast = ['Барс', 'Сова'];
var beastrand = Math.floor(Math.random()*beast.length);
var beastvalue = beast[beastrand];

var char = ['« <b>Независимость</b> »', '« <b>Хитрость</b> »'];
var charrand = Math.floor(Math.random()*char.length);
var charvalue = char[charrand];
      
var pic = ['<img src="http://d.zaix.ru/6SXg.png" border="0">', '<img src="http://d.zaix.ru/htFZ.png" border="0">'];
var picvalue = pic[beastrand];

document.getElementById("beast").innerHTML = beastvalue;
document.getElementById("char").innerHTML = charvalue;
document.getElementById("pic").innerHTML = picvalue;
    }

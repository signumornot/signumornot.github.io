function mytotem() 
    { 
    var beast = ['Барс', 'Бизон', 'Ворон', 'Лиса', 'Змея'];
var beastrand = Math.floor(Math.random()*beast.length);
var beastvalue = beast[beastrand];

var char = ['Независимость', 'Свободолюбие', 'Хитрость', 'Благородство', 'Внимательность', 'Хладнокровие'];
var charrand = Math.floor(Math.random()*char.length);
var charvalue = char[charrand];
      
var pic = ['<img src="http://d.zaix.ru/6SXg.png" border="0">', '<img src="http://d.zaix.ru/htFZ.png" border="0">'];
var picrand = Math.floor(Math.random()*pic.length);
var picvalue = pic[picrand];

document.getElementById("beast").innerHTML = beastvalue;
document.getElementById("char").innerHTML = charvalue;
document.getElementById("pic").innerHTML = picvalue;
    }

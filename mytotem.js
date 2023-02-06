function mytotem() 
    { 
    var beast = [
                'Барс', 
                'Сова', 
                'Архар',
                'Барсук',
                'Белка',
                'Бизон',
                'Вепрь',
                'Волк',
                'Ворон',
                'Дикобраз',
                'Енот',
                'Журавль',
                'Заяц',
                'Змея',
                'Карибу',
                'Койот',
                'Конь',
                'Кугуар',
                'Лань',
                'Лиса',
                'Лось',
                'Медведь',
                'Орёл',
                'Песец',
                'Росомаха',
                'Рысь',
                'Сокол'];
const beastrand = Math.floor(Math.random()*beast.length);
const beastvalue = beast[beastrand];
        
var pic = [
    '<img src="http://d.zaix.ru/6SXg.png" border="0">', 
    '<img src="http://d.zaix.ru/htFZ.png" border="0">', 
    '<img src="http://d.zaix.ru/9xB4.png" border="0">',
    '<img src="http://d.zaix.ru/8azL.png" border="0">',
    '<img src="http://d.zaix.ru/7MaK.png" border="0">',
    '<img src="http://d.zaix.ru/6HoA.png" border="0">',
    '<img src="http://d.zaix.ru/6nHR.png" border="0">',
    '<img src="http://d.zaix.ru/6T5t.png" border="0">',
    '<img src="http://d.zaix.ru/6r2y.png" border="0">',
    '<img src="http://d.zaix.ru/6qdx.png" border="0">',
    '<img src="http://d.zaix.ru/9yuU.png" border="0">',
    '<img src="http://d.zaix.ru/6rDK.png" border="0">',
    '<img src="http://d.zaix.ru/6HoU.png" border="0">',
    '<img src="http://d.zaix.ru/6Hoa.png" border="0">',
    '<img src="http://d.zaix.ru/7M8Q.png" border="0">',
    '<img src="http://d.zaix.ru/9xC8.png" border="0">',
    '<img src="http://d.zaix.ru/9xjI.png" border="0">',
    '<img src="http://d.zaix.ru/6Hoh.png" border="0">',
    '<img src="https://d.zaix.ru/6rDX.png" border="0">',
    '<img src="https://d.zaix.ru/6p8E.png" border="0">',
    '<img src="http://d.zaix.ru/8azx.png" border="0">',
    '<img src="http://d.zaix.ru/6Hpw.png" border="0">',
    '<img src="http://d.zaix.ru/6SuQ.png" border="0">',
    '<img src="http://d.zaix.ru/6T3U.png" border="0">',
    '<img src="http://d.zaix.ru/6Suz.png" border="0">',
    '<img src="http://d.zaix.ru/6Hop.png" border="0">',
    '<img src="http://d.zaix.ru/6SuH.png" border="0">'
          ];
var picrand = beastrand;
var picvalue = pic[picrand];

var char = [
            '⠀« <b>Независимость</b> »⠀', 
            '⠀« <b>Хитрость</b> »⠀', 
            '⠀« <b>Благость</b> »⠀', 
            '⠀« <b>Самоотверженность</b> »⠀', 
            '⠀« <b>Отзывчивость</b> »⠀', 
            '⠀« <b>Решительность</b> »⠀', 
            '⠀« <b>Честность</b> »⠀',
            '⠀« <b>Острый взор</b> »⠀',
            '⠀« <b>Вдохновение</b> »⠀',
            '⠀« <b>Дружелюбие</b> »⠀',
            '⠀« <b>Общительность</b> »⠀',
            '⠀« <b>Яркость</b> »⠀',
            '⠀« <b>Чуткость</b> »⠀',
            '⠀« <b>Обдуманность</b> »⠀',
            '⠀« <b>Вдумчивость</b> »⠀'];
var charrand = Math.floor(Math.random()*char.length);
var charvalue = char[charrand];

document.getElementById("beast").innerHTML = beastvalue;
document.getElementById("char").innerHTML = charvalue;
document.getElementById("pic").innerHTML = picvalue;
    }

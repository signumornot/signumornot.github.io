function names() 
    { 
    var second = ['хвостик', 'хвостичек', 'хвостушек', 'хвостенький', 'глазик', 'глазичек', 'глазушек', 'глазенький', 'носик', 'носичек', 'носушек', 'носенький', 'лапик', 'лапичек', 'лапушек', 'лапенький', 'грудик', 'грудичек', 'грудушек', 'груденький', 'щёчек', 'щёкушек', 'щёкенький', 'шёрстик', 'шёрстушек', 'шёрстенький', 'усик', 'усичек', 'усенький', 'шеюшек', 'шеенький', 'спинушек'];
var secondrand = Math.floor(Math.random()*second.length);
var secondvalue = second[secondrand];

var first = ['Снего', 'Снежно', 'Волко', 'Волче', 'Лёдо', 'Льдинко', 'Огне', 'Зверо', 'Птице', 'Пернато', 'Древо', 'Ягодно'];
var firstrand = Math.floor(Math.random()*first.length);
var firstvalue = first[firstrand];

const returnedString =
    [firstvalue, secondvalue].join("");
document.getElementById("isid").innerHTML = returnedString; 
    }

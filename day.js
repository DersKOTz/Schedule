Date.prototype.getWeek = function() {
   var onejan = new Date(this.getFullYear(), 0, 1);
   return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() - 2) / 7);
}
var d = new Date();
 var n = d.getDay();
 var d=new Date();
 var d=new Date();
    var t=d.toLocaleTimeString();
    var today = new Date();     
    var hours=today.getHours();
    var minutes=today.getMinutes();
    console.log (n,"День недели");
    console.log (hours,"Час дня");
    console.log (minutes,"Минута");

var weekNumber = (new Date()).getWeek();
if (weekNumber % 2) {

if( n == 0 ) 
 document.getElementById('sunday12').style.display = 'inline';
 else;
 if( n == 1 ) {
 document.getElementById('monday1').style.display = 'inline';
 if ( hours >= 16 && minutes >= 20)
document.write("Кончилась 4 пара");
else if ( hours >= 15 && minutes >= 35)
document.write("Сейчас идёт 4 пара (2 час)");
else if ( hours >= 15 && minutes >= 30)
document.write("Перемена5");
else if ( hours >= 14 && minutes >= 45)
document.write("Сейчас идёт 4 пара (1 час)");
else if ( hours >= 14 && minutes >= 35)
document.write("Перемена4")
else if ( hours >= 13 && minutes >= 50)
document.write("Сейчас идёт 3 пара (2 час)");
else if ( hours >= 13 && minutes >= 45)
document.write("Перемена3");
else if ( hours >= 13 && minutes >= 0)
document.write("Сейчас идёт 3 пара (1 час)");
else if ( hours >= 12 && minutes >= 20)
document.write("Обед");
else if ( hours >= 11 && minutes >= 35)
document.write("Сейчас идёт 2 пара (2 час)");
else if ( hours >= 11 && minutes >= 30)
document.write("Перемена2");
else if ( hours >= 10 && minutes >= 45)
document.write("Сейчас идёт 2 пара (1 час)");
else if ( hours >= 10 && minutes >= 25)
document.write("Завтрак");
else if ( hours >= 9 && minutes >= 40)
document.write("Сейчас идёт 1 пара (2 час)");
else if ( hours >= 9 && minutes >= 35)
document.write("Перемена1");
else if ( hours >= 8 && minutes >= 50)
document.write("Сейчас идёт 1 пара (1 час)");
}
 else; 
 if( n == 2 ) {
 document.getElementById('tuesday1').style.display = 'inline';
 if ( hours >= 15 && minutes >= 45)
document.write("Кончилась 4 пара");
else if ( hours >= 15 && minutes >= 0)
document.write("Сейчас идёт 4 пара (2 час)");
else if ( hours >= 14 && minutes >= 55)
document.write("Перемена5");
else if ( hours >= 14 && minutes >= 10)
document.write("Сейчас идёт 4 пара (1 час)");
else if ( hours >= 14 && minutes >= 0)
document.write("Перемена4")
else if ( hours >= 13 && minutes >= 15)
document.write("Сейчас идёт 3 пара (2 час)");
else if ( hours >= 13 && minutes >= 10)
document.write("Перемена3");
else if ( hours >= 12 && minutes >= 25)
document.write("Сейчас идёт 3 пара (1 час)");
else if ( hours >= 11 && minutes >= 45)
document.write("Обед");
else if ( hours >= 11 && minutes >= 0)
document.write("Сейчас идёт 2 пара (2 час)");
else if ( hours >= 10 && minutes >= 55)
document.write("Перемена2");
else if ( hours >= 10 && minutes >= 10)
document.write("Сейчас идёт 2 пара (1 час)");
else if ( hours >= 9 && minutes >= 50)
document.write("Завтрак");
else if ( hours >= 9 && minutes >= 5)
document.write("Сейчас идёт 1 пара (2 час)");
else if ( hours >= 9 && minutes >= 0)
document.write("Перемена1");
else if ( hours >= 8 && minutes >= 15)
document.write("Сейчас идёт 1 пара (1 час)");
 }
 else;
 if( n == 3 ) {
 document.getElementById('wednesday1').style.display = 'inline';
 if ( hours >= 15 && minutes >= 45)
document.write("Кончилась 4 пара");
else if ( hours >= 15 && minutes >= 0)
document.write("Сейчас идёт 4 пара (2 час)");
else if ( hours >= 14 && minutes >= 55)
document.write("Перемена5");
else if ( hours >= 14 && minutes >= 10)
document.write("Сейчас идёт 4 пара (1 час)");
else if ( hours >= 14 && minutes >= 0)
document.write("Перемена4")
else if ( hours >= 13 && minutes >= 15)
document.write("Сейчас идёт 3 пара (2 час)");
else if ( hours >= 13 && minutes >= 10)
document.write("Перемена3");
else if ( hours >= 12 && minutes >= 25)
document.write("Сейчас идёт 3 пара (1 час)");
else if ( hours >= 11 && minutes >= 45)
document.write("Обед");
else if ( hours >= 11 && minutes >= 0)
document.write("Сейчас идёт 2 пара (2 час)");
else if ( hours >= 10 && minutes >= 55)
document.write("Перемена2");
else if ( hours >= 10 && minutes >= 10)
document.write("Сейчас идёт 2 пара (1 час)");
else if ( hours >= 9 && minutes >= 50)
document.write("Завтрак");
else if ( hours >= 9 && minutes >= 5)
document.write("Сейчас идёт 1 пара (2 час)");
else if ( hours >= 9 && minutes >= 0)
document.write("Перемена1");
else if ( hours >= 8 && minutes >= 15)
document.write("Сейчас идёт 1 пара (1 час)");
 }
 else;
 if( n == 4 ) {
 document.getElementById('thursday1').style.display = 'inline'; 
 if ( hours >= 15 && minutes >= 45)
document.write("Кончилась 4 пара");
else if ( hours >= 15 && minutes >= 0)
document.write("Сейчас идёт 4 пара (2 час)");
else if ( hours >= 14 && minutes >= 55)
document.write("Перемена5");
else if ( hours >= 14 && minutes >= 10)
document.write("Сейчас идёт 4 пара (1 час)");
else if ( hours >= 14 && minutes >= 0)
document.write("Перемена4")
else if ( hours >= 13 && minutes >= 15)
document.write("Сейчас идёт 3 пара (2 час)");
else if ( hours >= 13 && minutes >= 10)
document.write("Перемена3");
else if ( hours >= 12 && minutes >= 25)
document.write("Сейчас идёт 3 пара (1 час)");
else if ( hours >= 11 && minutes >= 45)
document.write("Обед");
else if ( hours >= 11 && minutes >= 0)
document.write("Сейчас идёт 2 пара (2 час)");
else if ( hours >= 10 && minutes >= 55)
document.write("Перемена2");
else if ( hours >= 10 && minutes >= 10)
document.write("Сейчас идёт 2 пара (1 час)");
else if ( hours >= 9 && minutes >= 50)
document.write("Завтрак");
else if ( hours >= 9 && minutes >= 5)
document.write("Сейчас идёт 1 пара (2 час)");
else if ( hours >= 9 && minutes >= 0)
document.write("Перемена1");
else if ( hours >= 8 && minutes >= 15)
document.write("Сейчас идёт 1 пара (1 час)");
 }
 else;
 if( n == 5 ) {
 document.getElementById("friday1").style.display = 'inline'; 
 if ( hours >= 15 && minutes >= 45)
document.write("Кончилась 4 пара");
else if ( hours >= 15 && minutes >= 0)
document.write("Сейчас идёт 4 пара (2 час)");
else if ( hours >= 14 && minutes >= 55)
document.write("Перемена5");
else if ( hours >= 14 && minutes >= 10)
document.write("Сейчас идёт 4 пара (1 час)");
else if ( hours >= 14 && minutes >= 0)
document.write("Перемена4")
else if ( hours >= 13 && minutes >= 15)
document.write("Сейчас идёт 3 пара (2 час)");
else if ( hours >= 13 && minutes >= 10)
document.write("Перемена3");
else if ( hours >= 12 && minutes >= 25)
document.write("Сейчас идёт 3 пара (1 час)");
else if ( hours >= 11 && minutes >= 45)
document.write("Обед");
else if ( hours >= 11 && minutes >= 0)
document.write("Сейчас идёт 2 пара (2 час)");
else if ( hours >= 10 && minutes >= 55)
document.write("Перемена2");
else if ( hours >= 10 && minutes >= 10)
document.write("Сейчас идёт 2 пара (1 час)");
else if ( hours >= 9 && minutes >= 50)
document.write("Завтрак");
else if ( hours >= 9 && minutes >= 5)
document.write("Сейчас идёт 1 пара (2 час)");
else if ( hours >= 9 && minutes >= 0)
document.write("Перемена1");
else if ( hours >= 8 && minutes >= 15)
document.write("Сейчас идёт 1 пара (1 час)");
 }
 else;
 if( n == 6 ) {
 document.getElementById('saturday12').style.display = 'inline';
 if ( hours >= 14 && minutes >= 25)
document.write("Кончилась 4 пара");
else if ( hours >= 13 && minutes >= 45)
document.write("Сейчас идёт 4 пара (2 час)");
else if ( hours >= 13 && minutes >= 40)
document.write("Перемена7");
else if ( hours >= 13 && minutes >= 0)
document.write("Сейчас идёт 4 пара (1 час)");
else if ( hours >= 12 && minutes >= 50)
document.write("Перемена6")
else if ( hours >= 12 && minutes >= 10)
document.write("Сейчас идёт 3 пара (2 час)");
else if ( hours >= 12 && minutes >= 5)
document.write("Перемена5");
else if ( hours >= 11 && minutes >= 25)
document.write("Сейчас идёт 3 пара (1 час)");
else if ( hours >= 11 && minutes >= 15)
document.write("Перемена4");
else if ( hours >= 10 && minutes >= 35)
document.write("Сейчас идёт 2 пара (2 час)");
else if ( hours >= 10 && minutes >= 30)
document.write("Перемена3");
else if ( hours >= 9 && minutes >= 50)
document.write("Сейчас идёт 2 пара (1 час)");
else if ( hours >= 9 && minutes >= 40)
document.write("Перемена2");
else if ( hours >= 9 && minutes >= 0)
document.write("Сейчас идёт 1 пара (2 час)");
else if ( hours >= 8 && minutes >= 55)
document.write("Перемена1");
else if ( hours >= 8 && minutes >= 15)
document.write("Сейчас идёт 1 пара (1 час)");
 }
}

 else {
 var d = new Date();
 var n = d.getDay();
 var d=new Date();
 var d=new Date();
    var t=d.toLocaleTimeString();
    var today = new Date();     
    var hours=today.getHours();
    var minutes=today.getMinutes();
 if( n == 0 )
 document.getElementById('sunday12').style.display = 'inline';
 else;
 if( n == 1 ) {
 document.getElementById('monday12').style.display = 'inline';
 if ( hours >= 16 && minutes >= 20)
document.write("Кончилась 4 пара");
else if ( hours >= 15 && minutes >= 35)
document.write("Сейчас идёт 4 пара (2 час)");
else if ( hours >= 15 && minutes >= 30)
document.write("Перемена5");
else if ( hours >= 14 && minutes >= 45)
document.write("Сейчас идёт 4 пара (1 час)");
else if ( hours >= 14 && minutes >= 35)
document.write("Перемена4")
else if ( hours >= 13 && minutes >= 50)
document.write("Сейчас идёт 3 пара (2 час)");
else if ( hours >= 13 && minutes >= 45)
document.write("Перемена3");
else if ( hours >= 13 && minutes >= 0)
document.write("Сейчас идёт 3 пара (1 час)");
else if ( hours >= 12 && minutes >= 20)
document.write("Обед");
else if ( hours >= 11 && minutes >= 35)
document.write("Сейчас идёт 2 пара (2 час)");
else if ( hours >= 11 && minutes >= 30)
document.write("Перемена2");
else if ( hours >= 10 && minutes >= 45)
document.write("Сейчас идёт 2 пара (1 час)");
else if ( hours >= 10 && minutes >= 25)
document.write("Завтрак");
else if ( hours >= 9 && minutes >= 40)
document.write("Сейчас идёт 1 пара (2 час)");
else if ( hours >= 9 && minutes >= 35)
document.write("Перемена1");
else if ( hours >= 8 && minutes >= 50)
document.write("Сейчас идёт 1 пара (1 час)");
}
 else;
 if( n == 2 ) {
 document.getElementById('tuesday12').style.display = 'inline';
 if ( hours >= 15 && minutes >= 45)
document.write("Кончилась 4 пара");
else if ( hours >= 15 && minutes >= 0)
document.write("Сейчас идёт 4 пара (2 час)");
else if ( hours >= 14 && minutes >= 55)
document.write("Перемена5");
else if ( hours >= 14 && minutes >= 10)
document.write("Сейчас идёт 4 пара (1 час)");
else if ( hours >= 14 && minutes >= 0)
document.write("Перемена4")
else if ( hours >= 13 && minutes >= 15)
document.write("Сейчас идёт 3 пара (2 час)");
else if ( hours >= 13 && minutes >= 10)
document.write("Перемена3");
else if ( hours >= 12 && minutes >= 25)
document.write("Сейчас идёт 3 пара (1 час)");
else if ( hours >= 11 && minutes >= 45)
document.write("Обед");
else if ( hours >= 11 && minutes >= 0)
document.write("Сейчас идёт 2 пара (2 час)");
else if ( hours >= 10 && minutes >= 55)
document.write("Перемена2");
else if ( hours >= 10 && minutes >= 10)
document.write("Сейчас идёт 2 пара (1 час)");
else if ( hours >= 9 && minutes >= 50)
document.write("Завтрак");
else if ( hours >= 9 && minutes >= 5)
document.write("Сейчас идёт 1 пара (2 час)");
else if ( hours >= 9 && minutes >= 0)
document.write("Перемена1");
else if ( hours >= 8 && minutes >= 15)
document.write("Сейчас идёт 1 пара (1 час)");
 }
 else;
 if( n == 3 ) {
 document.getElementById('wednesday12').style.display = 'inline';
if ( hours >= 15 && minutes >= 46)
document.write("Кончилась 4 пара");
else if ( hours >= 15 && minutes >= 45)
document.write("Кончилась 4 пара");
else if ( hours >= 15 && minutes >= 0)
document.write("Сейчас идёт 4 пара (2 час)");
else if ( hours >= 14 && minutes >= 55)
document.write("Перемена5");
else if ( hours >= 14 && minutes >= 10)
document.write("Сейчас идёт 4 пара (1 час)");
else if ( hours >= 14 && minutes >= 0)
document.write("Перемена4")
else if ( hours >= 13 && minutes >= 15)
document.write("Сейчас идёт 3 пара (2 час)");
else if ( hours >= 13 && minutes >= 10)
document.write("Перемена3");
else if ( hours >= 12 && minutes >= 25)
document.write("Сейчас идёт 3 пара (1 час)");
else if ( hours >= 11 && minutes >= 45)
document.write("Обед");
else if ( hours >= 11 && minutes >= 0)
document.write("Сейчас идёт 2 пара (2 час)");
else if ( hours >= 10 && minutes >= 55)
document.write("Перемена2");
else if ( hours >= 10 && minutes >= 10)
document.write("Сейчас идёт 2 пара (1 час)");
else if ( hours >= 9 && minutes >= 50)
document.write("Завтрак");
else if ( hours >= 9 && minutes >= 5)
document.write("Сейчас идёт 1 пара (2 час)");
else if ( hours >= 9 && minutes >= 0)
document.write("Перемена1");
else if ( hours >= 8 && minutes >= 15)
document.write("Сейчас идёт 1 пара (1 час)");
 }
 else;
 if( n == 4 ) {
 document.getElementById('thursday12').style.display = 'inline';
 if ( hours >= 15 && minutes >= 45)
document.write("Кончилась 4 пара");
else if ( hours >= 15 && minutes >= 0)
document.write("Сейчас идёт 4 пара (2 час)");
else if ( hours >= 14 && minutes >= 55)
document.write("Перемена5");
else if ( hours >= 14 && minutes >= 10)
document.write("Сейчас идёт 4 пара (1 час)");
else if ( hours >= 14 && minutes >= 0)
document.write("Перемена4")
else if ( hours >= 13 && minutes >= 15)
document.write("Сейчас идёт 3 пара (2 час)");
else if ( hours >= 13 && minutes >= 10)
document.write("Перемена3");
else if ( hours >= 12 && minutes >= 25)
document.write("Сейчас идёт 3 пара (1 час)");
else if ( hours >= 11 && minutes >= 45)
document.write("Обед");
else if ( hours >= 11 && minutes >= 0)
document.write("Сейчас идёт 2 пара (2 час)");
else if ( hours >= 10 && minutes >= 55)
document.write("Перемена2");
else if ( hours >= 10 && minutes >= 10)
document.write("Сейчас идёт 2 пара (1 час)");
else if ( hours >= 9 && minutes >= 50)
document.write("Завтрак");
else if ( hours >= 9 && minutes >= 5)
document.write("Сейчас идёт 1 пара (2 час)");
else if ( hours >= 9 && minutes >= 0)
document.write("Перемена1");
else if ( hours >= 8 && minutes >= 15)
document.write("Сейчас идёт 1 пара (1 час)");
 }
 else;
 if( n == 5 ) {
 document.getElementById("friday12").style.display = 'inline';
 if ( hours >= 15 && minutes >= 45)
document.write("Кончилась 4 пара");
else if ( hours >= 15 && minutes >= 0)
document.write("Сейчас идёт 4 пара (2 час)");
else if ( hours >= 14 && minutes >= 55)
document.write("Перемена5");
else if ( hours >= 14 && minutes >= 10)
document.write("Сейчас идёт 4 пара (1 час)");
else if ( hours >= 14 && minutes >= 0)
document.write("Перемена4")
else if ( hours >= 13 && minutes >= 15)
document.write("Сейчас идёт 3 пара (2 час)");
else if ( hours >= 13 && minutes >= 10)
document.write("Перемена3");
else if ( hours >= 12 && minutes >= 25)
document.write("Сейчас идёт 3 пара (1 час)");
else if ( hours >= 11 && minutes >= 45)
document.write("Обед");
else if ( hours >= 11 && minutes >= 0)
document.write("Сейчас идёт 2 пара (2 час)");
else if ( hours >= 10 && minutes >= 55)
document.write("Перемена2");
else if ( hours >= 10 && minutes >= 10)
document.write("Сейчас идёт 2 пара (1 час)");
else if ( hours >= 9 && minutes >= 50)
document.write("Завтрак");
else if ( hours >= 9 && minutes >= 5)
document.write("Сейчас идёт 1 пара (2 час)");
else if ( hours >= 9 && minutes >= 0)
document.write("Перемена1");
else if ( hours >= 8 && minutes >= 15)
document.write("Сейчас идёт 1 пара (1 час)");
 }
 else; 
 if( n == 6 ) {
 document.getElementById('saturday12').style.display = 'inline';
 if ( hours >= 14 && minutes >= 25)
document.write("Кончилась 4 пара");
else if ( hours >= 13 && minutes >= 45)
document.write("Сейчас идёт 4 пара (2 час)");
else if ( hours >= 13 && minutes >= 40)
document.write("Перемена7");
else if ( hours >= 13 && minutes >= 0)
document.write("Сейчас идёт 4 пара (1 час)");
else if ( hours >= 12 && minutes >= 50)
document.write("Перемена6")
else if ( hours >= 12 && minutes >= 10)
document.write("Сейчас идёт 3 пара (2 час)");
else if ( hours >= 12 && minutes >= 5)
document.write("Перемена5");
else if ( hours >= 11 && minutes >= 25)
document.write("Сейчас идёт 3 пара (1 час)");
else if ( hours >= 11 && minutes >= 15)
document.write("Перемена4");
else if ( hours >= 10 && minutes >= 35)
document.write("Сейчас идёт 2 пара (2 час)");
else if ( hours >= 10 && minutes >= 30)
document.write("Перемена3");
else if ( hours >= 9 && minutes >= 50)
document.write("Сейчас идёт 2 пара (1 час)");
else if ( hours >= 9 && minutes >= 40)
document.write("Перемена2");
else if ( hours >= 9 && minutes >= 0)
document.write("Сейчас идёт 1 пара (2 час)");
else if ( hours >= 8 && minutes >= 55)
document.write("Перемена1");
else if ( hours >= 8 && minutes >= 15)
document.write("Сейчас идёт 1 пара (1 час)");
}
 }
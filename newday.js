var d = new Date();
var n = d.getDay();
var d=new Date();
var d=new Date();
   var t=d.toLocaleTimeString();
   var today = new Date();     
   var hours=today.getHours();
   var minutes=today.getMinutes();

   Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() - 8) / 7);
    var wn = (weekNumber % 2);
 }
   
   // верхняя
   if (wn == 1)  {
   if( n == 0 ) {
   document.getElementById('sunday12').style.display = 'inline';
   }
   else if( n == 1 ) {
   document.getElementById('fizMu').style.display = 'inline';
   document.getElementById('historyMu').style.display = 'inline';
   document.getElementById('filosofMu').style.display = 'inline';
   document.getElementById('discmatMu').style.display = 'inline';
   } 
   else if( n == 2 ) {  
   document.getElementById('ksTu').style.display = 'inline';
   document.getElementById('discMatTu').style.display = 'inline';
   document.getElementById('psihTu').style.display = 'inline';
   }
   else if( n == 3 ) {
   document.getElementById('itWeu').style.display = 'inline';
   document.getElementById('sstdWeu').style.display = 'inline';
   document.getElementById('evmWeu').style.display = 'inline';
   document.getElementById('it0.5Weu').style.display = 'inline';
   }
   else if( n == 4 ){
   document.getElementById('ksThu').style.display = 'inline';
   document.getElementById('historyThu').style.display = 'inline';
   document.getElementById('psihThu').style.display = 'inline';
   }
   else if( n == 5 ) {
   document.getElementById('algFu').style.display = 'inline';
   document.getElementById('psihFu').style.display = 'inline';

   }
   else if( n == 6 ) {
   document.getElementById('anglSu').style.display = 'inline';
   document.getElementById('arhSu').style.display = 'inline';
   document.getElementById('arhSu2').style.display = 'inline';
   }
   }

    // нижняя  
    if (wn == 0) {
    if( n == 0 ) {
    document.getElementById('sunday12').style.display = 'inline';
    }
    else if( n == 1 ) {
      document.getElementById('fizraMl').style.display = 'inline';
      document.getElementById('historyMl').style.display = 'inline';
      document.getElementById('filosofMl').style.display = 'inline';
    } 
    else if( n == 2 ) {  
      document.getElementById('ksTl').style.display = 'inline';
      document.getElementById('discMatTl').style.display = 'inline';
      document.getElementById('evmTl').style.display = 'inline';
    }
    else if( n == 3 ) {
      document.getElementById('itWl').style.display = 'inline';
      document.getElementById('itWl2').style.display = 'inline';
      document.getElementById('evmWl').style.display = 'inline';
    }
    else if( n == 4 ){
      document.getElementById('algThl').style.display = 'inline';
      document.getElementById('algThl2').style.display = 'inline';
      document.getElementById('filolofThl').style.display = 'inline';
    }
    else if( n == 5 ) {
      document.getElementById('algFl').style.display = 'inline';
      document.getElementById('algFl2').style.display = 'inline';
      document.getElementById('sstdFl').style.display = 'inline';
    }
    else if( n == 6 ) {
      document.getElementById('anglSl').style.display = 'inline';
      document.getElementById('arhSl').style.display = 'inline';
      document.getElementById('arhSl2').style.display = 'inline';
    }
    }

// пн
if (n == 1) {
  if ( hours >= 16 && minutes >= 25)
  document.write("Пары кончились");
  else if ( hours >= 16 && minutes >= 20) {
  document.write("Кончилась 4 пара");
  }
  else if ( hours >= 15 && minutes >= 35) {
  document.write("Сейчас идёт 4 пара (2 час)");
  if (wn == 1)
  document.getElementById('discmatMu').style="outline: 3px solid red";
  }
  else if ( hours >= 15 && minutes >= 30) {
  document.write("Перемена (5 мин)");
  if (wn == 1) 
  document.getElementById('discmatMu').style="outline: 3px solid orange";
  }
  else if ( hours >= 14 && minutes >= 45) {
  document.write("Сейчас идёт 4 пара (1 час)");
  if (wn == 1) 
  document.getElementById('discmatMu').style="outline: 3px solid red";
  }
  else if ( hours >= 14 && minutes >= 35) {
  document.write("Перемена (10 мин)")
  if (wn == 1) 
  document.getElementById('discmatMu').style="outline: 3px solid yellow";
  }
  else if ( hours >= 13 && minutes >= 50) {
  document.write("Сейчас идёт 3 пара (2 час)");
  if (wn == 0)
  document.getElementById('filosofMl').style="outline: 3px solid yellow";
  else if (wn == 1) 
  document.getElementById('filosofMu').style="outline: 3px solid yellow";
  }
  else if ( hours >= 13 && minutes >= 45) {
  document.write("Перемена (5 мин)");
  if (wn == 0)
  document.getElementById('filosofMl').style="outline: 3px solid orange";
  else if (wn == 1)
  document.getElementById('filosofMu').style="outline: 3px solid orange";
  }
  else if ( hours >= 13 && minutes >= 0) {
  document.write("Сейчас идёт 3 пара (1 час)");
  if (wn == 0)
  document.getElementById('filosofMl').style="outline: 3px solid red";
  else if (wn == 1)
  document.getElementById('filosofMu').style="outline: 3px solid red";
  }
  else if ( hours >= 12 && minutes >= 20) {
  document.write("Обед");
  if (wn == 0)
  document.getElementById('filosofMl').style="outline: 3px solid yellow";
  else if (wn == 1)
  document.getElementById('filosofMu').style="outline: 3px solid yellow";
  }
  else if ( hours >= 11 && minutes >= 35) {
  document.write("Сейчас идёт 2 пара (2 час)");
  if (wn == 0)
  document.getElementById('historyMl').style="outline: 3px solid red";
  else if (wn == 1)
  document.getElementById('historyMu').style="outline: 3px solid red";
  }
  else if ( hours >= 11 && minutes >= 30) {
  document.write("Перемена (5 мин)");
  if (wn == 0)
  document.getElementById('historyMl').style="outline: 3px solid orange";
  else if (wn == 1)
  document.getElementById('historyMu').style="outline: 3px solid orange";
  }
  else if ( hours >= 10 && minutes >= 45) {
  document.write("Сейчас идёт 2 пара (1 час)");
  if (wn == 0)
  document.getElementById('historyMl').style="outline: 3px solid red";
  else if (wn == 1)
  document.getElementById('historyMu').style="outline: 3px solid red";
  }
  else if ( hours >= 10 && minutes >= 25) {
  document.write("Завтрак");
  if (wn == 0)
  document.getElementById('historyMl').style="outline: 3px solid yellow";
  else if (wn == 1)
  document.getElementById('historyMu').style="outline: 3px solid yellow";
  }
  else if ( hours >= 9 && minutes >= 40) {
  document.write("Сейчас идёт 1 пара (2 час)");
  if (wn == 0)
  document.getElementById('fizraMl').style="outline: 3px solid red";
  else if (wn == 1)
  document.getElementById('fizraMu').style="outline: 3px solid red";
  }
  else if ( hours >= 9 && minutes >= 35) {
  document.write("Перемена (5 мин)");
  if (wn == 0)
  document.getElementById('fizraMl').style="outline: 3px solid orange";
  else if (wn == 1)
  document.getElementById('fizraMu').style="outline: 3px solid orange";
  }
  else if ( hours >= 8 && minutes >= 50) {
  document.write("Сейчас идёт 1 пара (1 час)"); 
  if (wn == 0)
  document.getElementById('fizraMl').style="outline: 3px solid red";
  else if (wn == 1)
  document.getElementById('fizraMu').style="outline: 3px solid red";
  }
 }

// вт ср чт пт
if (n == 2 || n == 3 || n == 4 || n == 5) {
  if ( hours >= 15 && minutes >= 46)
  document.write("Пары кончились");
  else if ( hours >= 15 && minutes >= 45) {
  document.write("Кончилась 4 пара");
  }
  else if ( hours >= 15 && minutes >= 0) {
  document.write("Сейчас идёт 4 пара (2 час)");
  if (wn == 1) {
  if( n == 3 )
  document.getElementById('it0.5Weu').style="outline: 3px solid red";
  }
  }
  else if ( hours >= 14 && minutes >= 55) {
  document.write("Перемена (5 мин)");
  if (wn == 1) {
  if( n == 3 )
  document.getElementById('it0.5Weu').style="outline: 3px solid orange";
  }
  }
  else if ( hours >= 14 && minutes >= 10) {
  document.write("Сейчас идёт 4 пара (1 час)");
  if (wn == 1) {
    if( n == 3 )
  document.getElementById('it0.5Weu').style="outline: 3px solid red";
  }
  }
  else if ( hours >= 14 && minutes >= 0) {
  document.write("Перемена (10 мин)")
  if (wn == 1) {
    if( n == 3 )
  document.getElementById('it0.5Weu').style="outline: 3px solid yellow";
  }
  }
  else if ( hours >= 13 && minutes >= 15) {
  document.write("Сейчас идёт 3 пара (2 час)");
  if (wn == 1) {
    if( n == 2 )
  document.getElementById('psihTu').style="outline: 3px solid red";
  else  if( n == 3 )
  document.getElementById('evmWeu').style="outline: 3px solid red";
  else if ( n == 4 )
  document.getElementById('psihThu').style="outline: 3px solid red";
  }
  else if (wn == 0) {
    if( n == 2 )
  document.getElementById('evmTl').style="outline: 3px solid red";
  else if( n == 3 )
  document.getElementById('evmWl').style="outline: 3px solid red";
  else if( n == 4 )
  document.getElementById('filosofThl').style="outline: 3px solid red";
  else if( n == 5 )
  document.getElementById('sstdFl').style="outline: 3px solid red";
  }
  }
  else if ( hours >= 13 && minutes >= 10) {
  document.write("Перемена (5 мин)");
  if (wn == 1) {
    if( n == 2 )
  document.getElementById('psihTu').style="outline: 3px solid orange";
  else if( n == 3 )
  document.getElementById('evmWeu').style="outline: 3px solid orange";
  else if( n == 4 )
  document.getElementById('psihThu').style="outline: 3px solid orange";
  }
  else if (wn == 0) {
    if( n == 2 )
  document.getElementById('evmTl').style="outline: 3px solid orange";
  else  if( n == 3 )
  document.getElementById('evmWl').style="outline: 3px solid orange";
  else if( n == 4 )
  document.getElementById('filosofThl').style="outline: 3px solid orange";
  else  if( n == 5 )
  document.getElementById('sstdFl').style="outline: 3px solid orange";
  }
  }
  else if ( hours >= 12 && minutes >= 25) {
  document.write("Сейчас идёт 3 пара (1 час)");
  if (wn == 1) {
    if( n == 2 )
  document.getElementById('psihTu').style="outline: 3px solid red";
  else  if( n == 3 )
  document.getElementById('evmWeu').style="outline: 3px solid red";
  else if( n == 4 )
  document.getElementById('psihThu').style="outline: 3px solid red";
  }
  else if (wn == 0) {
    if( n == 2 )
  document.getElementById('evmTl').style="outline: 3px solid red";
  else  if( n == 3 )
  document.getElementById('evmWl').style="outline: 3px solid red";
  else if( n == 4 )
  document.getElementById('filosofThl').style="outline: 3px solid red";
  else  if( n == 5 )
  document.getElementById('sstdFl').style="outline: 3px solid red";
  }
  }
  else if ( hours >= 11 && minutes >= 45) {
  document.write("Обед");
  if (wn == 1) {
    if( n == 2 )
  document.getElementById('psihTu').style="outline: 3px solid yellow";
  else  if( n == 3 )
  document.getElementById('evmWeu').style="outline: 3px solid yellow";
  else  if( n == 4 )
  document.getElementById('psihThu').style="outline: 3px solid yellow";
  }
  else if (wn == 0) {
    if( n == 2 )
  document.getElementById('evmTl').style="outline: 3px solid yellow";
  else  if( n == 3 )
  document.getElementById('evmWl').style="outline: 3px solid yellow";
  else  if( n == 4 )
  document.getElementById('filosofThl').style="outline: 3px solid yellow";
  else  if( n == 5 )
  document.getElementById('sstdFl').style="outline: 3px solid yellow";
  }
  }
  else if ( hours >= 11 && minutes >= 0) {
  document.write("Сейчас идёт 2 пара (2 час)");
  if (wn == 1) {
    if( n == 2 )
  document.getElementById('discMatTu').style="outline: 3px solid red";
  else  if( n == 3 )
  document.getElementById('sstdWeu').style="outline: 3px solid red";
  else  if( n == 4 )
  document.getElementById('historyThu').style="outline: 3px solid red";
  else  if( n == 5 )
  document.getElementById('psihFu').style="outline: 3px solid red";
  }
  else if (wn == 0) {
    if( n == 2 )
  document.getElementById('discMatTl').style="outline: 3px solid red";
  else  if( n == 3 )
  document.getElementById('itWl2').style="outline: 3px solid red";
  else  if( n == 4 )
  document.getElementById('algThl2').style="outline: 3px solid red";
  else if( n == 5 )
  document.getElementById('algFl2').style="outline: 3px solid red";
  }
  }
  else if ( hours >= 10 && minutes >= 55) {
  document.write("Перемена (5 мин)");
  if (wn == 1) {
    if( n == 2 )
  document.getElementById('discMatTu').style="outline: 3px solid orange";
  else  if( n == 3 )
  document.getElementById('sstdWeu').style="outline: 3px solid orange";
  else  if( n == 4 )
  document.getElementById('historyThu').style="outline: 3px solid orange";
  else  if( n == 5 )
  document.getElementById('psihFu').style="outline: 3px solid orange";
  }
  else if (wn == 0) {
    if( n == 2 )
  document.getElementById('discMatTl').style="outline: 3px solid orange";
  else  if( n == 3 )
  document.getElementById('itWl2').style="outline: 3px solid orange";
  else  if( n == 4 )
  document.getElementById('algThl2').style="outline: 3px solid orange";
  else  if( n == 5 )
  document.getElementById('algFl2').style="outline: 3px solid orange";
  }
  }
  else if ( hours >= 10 && minutes >= 10) {
  document.write("Сейчас идёт 2 пара (1 час)");
  if (wn == 1) {
    if( n == 2 )
  document.getElementById('discMatTu').style="outline: 3px solid red";
  else if( n == 3 )
  document.getElementById('sstdWeu').style="outline: 3px solid red";
  else  if( n == 4 )
  document.getElementById('historyThu').style="outline: 3px solid red";
  else  if( n == 5 )
  document.getElementById('psihFu').style="outline: 3px solid red";
  }
  else if (wn == 0) {
    if( n == 2 )
  document.getElementById('discMatTl').style="outline: 3px solid red";
  else  if( n == 3 )
  document.getElementById('itWl2').style="outline: 3px solid red";
  else  if( n == 4 )
  document.getElementById('algThl2').style="outline: 3px solid red";
  else  if( n == 5 )
  document.getElementById('algFl2').style="outline: 3px solid red";
  }
  }
  else if ( hours >= 9 && minutes >= 50) {
  document.write("Завтрак");
  if (wn == 1) {
    if( n == 2 )
  document.getElementById('discMatTu').style="outline: 3px solid yellow";
  else  if( n == 3 )
  document.getElementById('sstdWeu').style="outline: 3px solid yellow";
  else  if( n == 4 )
  document.getElementById('historyThu').style="outline: 3px solid yellow";
  else  if( n == 5 )
  document.getElementById('psihFu').style="outline: 3px solid yellow";
  }
  else if (wn == 0) {
    if( n == 2 )
  document.getElementById('discMatTl').style="outline: 3px solid yellow";
  else  if( n == 3 )
  document.getElementById('itWl2').style="outline: 3px solid yellow";
  else  if( n == 4 )
  document.getElementById('algThl2').style="outline: 3px solid yellow";
  else  if( n == 5 )
  document.getElementById('algFl2').style="outline: 3px solid yellow";
  }
  }
  else if ( hours >= 9 && minutes >= 5) {
  document.write("Сейчас идёт 1 пара (2 час)");
  if (wn == 1) {
    if( n == 2 )
  document.getElementById('ksTu').style="outline: 3px solid red";
  else  if( n == 3 )
  document.getElementById('itWeu').style="outline: 3px solid red";
  else  if( n == 4 )
  document.getElementById('ksThu').style="outline: 3px solid red";
  else  if( n == 5 )
  document.getElementById('algFu').style="outline: 3px solid red";
  }
  else if (wn == 0) {
    if( n == 2 )
  document.getElementById('ksTl').style="outline: 3px solid red";
  else  if( n == 3 )
  document.getElementById('itWl').style="outline: 3px solid red";
  else  if( n == 4 )
  document.getElementById('algThl').style="outline: 3px solid red";
  else  if( n == 5 )
  document.getElementById('algFl').style="outline: 3px solid red";
  }
  }
  else if ( hours >= 9 && minutes >= 0) {
  document.write("Перемена (5 мин)");
  if (wn == 1) {
    if( n == 2 )
  document.getElementById('ksTu').style="outline: 3px solid orange";
  else  if( n == 3 )
  document.getElementById('itWeu').style="outline: 3px solid orange";
  else  if( n == 4 )
  document.getElementById('ksThu').style="outline: 3px solid orange";
  else if( n == 5 )
  document.getElementById('algFu').style="outline: 3px solid orange";
  }
  else if (wn == 0) {
    if( n == 2 )
  document.getElementById('ksTl').style="outline: 3px solid orange";
  else  if( n == 3 )
  document.getElementById('itWl').style="outline: 3px solid orange";
  else  if( n == 4 )
  document.getElementById('algThl').style="outline: 3px solid orange";
  else  if( n == 5 )
  document.getElementById('algFl').style="outline: 3px solid orange";
  }
  }
  else if ( hours >= 8 && minutes >= 15) {
  document.write("Сейчас идёт 1 пара (1 час)");
  if (wn == 1) {
    if( n == 2 )
  document.getElementById('ksTu').style="outline: 3px solid red";
  else  if( n == 3 )
  document.getElementById('itWeu').style="outline: 3px solid red";
  else  if( n == 4 )
  document.getElementById('ksThu').style="outline: 3px solid red";
  else if( n == 5 )
  document.getElementById('algFu').style="outline: 3px solid red";
  }
  else if (wn == 0) {
    if( n == 2 )
  document.getElementById('ksTl').style="outline: 3px solid red";
  else if( n == 3 )
  document.getElementById('itWl').style="outline: 3px solid red";
  else  if( n == 4 )
  document.getElementById('algThl').style="outline: 3px solid red";
  else  if( n == 5 )
  document.getElementById('algFl').style="outline: 3px solid red";
  }
  }
 }

  // сб
  if (n == 6) {
    if ( hours >= 14 && minutes >= 26)
    document.write("Пары кончились");
    else if ( hours >= 14 && minutes >= 25)
    document.write("Кончилась 4 пара");
    else if ( hours >= 13 && minutes >= 45)
    document.write("Сейчас идёт 4 пара (2 час)");
    else if ( hours >= 13 && minutes >= 40)
    document.write("Перемена (5 мин)");
    else if ( hours >= 13 && minutes >= 0)
    document.write("Сейчас идёт 4 пара (1 час)");
    else if ( hours >= 12 && minutes >= 50)
    document.write("Перемена (10 мин)")
    else if ( hours >= 12 && minutes >= 10) {
    document.write("Сейчас идёт 3 пара (2 час)");
    if (wn == 0)
    document.getElementById('archSl2').style="outline: 3px solid red";
    else if (wn == 1)
    document.getElementById('archSu2').style="outline: 3px solid red";
    }
    else if ( hours >= 12 && minutes >= 5) {
    document.write("Перемена (5 мин)");
    if (wn == 0)
    document.getElementById('archSl2').style="outline: 3px solid orange";
    else if (wn == 1)
    document.getElementById('archSu2').style="outline: 3px solid orange";
    }
    else if ( hours >= 11 && minutes >= 25) {
    document.write("Сейчас идёт 3 пара (1 час)");
    if (wn == 0)
    document.getElementById('archSl2').style="outline: 3px solid red";
    else if (wn == 1)
    document.getElementById('archSu2').style="outline: 3px solid red";
    }
    else if ( hours >= 11 && minutes >= 15) {
    document.write("Перемена (10 мин)");
    if (wn == 0)
    document.getElementById('archSl2').style="outline: 3px solid yellow";
    else if (wn == 1)
    document.getElementById('archSu2').style="outline: 3px solid yellow";
    }
    else if ( hours >= 10 && minutes >= 35) {
    document.write("Сейчас идёт 2 пара (2 час)");
    if (wn == 0)
    document.getElementById('archSl').style="outline: 3px solid red";
    else if (wn == 1)
    document.getElementById('archSu').style="outline: 3px solid red";
    }
    else if ( hours >= 10 && minutes >= 30) {
    document.write("Перемена (5 мин)");
    if (wn == 0)
    document.getElementById('archSl').style="outline: 3px solid orange";
    else  if (wn == 1)
    document.getElementById('archSu').style="outline: 3px solid orange";
    }
    else if ( hours >= 9 && minutes >= 50) {
    document.write("Сейчас идёт 2 пара (1 час)"); 
    if (wn == 0)
    document.getElementById('archSl').style="outline: 3px solid red";
    else if (wn == 1)
    document.getElementById('archSu').style="outline: 3px solid red";
    }
    else if ( hours >= 9 && minutes >= 40) {
    document.write("Перемена (10 мин)");
    if (wn == 0)
    document.getElementById('archSl').style="outline: 3px solid yellow";
    else  if (wn == 1)
    document.getElementById('archSu').style="outline: 3px solid yellow";
    }
    else if ( hours >= 9 && minutes >= 0) {
    document.write("Сейчас идёт 1 пара (2 час)");
    if (wn == 0)
    document.getElementById('anglSl').style="outline: 3px solid red";
    else  if (wn == 1)
    document.getElementById('anglSu').style="outline: 3px solid red";
    }
    else if ( hours >= 8 && minutes >= 55) {
    document.write("Перемена (5 мин)");
    if (wn == 0)
    document.getElementById('anglSl').style="outline: 3px solid orange";
    else  if (wn == 1)
    document.getElementById('anglSu').style="outline: 3px solid orange";
    }
    else if ( hours >= 8 && minutes >= 15) {
    document.write("Сейчас идёт 1 пара (1 час)");
    if (wn == 0)
    document.getElementById('anglSl').style="outline: 3px solid red";
    else  if (wn == 1)
    document.getElementById('anglSu').style="outline: 3px solid red";
    }
   }
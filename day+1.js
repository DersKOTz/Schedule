Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() - 8) / 7);
}
var d = new Date();
 var n = d.getDay()+1;
var weekNumber = (new Date()).getWeek();
var wn = (weekNumber % 2);

// верхняя
if (wn == 1)  {
    if( n == 0 ) {
    document.getElementById('1sunday12').style.display = 'inline';
    }
    else if( n == 1 ) {
    document.getElementById('1fizMu').style.display = 'inline';
    document.getElementById('1historyMu').style.display = 'inline';
    document.getElementById('1filosofMu').style.display = 'inline';
    document.getElementById('1discmatMu').style.display = 'inline';
    } 
    else if( n == 2 ) {  
    document.getElementById('1ksTu').style.display = 'inline';
    document.getElementById('1discMatTu').style.display = 'inline';
    document.getElementById('1psihTu').style.display = 'inline';
    }
    else if( n == 3 ) {
    document.getElementById('1itWeu').style.display = 'inline';
    document.getElementById('1sstdWeu').style.display = 'inline';
    document.getElementById('1evmWeu').style.display = 'inline';
    document.getElementById('1it0.5Weu').style.display = 'inline';
    }
    else if( n == 4 ){
    document.getElementById('1ksThu').style.display = 'inline';
    document.getElementById('1historyThu').style.display = 'inline';
    document.getElementById('1psihThu').style.display = 'inline';
    }
    else if( n == 5 ) {
    document.getElementById('1algFu').style.display = 'inline';
    document.getElementById('1psihFu').style.display = 'inline';
 
    }
    else if( n == 6 ) {
    document.getElementById('1anglSu').style.display = 'inline';
    document.getElementById('1arhSu').style.display = 'inline';
    document.getElementById('1arhSu2').style.display = 'inline';
    }
    }
 
     // нижняя  
     if (wn == 0) {
     if( n == 0 ) {
     document.getElementById('1sunday12').style.display = 'inline';
     }
     else if( n == 1 ) {
       document.getElementById('1fizraMl').style.display = 'inline';
       document.getElementById('1historyMl').style.display = 'inline';
       document.getElementById('1filosofMl').style.display = 'inline';
     } 
     else if( n == 2 ) {  
       document.getElementById('1ksTl').style.display = 'inline';
       document.getElementById('1discMatTl').style.display = 'inline';
       document.getElementById('1evmTl').style.display = 'inline';
     }
     else if( n == 3 ) {
       document.getElementById('1itWl').style.display = 'inline';
       document.getElementById('1itWl2').style.display = 'inline';
       document.getElementById('1evmWl').style.display = 'inline';
     }
     else if( n == 4 ){
       document.getElementById('1algThl').style.display = 'inline';
       document.getElementById('1algThl2').style.display = 'inline';
       document.getElementById('1filolofThl').style.display = 'inline';
     }
     else if( n == 5 ) {
       document.getElementById('1algFl').style.display = 'inline';
       document.getElementById('1algFl2').style.display = 'inline';
       document.getElementById('1sstdFl').style.display = 'inline';
     }
     else if( n == 6 ) {
       document.getElementById('1anglSl').style.display = 'inline';
       document.getElementById('1arhSl').style.display = 'inline';
       document.getElementById('1arhSl2').style.display = 'inline';
     }
     }
 
 
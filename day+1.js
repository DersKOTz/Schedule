Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() - 8) / 7);
}
var d = new Date();
 var n = d.getDay()+1;
var weekNumber = (new Date()).getWeek();
var wn = (weekNumber % 2);

// вх
if (wn == 1)  {
 if( n == 0 )
 document.getElementById('1sunday12').style.display = 'inline';
 else;
 if( n == 2 )
 document.getElementById('1tuesday1').style.display = 'inline';
 else;
 if( n == 3 )
 document.getElementById('1wednesday1').style.display = 'inline';
 else;
 if( n == 4 )
 document.getElementById('1thursday1').style.display = 'inline';
 else;
 if( n == 5 )
 document.getElementById("1friday1").style.display = 'inline';
 else;
 if( n == 6 )
 document.getElementById('1saturday12').style.display = 'inline';
 }

 // нж
 if (wn == 0)  {
 if( n == 0 )
 document.getElementById('1sunday12').style.display = 'inline';
 else;
 if( n == 2 )
 document.getElementById('1tuesday12').style.display = 'inline';
 else;
 if( n == 3 )
 document.getElementById('1wednesday12').style.display = 'inline';
 else;
 if( n == 4 )
 document.getElementById('1thursday12').style.display = 'inline';
 else;
 if( n == 5 )
 document.getElementById("1friday12").style.display = 'inline';
 else;
 if( n == 6 )
 document.getElementById('1saturday12').style.display = 'inline';
 }
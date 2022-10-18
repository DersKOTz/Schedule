Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() - 8) / 7);
}

var weekNumber = (new Date()).getWeek();
if (weekNumber % 2)  {
 var d = new Date();
 var n = d.getDay()+1;
 if( n == 0 )
 document.getElementById('sunday12').style.display = 'inline';
 else;
 if( n == 2 )
 document.getElementById('tuesday1').style.display = 'inline';
 else;
 if( n == 3 )
 document.getElementById('wednesday1').style.display = 'inline';
 else;
 if( n == 4 )
 document.getElementById('thursday1').style.display = 'inline';
 else;
 if( n == 5 )
 document.getElementById("friday1").style.display = 'inline';
 else;
 if( n == 6 )
 document.getElementById('saturday12').style.display = 'inline';
 }
 else {
 var d = new Date();
 var n = d.getDay()+1;
 if( n == 0 )
 document.getElementById('sunday12').style.display = 'inline';
 else;
 if( n == 2 )
 document.getElementById('tuesday12').style.display = 'inline';
 else;
 if( n == 3 )
 document.getElementById('wednesday12').style.display = 'inline';
 else;
 if( n == 4 )
 document.getElementById('thursday12').style.display = 'inline';
 else;
 if( n == 5 )
 document.getElementById("friday12").style.display = 'inline';
 else;
 if( n == 6 )
 document.getElementById('saturday12').style.display = 'inline';
 }
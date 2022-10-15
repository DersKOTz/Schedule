d0 = new Date(); 
 d0.setFullYear((new Date()).getMonth() < 9 ? (new Date()).getFullYear() - 1 : (new Date()).getFullYear(), 8, 1); 
 d1 = new Date(); 
 dt = Math.floor(((d1.getTime() - d0.getTime() + 1000*60*60*24) / (1000*60*60*24*7)) + 1); 
 
 if(dt % 2) {
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
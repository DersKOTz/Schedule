Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() - 8) / 7);
}
var d = new Date();
var n = d.getDay();
var weekNumber = (new Date()).getWeek();
if (weekNumber % 2) {
if( n == 0 )
document.getElementById('Monday12').style.display = 'inline';
}
else {
if( n == 0 )
document.getElementById('Monday1').style.display = 'inline';
}

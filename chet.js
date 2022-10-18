Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() - 8) / 7);
}
var d = new Date();
var n = d.getDay();
var weekNumber = (new Date()).getWeek();
console.log (weekNumber,"Неделя");
var wn = (weekNumber % 2);
if (wn == 1)
document.write('Upper week'); 
if (wn == 0)
document.write('Lower week'); 

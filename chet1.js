Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

var weekNumber = (new Date()).getWeek();
console.log (weekNumber,"Неделя");
if (weekNumber % 2) 
document.getElementById('monday12').style.display = 'inline';
else
document.getElementById('monday1').style.display = 'inline';
console.log (weekNumber,"День недели");
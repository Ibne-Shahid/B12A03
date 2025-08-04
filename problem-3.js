/** Problem -03 ( Medicine Planner ) */
var lastDay = 11;
//my code id written here
if (lastDay >= 3 && lastDay <= 30) {
    for (var i = 1; i <= lastDay; i++) {
        if (i % 3 === 0) {
            console.log(i + " - medicine");

        } else {
            console.log(i + " - rest");

        }
    }
}
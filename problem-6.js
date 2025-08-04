/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//my code id written here
if (startingSalary > 0 && startingSalary <= 10000000 && experience > 0 && experience <= 50) {
    var currentSalary = startingSalary
    for (var i = 1; i <= experience; i++) {
        currentSalary = currentSalary + (currentSalary * 5) / 100;
    }
}
console.log(currentSalary.toFixed(2));
/** Problem -01 ( Divide the Asset ) */
var area = 800;
//my code id written here
var result = area/2;
console.log(result);


/** Problem -02 ( Cycle or Laptop ) */
var money = 10000;
//my code id written here
if (money>=25000) {
    console.log("Laptop");

} else if (money>=10000) {
    console.log("Cycle");
    
} else {
    console.log("Chocolate");
    
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 11 ;
//my code id written here
for (var i=1; i<=lastDay; i++) {
    if (i%3===0) {
        console.log(i+" - medicine");
        
    } else {
        console.log(i+" - rest");
        
    }
}


/** Problem 04 - (Delete / Store) */
var fileName= "pdfData.jpg";
//my code id written here
if (fileName.includes(".pdf") || fileName.includes(".docx") || fileName.includes("#")) {
    console.log("Store");
    
} else {
    console.log("Delete");
    
}


/** Problem 05 - ( PH Email Generator )  */
var student = { name: "jhankar", roll: 1014, department: "cse" };
//my code id written here
var email = student.name + student.roll + "." + student.department + "@ph.ac.bd"
console.log(email);


/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//my code id written here
var currentSalary = startingSalary
for (var i=1; i<=experience; i++) {
    currentSalary = currentSalary + (currentSalary*0.05)
}
console.log(currentSalary.toFixed(2));
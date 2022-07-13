const age = parseInt(prompt("How old are you?"));


if (isNaN(age) || age < 0) { //->age는 숫자가 아니야(true) 이면
    alert("Please write a real positive number.");
} else if (age < 18) {
    // age가 18세이하 (true)이면
    alert("You are too young.");
} else if (age >= 18 && age <= 50) {
    // age가 18세이상 50세미만 (둘다만족 true)이면
    alert("You can drink.");
} else if (age > 50 && age <= 80) {
    // age가 18세이상 50세미만 (둘다만족 true)이면
    alert("You should exercise.");
} else if (age === 100) {
    alert("Wow you are wise")
 }else {
    alert("You can't drink.");
}

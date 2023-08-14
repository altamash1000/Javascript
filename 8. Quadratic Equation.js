var a = Number(prompt("Enter value of a"));
var b = Number(prompt("Enter value of b"));
var c = Number(prompt("Enter value of c"));
var d = b * b;

var sqrt = Math.sqrt(d - (4 * a * c));

var answer1 = (-b - sqrt) / (2 * a);
var answer2 = (-b + sqrt) / (2 * a);

if (isNaN(answer1) || !isFinite(answer1)) {
  document.write("Root 1 is not a real number");
} else {
  document.write("Root 1 is: " + answer1);
}

document.write("<br>");

if (isNaN(answer2) || !isFinite(answer2)) {
  document.write("Root 2 is not a real number");
} else {
  document.write("Root 2 is: " + answer2);
}

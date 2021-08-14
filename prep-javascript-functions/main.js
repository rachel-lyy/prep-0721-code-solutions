function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise', addTwoNumbersResult);

///
function convertHoursToMinutes(hours) {
  return hours * 60;
}
var hours = 2;
var convertHoursToMinutesResult = convertHoursToMinutes(hours);
console.log(convertHoursToMinutesResult);

///
function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}
var name = 'Rachel';
var getGreetingResult = getGreeting(name);
console.log(getGreetingResult);

///

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * num2;
}
var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log(addAndMultiplyBy5Result);

///

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log(multiplyAndDivideBy5Result);

///

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log(subtractTwoNumbersResult);

///

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var getCircleCircumferenceResult = getCircleCircumference(5);
console.log(getCircleCircumferenceResult);

///
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var getFullNameResult = getFullName('Rachel', 'Ly');
console.log(getFullNameResult);

///
function cube(number) {
  return number * number * number;
}
var cubeResult = cube(5);
console.log(cubeResult);

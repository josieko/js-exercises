// let carName = "Volvo";
// let x =  50

// let x = 5;
// let y = 10;
// let z = x + y;
// alert(z);

// let firstName = "John", lastName = "Doe", age = 35;

// alert(10 * 5);
// alert (10/2);

// Alert the remainder when 10 is divided by 9
// alert (15%9);

// x = 10;
// y = 5;
// x += y;
// x *= y;

// function myFunction() {
//   alert("hello World");
// }
// myFunction();

// function myFunction() {
//   return "hello";
// }
// document.getElementById('demo').innerHTML = myFunction();

// const person = {
//   firstName: "John",
//   lastName: "Doe"
// };

// alert(person.firstName);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   country: "Norway"
// };

// const person = {
//   name: "John",
//   age: 50,
// };
// alert(person.name + "is" + person.age);

// {
//   /* <button onclick="alert('Hello')">Click me</button> */
// }

// {
//   /* <button onclick="myFunction()">Click me</button> */
// }

// "The div element should turn red when someone moves a mouse over it"
// <div onmouseover="this.style.backgroundColor='red">myDIV</div>

// "Use the lenght property to alert the length of txt"
// let txt = "Hello World";
// let x = txt.lenght;
// alert(x);

// Use escape (\) characters to alert - We are "Vikings"
// let txt = 'We are "Vikings"';
// alert(txt);

// let str1 = "Hello";
// let str2 = "World";
// alert(str1 + str2);

// let txt = "Hello World!";
// txt = txt.toUpperCase();

// Use slice method to return the word "bananas"
// let txt = "I can eat bananas all day";
// let x = txt.slice(10,17);

// .toUpperCase() is a function so don't forget the () when using it!!
// let txt = "hello world";
// txt = txt.toUpperCase();
// txt = txt.toLowerCase();

// Get the "Volvo out of the array"
// const cars = ['Saab', 'Volvo', 'BMW']
// let x = cars[1];

// Change the first item of cars to "Ford"
// const cars = ['volvo', 'jeep', 'mercedes']
// cars[0] = "ford";

// const cars = ['volvo', 'jeep', 'mercedes'];
// alert(cars.lenght);

// Get rid of the last item (apple) of the array
// const fruits = ['kiwi', 'cherry', 'mango', 'apple']
// fruits.pop()

// const fruits = ['kiwi', 'cherry', 'mango', 'apple']
// fruits.push('lime')

// Use splice method to remove orange and apple from fruits Array
// const fruits = ['banana', 'orange', 'apple', 'kiwi']
// fruits.splice(1, 2);

// Sort the array elements aplhabeitcally
// const fruits = ['banana', 'orange', 'apple', 'kiwi']
// fruits.sort();

// create a date object and alert the current date and time
// const d = new Date();
// console.log(d);

// Extract the year out of the date Object
// const d = new Date();
// year = d.getFullYear();

// Extract the month out of the date Object
// const d = new Date();
// month = d.getMonth();

// Set the year data of the date object to 2020
// const d = new Date();
// d.setFullYear(2020);

// Create a random Number
// let r = Math.random()

// return the largest Number
// let x = Math.max(10,20)

// round the number to the nearest integer
// let x = Math.round(5.3);

// get the square root of 9
// let x = Math.sqrt(9);

// choose conditional (ternary) operator to alert "too young" if age is under 18, otherwise alert "old enough"
// var age = n;
// var voteable = (age < 18) ? "Too young" : "Old enough";
// alert(voteable);

// if (x > y) {
//   alert("Hello world");
// } else {
//   alert("Goodbye")
// }

// create switch statement that will alert "Hello" if fruits is "banana", and "Welcome" if fruits is "apple"
// switch(fruits) {
//   case "Banana":
//     alert("hello")
//     break;
//   case "Apple":
//     alert("Welcome")
//     break;
// }

// Add a section that will alert("Neither") if fruits is neither "banana" nor "apple"
// switch (fruits) {
//   case "Banana":
//     alert("hello");
//     break;
//   case "Apple":
//     alert("Welcome");
//     break;
//   default:
//     alert("neither");
// }

// Create a loop that runs from 0 to 9.
// let i;
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

// Create a loop that runs through each item in the fruits array.
// const fruits = ["Apple", "Banana", "Orange"];
// for (x in fruits) {
//   console.log(x);
// }

// Create a loop that runs as long as i is less than 10.
// let i = 0;
// while (i<10) {
//   console.log(i);
//   i++
// }

// Create a loop that runs as long as i is less than 10, but increase i with 2 each time.
// let i = 0;
// while (i<10) {
//   console.log(i);
//   i = i+2;
// }

// Make the loop stop when i is 5.
// for (i = 0; i <10; i++) {
//   console.log(i);
//   if (i == 5) {
//     break;
//   }
// }

// Make the loop jump to the next iteration when i is 5.
// for (i = 0; i < 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }

// Use the getElementById method to find the first <p> element, and change its text to "Hello".
// {/* <p id="demo"></p>
// <script>
//   document.getElementsByTagName("p")[0].innerHTML = "Hello";
// </script> */}

// {/* <p class="test"></p>
// <p class="test"></p>
// <script>
// document.getElementsByClassName("test")[0].innerHTML = "Hello";
// </script> */}

// Use HTML DOM to change the value of the image's src attribute.
// <img id="image" src="smiley.gif">
// <script>
// document.getElementById("image").src = "pic_mountain.jpg";
// </script>

// Use HTML DOM to change the value of the input field.
// <input type="text" id="myText" value="Hello">
// <script>
// document.getElementById("myText").value = "Have a nice day!";
// </script>

// Change the text color of the <p> element to "red".
// <p id="demo"></p>
// <script>
// document.getElementById("demo").style.color = "red";
// </script>

// Change the font size of the p element to 40 pixels.
// <p id="demo"></p>
// <script>
// document.getElementById("demo").style.fontSize = "40px";
// </script>

// Use the CSS display property to hide the p element
// <p id ="demo"></p>
// <script>
//   document.getElementById('demo').style.display = "none";
// </script>

// Use the eventListener to assign an onclick event to the <button> element.
// <button id="demo">Click me1</button>
// <script>
//   document.getElementById('demo').addEventListenet('click', myFunction)
// </script>

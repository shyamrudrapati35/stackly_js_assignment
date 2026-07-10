// task-1

// let name = prompt('enter name')
// let age = prompt('enter age')
// console.log(`My name is ${name}, I am ${age} years old`)

//-------------------------------------

//task-2

// let status = confirm('Did you complete degree?')
// if(status === true){
//   console.log('Degree Completed')
// }else{
//   console.log('Degree Not Compeleted')
// }

//-------------------------------------

//task-3

// let mobilePrice = 15000
// let discount = 2000
// console.log(`Final Price : ${mobilePrice-discount}`)

//-------------------------------------

//task-4

// let age = prompt('age above 18?')
// age > 18 ? console.log('Eligible for vote') : console.log('Not eligible')

//-------------------------------------

//task-5

// let cart = ['rice','milk','sugar','tea powder']

// console.log(`first product : ${cart[0]}, last product : ${cart[cart.length-1]}, total products : ${cart.length}`)

//-------------------------------------

//task-6

// let student = {
//   name: 'Naveen',
//   age: 18,
//   course: 'MERN',
// };

// console.log(student.name, student.course)

//--------------------------------------

//task-7

// let salary = 25000
// let bonus = 5000
// console.log(salary+bonus)

//--------------------------------------

//task-8

// let username = 'admin'
// let password = '1234'

// let userName = prompt('enter user name')
// let pass_word = prompt('enter passowrd')

// username === userName && pass_word === password ? console.log('Login Sucessful') : console.log('Invalid Credentials')

//--------------------------------------

//task-9

// let foodPrice = 350;
// let deliveryCharges = 50;
// let gstTotal = 20;

// let output = `Total Bill : ${foodPrice + deliveryCharges}
// GST 5% : ${gstTotal}
// Grand Total : ${foodPrice + deliveryCharges + gstTotal}`;

// console.log(output);

//--------------------------------------

//task-10

// let product = {
//   name: 'Laptop',
//   price: 50000,
//   brand: 'ASUS',
//   stock: true,
// };

// console.log(`\
//   Product Name : ${product.name}
//   Brand : ${product.brand}
//   price : ${product.price}
//   stock available : ${product.stock}`)

//---------------------------------------

//task-11

// let attend = confirm('present')
// attend ? console.log('Attendance Marked') : console.log('Absent')

//---------------------------------------

//task-12

// let balance = prompt('enter current balance')
// let amount = prompt('enter withdraw amount')

// balance <= amount ? console.log(`Transaction Successful, Remaining Balalnce : ${balance-amount}`) : console.log('Insufficient balance')

//---------------------------------------

//task-13

// const employees = [
//   {
//     name: 'Shivam',
//     age: 55,
//     department: 'QA Tester',
//     salary: 30000,
//   },
//   {
//     name: 'Aarav',
//     age: 29,
//     department: 'Frontend Developer',
//     salary: 42000,
//   },
//   {
//     name: 'Priya',
//     age: 34,
//     department: 'Backend Developer',
//     salary: 55000,
//   },
//   {
//     name: 'Neha',
//     age: 27,
//     department: 'QA Tester',
//     salary: 28000,
//   },
//   {
//     name: 'Rahul',
//     age: 31,
//     department: 'DevOps Engineer',
//     salary: 65000,
//   },
//   {
//     name: 'Sneha',
//     age: 26,
//     department: 'UI/UX Designer',
//     salary: 32000,
//   },
//   {
//     name: 'Karan',
//     age: 38,
//     department: 'Project Manager',
//     salary: 78000,
//   },
//   {
//     name: 'Anjali',
//     age: 30,
//     department: 'HR',
//     salary: 29000,
//   },
//   {
//     name: 'Vikram',
//     age: 42,
//     department: 'QA Tester',
//     salary: 36000,
//   },
//   {
//     name: 'Meera',
//     age: 25,
//     department: 'Data Analyst',
//     salary: 47000,
//   },
// ];

// for (let i = 0; i < employees.length; i++) {
//   let employee = employees[i];
//   console.log(`\
//     ${employee.name}
//     ${employee.age}
//     ${employee.department}
//     ${employee.salary}
//     ${employee.salary > 30000 ? 'Senior Employee' : 'Junior Employee'}`);
// }

//---------------------------------------

// *** 29-6-26 js assignment ***

//tast-1

// let age = prompt('enter age')
// let Id = confirm('id available?')
// let Attendance = prompt('pls enter attendance')

// if (age >= 18 && Id && Attendance >= 75){
//   console.log('Access Granted')
// }else{
//   console.log('Access Denied')
// }

//---------------------------------------

//task-2

// let marks = prompt('enter marks')

// if (marks >= 90){
//   console.log('A+')
// }else if (marks >= 80){
// console.log('A')
// }else if(marks >= 70){
//   console.log('B')
// }else if(marks >= 60){
//   console.log('C')
// }else{
//   console.log('Fail')
// }

//---------------------------------------

//task-3

// let Balance = 5000;
// let Withdraw = 3000;
// // console.log(Withdraw%100)
// if (Balance > Withdraw && Withdraw % 100 === 0) {
//   console.log(`Transaction Successful
// Remaining Balance : ${Balance - Withdraw}`);
// }

//---------------------------------------

//task-4

// let choice = prompt('enter menu number from 1-5');

// switch (Number(choice)) {
//   case 1:
//     console.log('Pizza');
//     break;
//   case 2:
//     console.log('Burger');
//     break;
//   case 3:
//     console.log('Shawarma');
//     break;
//   case 4:
//     console.log('Biryani');
//     break;
//   case 5:
//     console.log('Juice');
//     break;
//   default:
//     console.log('enter correct number');
//     break;
// }

//-----------------------------------------

//task-5

// let Purchase = prompt('enter total amount')
// let PrimeUser = confirm('are you prime user?')

// if (Purchase >= 5000 && PrimeUser) {
//   console.log(`Originl Price : ${Purchase}
//     Discount : 20%
//     Final Price : ${Purchase*0.8}`)
// }else{
//   console.log(`Originl Price : ${Purchase}
//     Discount : 10%
//     Final Price : ${Purchase*0.9}`)
// }

//------------------------------------------

//task-6

// for (let i = 1; i<=30;i++){
//   console.log(`Day ${i} Present`)
// }

//------------------------------------------

//task-7

// const length = 10

// for (let i = 1; i <= length; i++){
//   if(i===6 || i === 7 || i === 8 || i === 9){
//     console.log(`${i} : Valid Mobile NUmber`)
//   }else{
//     console.log('Invalid Mobile Number')
//   }
// }

//-----------------------------------------

//task-8

// for (let i = 1; i <= 100; i++){
//   if(i%2===0){
//     console.log(i)
//   }
// }

//-----------------------------------------

//task-9

// let cart = ['Milk', 'Bread', 'Egg', 'Rice', 'Oil'];

// console.log(cart[0])
// console.log(cart[cart.length-1])
// console.log(cart.length)

//-----------------------------------------

//task-10

// let employee = {
//   name : 'ramesh',
//   salary : 12000,
//   department : 'sales',
//   exp : 1.6
// }

// console.log(employee.name)
// console.log(employee.department)
// console.log(employee.exp)

//-----------------------------------------

//task-11

// let name = prompt('name');
// let ID = prompt('ID');
// let depart = prompt('department');

// console.log(`Welcome ${name}
// Your Employee ID is ${ID}
// Department : ${depart}`);

//-----------------------------------------

//task-12

// let name = prompt('name')
// let age = prompt('age')
// let terms = confirm('Do you accept Terms')

// alert('Registered Successfully')

//-----------------------------------------

//task-13

// let salary = Number(prompt('enter salary'))

// const incriment = 0.15

// console.log(`Old Salary ${salary}
// Increment Amount 15%
// New Salary ${salary+(salary*incriment)}`)

//-----------------------------------------

//task-14

// let Burger = 150

// let Pizza = 300

// let Juice = 80

// let total = Burger+Pizza+Juice

// console.log(total)
// console.log('GST :', '18%')
// console.log(total+(total*0.20))

//------------------------------------------

//task-15

// Rahul - Present

// Arun - Absent

// Kamal - Present

// Priya - Present

// Divya - Absent

// let employeeData = {
//   rahul: 'Present',
//   Arun: 'Absent',
//   Kamal: 'Present',
//   Priya: 'Present',
//   Divya: 'Absent',
// };

// let totalPresent = 0;
// let totalAbsent = 0;

// Object.values(employeeData).forEach(value => {
//   if(value === 'Present'){
//     console.log(value)
//     totalPresent++
//   }else{
//     console.log(value)
//     totalAbsent++
//   }

// })

// console.log(totalPresent)
// console.log(totalAbsent)

//-----------------------------------------

// *** 1-7-26 js assignment ***

//-----------------------------------------

//task-1

// function name() {
//   console.log('Welcome to Stackly IT')
// }

// name()

//-----------------------------------------

//task-2

// let data = (name, depart, salary) => {
//   console.log(name)
//   console.log(depart)
//   console.log(salary)
// };

// data('Naveen', 'Developer', 30000)

//-----------------------------------------

//task-3

// let salCalc = (salary,bonus) => {
//   console.log(salary+bonus)
// }

// salCalc(40000,5000)

//-----------------------------------------

//task-4

// let marks = prompt('enter marks')

// let status = (marks) => {
//   marks >= 35 ? console.log('Pass') : console.log('Fail')
// }

// status(marks)

//-----------------------------------------

//task-5

// let name = () => 'Naveen'

// console.log(name())

//-----------------------------------------

//task-6

// let price = () => 25000
// let priceT = price()
// console.log(priceT + (priceT * 0.18) )

//-----------------------------------------

//task-7

// function demo() {
//   if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//   }

//   console.log(a);
// }

// demo()

// Q1 - var a will get printed
// Q2 - let b & const c will give an error
// Q3 - since var is global scope it can be accessed outside of the conditional block where as let & const are block scope htey cant  be accessed outside of the if block

//-----------------------------------------

//task-8

// console.log(a)
// var a = 100

// console.log(b)
// let b = 200

// since var a is a global scope it get hoisted to the to of a stack so we can access the var a while as let b is a block scope it dosnt get hoisted.

//-----------------------------------------

//task-9

// function message() {
//   console.log('Good Morning')
// }

// message()

//-----------------------------------------

//taks-10

// let message = function () {
//   console.log('Welcome Employee')
// }
// message()

//-----------------------------------------

//task-11

// let message = () => {
//   console.log('Javascript Training')
// }

// message()

//-----------------------------------------

//task-12

// let returnFunction = () => 'Stackly'

// let value = returnFunction()

// console.log('Welcome '+value)

//----------------------------------------

//task-13

// let func1 = (a) => {
//   console.log('Login Successful')
//   a()
// }

// let func2 = () => {
//   console.log('Dashboard Loaded')
// }

// func1(func2)

//----------------------------------------

//task-14

// let funcO = () => {
//   console.log('Order Recived')
// }

// let funcP = ()=> {
//   console.log('Preparing Food')
// }

// let funcD = () => {
//   console.log('Delivered')
// }

// // funcO(funcP(funcD()))
// funcD(funcP(funcO()))

//----------------------------------------

//task-15

// function* coupons() {
//   yield "10% Discount"
//   yield "20% Discount"
//   yield "30% Discount"
//   yield "Better Luck Next Time"
// }

// const coupon = coupons()

// console.log(coupon.next().value)
// console.log(coupon.next().value)
// console.log(coupon.next().value)
// console.log(coupon.next().value)

//----------------------------------------

//task-16

// function* items() {
//   yield 'Apple'
//   yield 'Orange'
//   yield 'Banana'
// }

// let item = items()

// console.log(item.next().value)
// console.log(item.next().value)
// console.log(item.next().value)

//----------------------------------------

//task-17

// function discount(price) {
//   return function(percent) {
//     return price - (price * percent / 100)
//   };
// }

// console.log(discount(1000)(10))

//----------------------------------------

//task-18

// function salary(baseSalary) {
//   return function(bonus) {
//     return function(allowance) {
//       return baseSalary + bonus + allowance
//     }
//   }
// }

// console.log(salary(30000)(5000)(2000))

//----------------------------------------

//task-19

// function userName() {
//   console.log("Enter Username")
//   password();
// }

// function password() {
//   console.log("Verify Password")
//   loginSuc();
// }

// function loginSuc() {
//   console.log("Login Successful")
//   load();
// }

// function load() {
//   console.log("Load Dashboard")
// }

// userName();

//----------------------------------------

//3-7-26 *** js assignment ***

//----------------------------------------

//task-1

// function funcName() {
//   if (true) {
//     var companyName = 'Stackly IT';
//     let employeeId = 'STL-123-301'
//     const password = 1234
//   }

//   // let & const will give a error since its a block level scope variables
// }

//----------------------------------------

//task-2

// console.log(accountBalance)
// var accountBalance = 12847

// console.log(accountBalance)
// let accountBalance

// console.log(accountBalance)
// const accountBalance = 12

//since var is a global scope it get hoisted so we can access before its even declared.

//---------------------------------------

//task-3

// function orderFood(foodName) {
//   console.log(`Order Placed : ${foodName}`)
// }

// orderFood("Chicken Biryani")

//---------------------------------------

//task-4

// let status = function (params) {
//   console.log(`status update : ${params}`)
// }

// status('Busy in meeting')

//---------------------------------------

//task-5

// let cityData = (city,temp) => {
//   console.log(`${city} temprature is ${temp}"C`)
// }

// cityData('hyderabad', 46)

//---------------------------------------

//task-6

// (() => {
//   console.log(`Today's Offer
// Flat 60% Discount
// `)
// })()

//---------------------------------------

//task-7

// let makePayment = () =>{ console.log('Payment Processing...')}

// let paymentSuccess = (a) => {
//   a()
//   console.log('Payment Successful')
// }

// paymentSuccess(makePayment)

//---------------------------------------

//task-8

// function* playlist(){
//   yield 'Video 1'
//   yield 'Video 2'
//   yield 'Video 3'
//   yield 'Video 4'
// }

// let list = playlist()

// console.log(list.next().value)
// console.log(list.next().value)
// console.log(list.next().value)
// console.log(list.next().value)
// console.log('Playlist Completed')

//---------------------------------------

//task-9

// let calculateTotal = () => 485

// let result = calculateTotal()

// console.log(result)

//---------------------------------------

//task-10

// let cartTotal = (a,b,c) => a+b+c

// let totalBill = cartTotal(127.12, 1230, 1156)

// console.log(totalBill)

//--------------------------------------

//task-11

// function salary(basic) {
//     return (hra) => (bonus) => basic + hra + bonus
// }

// function uncurry(fn) {
//     return (a, b, c) => fn(a)(b)(c)
// }

// const salaryCalculator = uncurry(salary)

// console.log("Total Salary :", salaryCalculator(50000, 5000, 3000))

//-------------------------------------

//task-12

// const foodBill = food => drinks => dessert => food + drinks + dessert

// console.log(foodBill(200)(100)(80))

//------------------------------------

//task-13

// function* coupon(){
//   yield 'WELCOME10'
//   yield 'SAVE20'
//   yield 'SUPER30'
//   yield 'MEGA50'
// }

// let getCoupons = coupon()

// console.log(getCoupons.next().value)
// console.log(getCoupons.next().value)
// console.log(getCoupons.next().value)
// console.log(getCoupons.next().value)
// console.log('No More Coupons')

//------------------------------------

//task-14

// let call = () => console.log('Transaction Successful')
// let withdraw = (call) => {
//   console.log('Processing...')
//   call()
// }
// withdraw(call)

//-----------------------------------

//task-15

// if (true) {
//   var company = 'Stackly';
//   let designation = 'MERN Developer';
//   const salary = 50000;
// }

// console.log(company)
// console.log(designation)
// console.log(salary)

//var is a global varaible so it can be accessed outside the loop. let and const are local scoped variables they cannot access outside the loop

//-----------------------------------

//7-7-26 *** js assignment ***

//-----------------------------------

//task-1

// let employee = {
//   name: 'Naveen',
//   salary: 35000,
// }

// let addObj = {
//   bonus: 5000,
//   department: 'Developer'
// }

// let newObj = {
//   ...employee,
//   ...addObj
// }

// console.log(newObj)

//-----------------------------------

//task-2

// let calculateBill = (...store) => {
//   console.log(store.length)
//   console.log(store.reduce((acc, curr)=> acc + curr,0))
// }

// calculateBill(10,20,30,40)

//-----------------------------------

//task-3

// let student = {
//   name: 'Rahul',
//   age: 22,
//   course: 'MERN',
//   city: 'Chennai',
// };

// let {name,age,course,city} = student

// console.log(name)
// console.log(age)
// console.log(course)
// console.log(city)

//-----------------------------------

//task-4

// let foods = ['Pizza', 'Burger', 'Fries'];

// foods.pop()
// foods.push('Coke')
// foods.push('Ice Cream')

// console.log(foods)

//-----------------------------------

//task-5

// let transactions=[1000,2000,3000,4000]

// transactions.shift()
// transactions.unshift(500)

// console.log(transactions)

//-----------------------------------

//task-6

// let dept1=["HR","Sales"]
// let dept2=["Developer","Testing"]

// let newDept = dept1.concat(dept2)

// console.log(newDept)

//----------------------------------

//task-7

// let products = ['Laptop', 'Mouse', 'Keyboard', 'Monitor'];

// let word = 'Keyboard'

// products.find(item => item === word) === word ? console.log('Available') : console.log('Not Available')

//----------------------------------

//task-8

// let login = () => console.log('Login Success')
// let dashboard = (a) => {
//   a()
//   console.log('Dashboard Opened')
// }

// dashboard(login)

//-----------------------------------

//task-9

// function* coupons(){
//   yield 'WELCOME10';
//   yield 'SAVE20';
//   yield 'MEGA50';
//   yield 'FREE100';
// }

// let news = coupons()

// console.log(news.next().value);
// console.log(news.next().value);
// console.log(news.next().value);
// console.log(news.next().value);

//-----------------------------------

//task-10

// function course(courseName) {
//   return (batch) => (room) => {
//     console.log('Course :', courseName);
//     console.log('Batch  :', batch);
//     console.log('Room   :', room);
//   };
// }

// course('JavaScript')('Morning')('Batch-36');

//-----------------------------------

//task-11

// let movies = ['Leo', 'GOAT', 'Dragon', 'Retro', 'Coolie'];

// let newList = movies.slice(2,4)

// console.log(newList)

//----------------------------------

//task-12

// let ids = [101, 102, 103, 104, 105];

// ids.splice(2, 2, 501, 502);

// console.log(ids);

//----------------------------------

//task-13

// let price = [5000, 250, 700, 12000, 50];
// price.sort((a, b) => a - b);
// console.log(price);

//----------------------------------

//task-14

// let data = ['Electronics', ['Mobiles', ['Samsung', 'Apple']]];

// let [a, [b, [c, d]]] = data;

// console.log(a, b, c, d);

//---------------------------------

//task-15

// let developers = ['John', 'David'];

// let designers = ['Ram', 'Kiran'];

// console.log([...developers,...designers])

//---------------------------------

//task-16

// let calculateSalary = (a, b) => a + b;

// let total = calculateSalary(10,5)

// console.log(total)

//---------------------------------

//task-17

// if (true) {
//   var a = 12;
//   let b = 13;
//   const c = 14;
// }

// we can only access the var outside the if block since its a global variable

//---------------------------------

//task-18

// let orders = ['Pizza', 'Burger', 'Pizza', 'Sandwich', 'Pizza'];
// let name = 'Pizza';
// console.log(orders.indexOf(name));
// console.log(orders.lastIndexOf(name));

//---------------------------------

//task-19

// let items = [1, 2, [3, 4, [5, 6]]];

// let newArray = items.flat(3)

// console.log(newArray)

//---------------------------------

//task-20

// let cart = ["Mouse", "Keyboard"];

// // 1. Add "Monitor" using push()
// cart.push("Monitor");

// // 2. Add "Laptop" at the beginning
// cart.unshift("Laptop");

// // 3. Remove "Keyboard" using splice()
// let index = cart.indexOf("Keyboard");
// if (index !== -1) {
//   cart.splice(index, 1);
// }

// // 4. Check whether "Mouse" exists
// console.log(cart.includes("Mouse")); // true

// // 5. Merge with accessories using the spread operator
// let accessories = ["Webcam", "Speaker"];

// let completedCart = [...cart, ...accessories];

// // Print the completed cart
// console.log(completedCart);

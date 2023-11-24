import './App.css';

function myFunction() {
  return function () {
    console.log("My Function CLG");
  }
}

// const result = myFunction();
// console.log(typeof result);
// result();

function addNumbers(a, b) {
  return (a + b);
};

// const result = addNumbers(10, 20);

// console.log(result);

// myFunction()();

function add(a) {
  return function (b) {
    return (a + b);
  }
}

const result = add(5)(100);
console.log(result);


const addArrow = a => b => a + b;
console.log(addArrow(10)(20));

/* Higher Order Functins 

01.Take one argument as a function

function myFunction(function(){}){
  
}
function myFunction(function(){},string,number,boolean){

}

02.

function myFunction((){},function(){},function(){},function(){}){

}
function myFunction((){},function(){},function(){},function(){},string,number,boolean){

}

03.Return a function

function myFunction(){
  return const myFunction = () =>{}
}
function myFunction(string,number,boolean){
  return const myFunction = () =>{}
}

function myFunction((){},function(){},function(){},function(){}){
  return const myFunction = () =>{}
}
function myFunction((){},function(){},function(){},function(){},string,number){
  return const myFunction = () =>{}
}


*/

const resultA = [45, 78, 45, 65, 12, 8, 9];
const resultVal = resultA.map(printResult);

function printResult(val) {
  return `result ${val}`;
}


console.log(resultVal);





function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;

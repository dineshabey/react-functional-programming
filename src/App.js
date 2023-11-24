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

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;

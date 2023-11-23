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
  return function () {
    return (a + 10);
  }
}

const result = add(5)();
console.log(result);


function App() {
  return (
    <div className="App">



    </div>
  );
}

export default App;

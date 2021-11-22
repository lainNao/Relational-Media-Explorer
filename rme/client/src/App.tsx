import "./App.css";

function App() {
  const onClickButton = () => {
    fetch("http://localhost:4321/")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="App">
      <header className="App-header">
        sadff
        <button onClick={onClickButton}>click</button>
      </header>
    </div>
  );
}

export default App;

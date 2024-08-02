import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <body>
          <Weather />
        </body>
        <footer>
          Coded by <em>Ash Sahin.</em> Code hosted on{" "}
          <a href="https://github.com/ashsah00/shecode-react">Github</a> and
          website on <a href="https://weatheract.netlify.app">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;

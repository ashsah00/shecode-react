import "./App.css";
import Weather from "./Weather";
import { DNA } from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DNA
          visible={true}
          height="180"
          width="180"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
        <p>
          <Weather city="Paris" />
        </p>
      </header>
      <footer>
        Coded by <em>Ash Sahin.</em>
      </footer>
    </div>
  );
}

export default App;

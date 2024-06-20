import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
      </div>
      <footer>
        This project was coded by <a href="/"> Lebogang Dingalo</a> and is{" "}
        <a
          href="https://github.com/Lebo1094/my-react-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://ld-react-project.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;

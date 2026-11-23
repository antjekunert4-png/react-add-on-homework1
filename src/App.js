import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        This project was coded by{" "}
        <a
          href="https://github.com/antjekunert4-png"
          target="_blank"
          rel="noopener noreferrer"
        >
          Antje Kunert
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/antjekunert4-png/react-add-on-homework1"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://react-add-on-homework1.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Render
        </a>
        .
      </footer>
    </div>
  );
}

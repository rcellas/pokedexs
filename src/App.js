import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar/>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;

import "./styles/App.css";
import "./styles/hero.css";
import "./styles/box.css";
import Hero from "./components/Hero";
import Box from "./components/Box";

function App() {
  return (
    <div className="App">
      <Hero />
      <Box />
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CharacterList from "./pages/CharacterList";
import Character from "./pages/Character";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterList />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </Router>
  );
}

export default App;

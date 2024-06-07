import { BrowserRouter, Route, Routes } from "react-router-dom"; // React Router v6
import "./assets/styles/theme.scss";
import Start from "./views/Start/Start";
import Profile from "./views/Profile/Profile";
import Home from "./views/Home/Home";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <p>&copy; 2024 Webcoder.</p>
      </footer>
    </main>
  );
}

export default App;

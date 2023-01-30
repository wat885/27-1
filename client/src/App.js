import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./components/News";
import Navbar from "./components/Navbar";
import ActivityPage from "./pages/ActivityPage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ActivityPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/:id" element={<EditPage />} />
        <Route path="/register" element={<News />} />
        <Route path="*" element={<h1>Page Not Found.</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar.jsx";
import AppRoutes from "./components/AppRoutes.jsx";

function App() {
  return (
    <Router>
      <div className='app'>
        <h1>Features</h1>
          <NavBar />
          <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
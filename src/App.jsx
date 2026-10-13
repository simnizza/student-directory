import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { students } from "./data/students";
import "./App.css";

function App() {
  const theme = "dark"; // ឬ "light"
  
  const handleSelect = (name) => {
    alert(`អ្នកបានជ្រើស៖ ${name}`);
  };

  return (
    <div className={`app ${theme}`} style={{ padding: "20px" }}>
      <Header title="Student Directory" year={2026} showYear={true} />
      <Dashboard students={students} onSelect={handleSelect} theme={theme} />
    </div>
  );
}

export default App;
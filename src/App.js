import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';


function App() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column"
      style={{ height: "100vh" }}>
      <div style={{ width: "45%" }}>
        <AddTask />
        <ListTask />
      </div>
    </div>
  );
}

export default App;

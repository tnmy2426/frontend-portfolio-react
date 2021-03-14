import "./App.scss";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className='App'>
      <div className='sidebar'>
        <NavBar />
      </div>
      <div className='main_content'></div>
    </div>
  );
}

export default App;

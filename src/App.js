import "./App.scss";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className='App'>
      <aside className='sidebar'>
        <NavBar />
      </aside>
      <main className='main_content'>
        <div className='content'>
          <HomePage />
        </div>
      </main>
    </div>
  );
}

export default App;

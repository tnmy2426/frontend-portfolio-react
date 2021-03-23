import "./App.scss";
import { Switch, Route } from "react-router-dom";

// Components
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PortfolioPage from "./Pages/PortfolioPage";
import ContactPage from "./Pages/ContactPage";
import { useState } from "react";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };
  return (
    <div className='App'>
      <aside className={`sidebar ${navToggle ? "nav_toggle" : ""}`}>
        <NavBar />
      </aside>
      <div className='nav_btn' onClick={navClick}>
        <div className='lines_1'></div>
        <div className='lines_2'></div>
        <div className='lines_3'></div>
        <div className='lines_4'></div>
      </div>
      <main className='main_content'>
        <div className='content'>
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/about' exact>
              <AboutPage />
            </Route>
            <Route path='/portfolios' exact>
              <PortfolioPage />
            </Route>
            <Route path='/contact' exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;

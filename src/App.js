import "./App.scss";
import { Switch, Route } from "react-router-dom";

// Components
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PortfolioPage from "./Pages/PortfolioPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <div className='App'>
      <aside className='sidebar'>
        <NavBar />
      </aside>
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
            <Route path='/blogs' exact>
              <BlogPage />
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

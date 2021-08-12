import React, { useState } from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Section from "./Section.js";
import Admin from "./Admin";
import ArticlePage from "./ArticlePage.js";
import Menu from "./Menu.js";
import Footer from "./Footer.js";
import SearchPage from "./SearchPage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [menu, setMenu] = useState(false);


  const adjustMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Navbar Menu={adjustMenu} menuOpt={menu} />
            {menu ? (
              <Menu Menu={adjustMenu} />
            ) : (
              <Switch>
                <Route path="/category/:sectionName">
                  <Section />
                </Route>
                <Route path="/posts/:articleId">
                  <ArticlePage />
                </Route>
                <Route path="/search/:searchTerm">
                  <SearchPage/>
                </Route>
                <Route path="/">
                  <HomePage />
                </Route>
              </Switch>
            )}
            <Footer/>  
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

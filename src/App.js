import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Section from "./Section.js";
import Admin from "./Admin";
import ArticlePage from "./ArticlePage.js";
import Menu from "./Menu.js";
import Footer from "./Footer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [menu, setMenu] = useState(false);
  const [articleImage, setImage] = useState(null);

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
                  <Section addImage={setImage} />
                </Route>
                <Route path="/posts/:articleId">
                  <ArticlePage image={articleImage} />
                </Route>
                <Route path="/">
                  <HomePage addImage={setImage}/>
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

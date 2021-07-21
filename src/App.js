import "./App.css";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Section from "./Section.js";
import Admin from "./Admin"
import ArticlePage from "./ArticlePage.js"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>  
      <Switch>
      <Route path="/admin">
        <Admin/>
      </Route>
      <Route path="/">
      <Navbar/>
        <Switch>
          <Route path="/section/:sectionName">
            <Section/>
          </Route>
          <Route path="/article/:articleId">
            <ArticlePage />
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </Route>
      
      </Switch>
      </Router>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Users from "./Users";

const components = [
  { path: "/", name: "Home", Component: Home, transitionClasses: "main" },
  { path: "/about", name: "About", Component: About, transitionClasses: "page" },
  { path: "/users", name: "Users", Component: Users, transitionClasses: "page" },
];

function App() {
  const [activeNavLink, setActiveNavLink] = useState();

  return (
    <BrowserRouter>
      <Navigation activeNavLink={activeNavLink} />
      {components.map(({ path, Component, transitionClasses }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition in={match != null} timeout={2500} classNames={transitionClasses} unmountOnExit>
              <div className={transitionClasses}>
                <Component setActiveNavLink={setActiveNavLink} />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </BrowserRouter>
  );
}

export default App;

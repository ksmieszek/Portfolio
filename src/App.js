import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import GlobalStyle from "GlobalStyle";
import Navigation from "components/organisms/Navigation";
import Home from "pages/Home";
import About from "pages/About";
import Users from "pages/Users";

const components = [
  { path: "/", Component: Home, transitionClasses: "main" },
  { path: "/about", Component: About, transitionClasses: "page" },
  { path: "/users", Component: Users, transitionClasses: "page" },
];

function App() {
  const [activeNavLink, setActiveNavLink] = useState();

  return (
    <BrowserRouter>
      <GlobalStyle />
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

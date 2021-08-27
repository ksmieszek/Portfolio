import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import GlobalStyle from "GlobalStyle";
import Navigation from "components/organisms/Navigation";
import Home from "pages/Home";
import ProjectErsi from "pages/ProjectErsi";
import ProjectCodeFast from "pages/ProjectCodeFast";
import routes from "routes";

const components = [
  { path: "/", Component: Home, transitionClasses: "main" },
  { path: routes.ersi, Component: ProjectErsi, transitionClasses: "page" },
  { path: routes.codefast, Component: ProjectCodeFast, transitionClasses: "page" },
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
            <CSSTransition
              in={match != null}
              timeout={{
                enter: 1800,
                exit: 1500,
              }}
              classNames={transitionClasses}
              unmountOnExit
            >
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

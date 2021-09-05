import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import routes from "routes";
import GlobalStyle from "GlobalStyle";
import Navigation from "components/organisms/Navigation";
import Home from "pages/Home";
import ProjectPixelPerfect from "pages/ProjectPixelPerfect";
import ProjectCodeFast from "pages/ProjectCodeFast";
import ProjectMyDictionary from "pages/ProjectMyDictionary";
import ProjectHotelWeb from "pages/ProjectHotelWeb";
import ProjectHotelManagement from "pages/ProjectHotelManagement";
import ProjectHotelDesktop from "pages/ProjectHotelDesktop";
import ProjectPortfolio from "pages/ProjectPortfolio";

const components = [
  { path: "/", Component: Home, transitionClasses: "home" },
  { path: routes.pixelperfect, Component: ProjectPixelPerfect, transitionClasses: "project" },
  { path: routes.codefast, Component: ProjectCodeFast, transitionClasses: "project" },
  { path: routes.mydictionary, Component: ProjectMyDictionary, transitionClasses: "project" },
  { path: routes.hotelweb, Component: ProjectHotelWeb, transitionClasses: "project" },
  { path: routes.hotelmanagement, Component: ProjectHotelManagement, transitionClasses: "project" },
  { path: routes.hoteldesktop, Component: ProjectHotelDesktop, transitionClasses: "project" },
  { path: routes.portfolio, Component: ProjectPortfolio, transitionClasses: "project" },
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

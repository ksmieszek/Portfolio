import { useState, useEffect, useContext, createContext } from "react";
import { useLocation } from "react-router-dom";
import routes from "routes";

const ActiveLinkContext = createContext();
export const useActiveLink = () => useContext(ActiveLinkContext);

const ActiveLinkProvider = ({ children }) => {
  const [activeNavLink, setActiveNavLink] = useState();
  let location = useLocation();

  useEffect(() => {
    if (location.pathname !== routes.home) setActiveNavLink(null);
  }, [location.pathname]);

  return <ActiveLinkContext.Provider value={{ activeNavLink, setActiveNavLink }}>{children}</ActiveLinkContext.Provider>;
};

export default ActiveLinkProvider;

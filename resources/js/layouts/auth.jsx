import React from "react";
import { 
  Routes, 
  Route,
  matchRoutes, 
  useLocation
} from "react-router-dom";
import {
  NavbarStickyTopPill,
  Footer
} from "@widget/layouts/auth";
import routers from "@/routes";

let template = "auth";

const Auth = () => {
  const { pathname } = useLocation();

  routers.filter(({pages, layout}) => 
    pages.filter(e => { 
      if (e.path === pathname) {
        template = layout
      }
    })
  );

  const { pages } = routers.filter(e => e.layout === template)[0];

  return (
    <div 
      className={`relative min-h-screen w-full 
        ${template === "auth" && "p-1 lg:p-"}
        `}
      >
      { template === "auth" && <NavbarStickyTopPill /> }
      {
        <Routes>
        {
          pages.map(({ path, element }) => (
            <Route exact path={path} element={element} />
          ))
        }
        </Routes> 
      }
      { template === "auth" && <Footer/> }
    </div>
  )
}

export default Auth;

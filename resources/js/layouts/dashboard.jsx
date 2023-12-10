import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  ChartPieIcon,
  UserIcon,
  UserPlusIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
// import routers from "@routes";

const Dashboard = () => {

  return (
    <div className="relative min-h-screen w-full">
      {/*{ <Routes>
        {routers.map(
          ({ layout, pages }) =>
            layout === "auth" &&
            pages.map(({ path, element }) => (
              <Route exact path={path} element={element} />
            ))
        )}
      </Routes> }*/}
    </div>
  );
}

export default Dashboard;

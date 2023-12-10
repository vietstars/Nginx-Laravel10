import React from "react";
import {
  Routes, 
  Route,
  Navigate 
} from "react-router-dom";

import { 
  Dashboard, 
  Auth,
  Blank
} from "@layout";

const Routers = () => (
  <Routes>
    <Route path="/dashboard/*" element={<Dashboard />} />
    <Route path="/*" element={<Auth />} />
    <Route path="*" element={<Navigate to="/portal" replace />} /> 
  </Routes>
)

export default Routers;
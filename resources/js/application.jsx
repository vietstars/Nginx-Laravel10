import React from 'react';
import { 
  createRoot 
} from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import ResourceProvider from '@context/useResource';
import Router from '@page/router';
import "@css/app.scss";

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ResourceProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </ResourceProvider>
  </React.StrictMode>
);

import React from 'react';
import { 
  createRoot 
} from 'react-dom/client'

export default function App(){
  return(
    <h1 className="dark:text-white">
      How To Install React in Laravel 10 with Vite
    </h1>
  );
}

if(document.getElementById('root')){
  createRoot(document.getElementById('root')).render(<App />)
}
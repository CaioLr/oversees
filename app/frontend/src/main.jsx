import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { HashRouter, useRoutes } from 'react-router-dom'
import routes from 'virtual:generated-pages-react'

// Tauri imports
import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";

await listen('hardware_event', (event) => {
  console.log("Hardware event received:", event.payload);
});

function App() {
  return useRoutes(routes)
}

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)

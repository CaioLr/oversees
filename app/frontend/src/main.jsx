import { createRoot } from 'react-dom/client'
import './main.css'
import { HashRouter, useRoutes } from 'react-router-dom'
import routes from 'virtual:generated-pages-react'

// Tauri imports
import { invoke } from "@tauri-apps/api/core";
import { listen } from "@tauri-apps/api/event";

await listen('hardware_event', (event) => {
  console.log("Hardware event received:", JSON.stringify(event.payload));
});

async function init() {

  await new Promise(resolve => setTimeout(resolve, 5000));
  const hardwareInfo = await invoke("get_hardware_static_info");
  console.log("Hardware Info:", hardwareInfo);
}

init();

function App() {
  return useRoutes(routes)
}

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)

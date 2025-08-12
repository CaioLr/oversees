import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import { HashRouter, useRoutes } from 'react-router-dom'
import routes from 'virtual:generated-pages-react'


import { invoke } from "@tauri-apps/api/core";


async function run() {
  const result = await invoke("run_subprocess");
  console.log(result); // "Hello from subprocess!"
}

run();

function App() {
  return useRoutes(routes)
}

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
)

#[cfg_attr(mobile, tauri::mobile_entry_point)]

use tauri::command;
use std::process::Command;

#[command]
fn run_subprocess() -> Result<String, String> {
    let output = Command::new("echo")
        .arg("Hello from subprocess!")
        .output()
        .map_err(|e| e.to_string())?;

    Ok(String::from_utf8_lossy(&output.stdout).to_string())
}


pub fn run() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![run_subprocess])
    .setup(|app| {
      if cfg!(debug_assertions) {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
            .level(log::LevelFilter::Info)
            .build(),
        )?;
      }
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

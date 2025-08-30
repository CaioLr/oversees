#[cfg_attr(mobile, tauri::mobile_entry_point)]

mod events;
mod commands;

pub fn run() {
  tauri::Builder::default()

    .invoke_handler(tauri::generate_handler![commands::hardware_commands::get_hardware_static_info])

    .setup(|app| {
      if cfg!(debug_assertions) {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
            .level(log::LevelFilter::Info)
            .build(),
        )?;

      }

      // Starts hardware events
      events::hardware_events::hardware_json_emitter(app.handle().clone());
      

      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

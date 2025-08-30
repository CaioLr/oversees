use tauri::Manager;

#[tauri::command]
pub fn get_hardware_static_info() -> String {
    "Hello from Rust backend 🚀".into()
}     
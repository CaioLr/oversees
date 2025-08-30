use serde::Serialize;
use tauri::{AppHandle, Emitter};
use super::performance_info;

#[derive(Clone, Serialize)]
struct Payload {
    performance_info: String,
}

pub fn hardware_json_emitter(app: AppHandle) {

    tauri::async_runtime::spawn(async move {
            
        loop {
            let payload = Payload {
                performance_info: performance_info::get_recurring_hardware_info(),
            };

            if let Err(e) = app.emit("hardware_event", &payload) {
                eprintln!("Failed to emit hardware_event: {}", e);
            }

            tokio::time::sleep(std::time::Duration::from_secs(10)).await;
        }

    });


}
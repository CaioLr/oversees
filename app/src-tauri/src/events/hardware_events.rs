use serde::Serialize;
use tauri::{AppHandle, Emitter};

#[derive(Clone, Serialize)]
struct Payload {
  count: usize,
  message: String,
}

pub fn hardware_json_emitter(app: AppHandle) {

    tauri::async_runtime::spawn(async move {
        
        let mut count = 0;
    
        loop {
            let payload = Payload {
                count,
                message: "Hello from JSON emitter!".into(),
            };

            if let Err(e) = app.emit("hardware_event", &payload) {
                eprintln!("Failed to emit hardware_event: {}", e);
            }

            count += 1;
            tokio::time::sleep(std::time::Duration::from_secs(3)).await;
        }

    });


}
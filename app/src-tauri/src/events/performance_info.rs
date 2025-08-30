use serde::Serialize;

#[derive(Serialize)]
struct RecurringHardwareInfo {
    performance: String,
}


pub fn get_recurring_hardware_info() -> String {


    let performance = "Testing recurring hardware info";

    let return_value = RecurringHardwareInfo {
        performance: performance.to_string(),
    };

    serde_json::to_string(&return_value).unwrap()
}


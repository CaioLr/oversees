use hardware_query::HardwareInfo;
use serde::Serialize;

#[derive(Serialize)]
struct HardwareInfoJson {
    cpu: String,
    gpu: String,

}


pub fn get_hardware_info() -> String{
   
    let hw_info = HardwareInfo::query()
        .expect("Failed to query hardware information");


    let cpu = format!("{:?}", hw_info.cpu());
    let gpu = format!("{:?}", hw_info.gpus());


    let return_value = HardwareInfoJson {
        cpu: cpu,
        gpu: gpu,

    };

    serde_json::to_string(&return_value).unwrap()
}
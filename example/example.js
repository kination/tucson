
const camelizeKeys = (obj) => {
  let reNamed = Object.keys(obj).map((key) => ({ [camelize(key)]: obj[key]}))
  return Object.assign(...reNamed)
}

const camelize = (key) => {
  return key.toUpperCase()
}

const testValue = (obj) => {
  let reForm = Object.keys(obj).map(key => {
    if (key === "TASK_NAME") {
      obj[key] = obj[key].toUpperCase()
    }
    // return obj
  })
  console.log(reForm)
}

let dummyJson = 
      {
          "id": "1",
          "project_id": "1",
          "model_id": "1",
          "dataset_id": "1",
          "task_name": "A sample training",
          "max_steps": "100",
          "learning_rate": "0.001",
          "batch_size": "32",
          "start_step": "0",
          "is_archived": "0",
          "status": "TRAINING_QUEUE_STATUS_FINISHED",
          "requested_date": "2018-09-20 03:54:44",
          "creation_date": "2018-09-20 03:50:57",
          "user_id": "2",
          "group_id": "1",
          "project_name": "A sample project",
          "model_name": "LMNet Quantize",
          "model_input_type_code": "MODEL_INPUT_TYPE_IMAGE",
          "model_type_code": "MODEL_TYPE_CLASSIFICATION",
          "dataset_name": "mnist_20.zip",
          "dataset_type_code": "DATASET_TYPE_CLASSIFICATION",
          "first_name": "User",
          "last_name": "Leapmind"
      }

resp = camelizeKeys(dummyJson)
console.log(JSON.stringify(testValue(resp)))

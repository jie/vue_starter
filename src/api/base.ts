import axios from 'axios';

const MsgErr = "api_request_error"
const MsgOk = "ok"

async function webAPI(url: string, data: object, header: object = {}, method: string = "POST", sessionSetting: object = {}) {
  // TODO: add session process

  let _data = { ...data }
  let _header = { ...header }
  let result;
  let err
  try {
    result = await axios.post(url, _data, _header);
  } catch (error) {
    console.error(error);
    err = error
  }
  if (result) {
    return { status: true, data: result.data, msg: MsgOk }
  } else {
    return { status: false, data: {code: -1, err: err}, msg: MsgErr }
  }
}


export default {
  webAPI
}
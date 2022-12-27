export interface IAuth {
  device_id: string;
  expire: string;
  token: string;
  valid_til: string;
}

export interface ILogin {
  name: string;
  premium_code: string;
}

export interface Web {
  path: string;
  controller: new () => any;
  method: string;
}

export interface Web {
  routeMethod: "get" | "post";
  path: string;
  controller: new () => any;
  method: string;
}

import { useState } from "react";
export const method = {
  parent: {} as any,
  state() {
    const { request } = this.parent;
    const [email, setEmail] = useState(() => {
      if (request != null) {
        if (request.email != null) {
          return request.email;
        }
      }

      return "";
    });

    const [password, setPassword] = useState(() => {
      if (request != null) {
        if (request.password != null) {
          return request.password;
        }
      }

      return "";
    });

    return {
      email,
      setEmail,
      password,
      setPassword,
    };
  },
};

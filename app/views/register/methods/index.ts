import { useState } from "react";
export const method = {
  parent: {} as any,
  state() {
    const { request } = this.parent;
    const [name, setName] = useState(() => {
      if (request != null) {
        if (request.name != null) {
          return request.name;
        }
      }

      return "";
    });

    const [email, setEmail] = useState(() => {
      if (request != null) {
        if (request.email != null) {
          return request.email;
        }
      }

      return "";
    });

    return {
      name,
      setName,
      email,
      setEmail,
    };
  },
};

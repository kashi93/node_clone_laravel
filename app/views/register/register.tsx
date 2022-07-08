import React, { Fragment } from "react";
import Header from "./header";
import Body from "./body";
import Scripts from "./scripts";
import { method } from "./methods";

const login = ({ error, request }: { error: any; request: any }) => {
  method.parent = {
    request,
    error,
  };

  return (
    <Fragment>
      <Header />
      <Body />
      <Scripts />
    </Fragment>
  );
};

export default login;

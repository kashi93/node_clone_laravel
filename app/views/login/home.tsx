import React, { Fragment } from "react";
import Header from "./header";
import Body from "./body";
import Scripts from "./scripts";

const home = () => {
  return (
    <Fragment>
      <Header />
      <Body />
      <Scripts />
    </Fragment>
  );
};

export default home;

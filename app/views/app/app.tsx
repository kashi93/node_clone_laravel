import React, { Fragment } from "react";
import Header from "./header";
import Scripts from "./scripts";
import Body from "./body";

export default function app(props: any) {
  return (
    <Fragment>
      <Header />
      <body id="page-top">
        <Body>{props.children}</Body>
      </body>
      <Scripts />
    </Fragment>
  );
}

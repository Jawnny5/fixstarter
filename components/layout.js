import React from "react";
import { Container } from "semantic-ui-react";
import Header from "./Header";

const Layout = (props) => {
  return (
    <Container>
      <div>
        <Header />
        {props.children}
      </div>
    </Container>
  );
};

export default Layout;

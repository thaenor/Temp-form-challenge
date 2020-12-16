import * as React from "react";
import { Footer } from "./styles";

export default function GreetingMsg(props) {
  const { children } = { ...props };

  return (
    <Footer>
      <p>{children}</p>
    </Footer>
  );
}

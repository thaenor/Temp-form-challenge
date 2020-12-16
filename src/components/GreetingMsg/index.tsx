import * as React from "react";
import { GrettingsSection } from "./styles";

export default function GreetingMsg(props) {
  const { name, country, date } = { ...props };

  return (
    <GrettingsSection>
      <p>
        Hello {name} from {country} on {date}{" "}
      </p>
    </GrettingsSection>
  );
}

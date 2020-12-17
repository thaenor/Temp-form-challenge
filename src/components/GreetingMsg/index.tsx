import * as React from "react";
import { GrettingsSection } from "./styles";

export default function GreetingMsg(props) {
  const { name, country, date } = { ...props };

  const calculateDate = (date: Date) => {
    const year = new Date().getFullYear();
    const current_year = new Date().getFullYear();

    return current_year - year + 1;
  };

  return (
    <GrettingsSection>
      Hello {name} from {country} on {date.getDate()} of {date.getMonth()} you
      will be {calculateDate(date)} years old.
    </GrettingsSection>
  );
}

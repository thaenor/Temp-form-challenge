import * as React from "react";
import { GrettingsSection } from "./styles";

export default function GreetingMsg(props) {
  const { name, country, date } = { ...props };

  const calculateDate = (date: Date) => {
    const now = new Date();
    const curr_day = now.getDate();
    const curr_month = now.getMonth();
    const curr_year = now.getFullYear();

    const b_day = date.getDate();
    const b_month = date.getMonth();
    const b_year = date.getFullYear();

    if (b_month - curr_month) {
      if (b_day - curr_day) {
        return curr_year - b_year;
      }
    }

    return curr_year - b_year - 1;
  };

  return (
    <GrettingsSection>
      Hello {name} from {country} on {date.getDate()} of {date.getMonth() + 1}{" "}
      you will be {calculateDate(date)} years old.
    </GrettingsSection>
  );
}

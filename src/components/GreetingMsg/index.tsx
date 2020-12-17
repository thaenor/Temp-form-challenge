import * as React from "react";
import { GrettingsSection } from "./styles";

export default function GreetingMsg(props) {
  const { name, country, date } = { ...props };

  const getDay = (date: string) => {
    return Number(date.split("/")[0]);
  };

  const getMonth = (date: string) => {
    return Number(date.split("/")[1]);
  };

  const calculateDate = (date: string) => {
    const year = Number(date.split("/")[2]);
    const current_year = new Date().getFullYear();
    return current_year - year;
  };

  return (
    <GrettingsSection>
      Hello {name} from {country} on {getDay(date)} of {getMonth(date)} you will
      be {calculateDate(date)} years old.
    </GrettingsSection>
  );
}

import React, { useState } from "react";
import GreetingMsg from "../GreetingMsg";
import { postData } from "../../logic/client";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { SideFormSection, Form, Label, Input, SubmitBtn } from "./styles";
import "react-datepicker/dist/react-datepicker.css";

export default function SideForm() {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [countries, setCountries] = useState("");
  const now = new Date();
  const [bday, setBday] = useState(now);

  const options = [
    { value: "Portugal", label: "Portugal" },
    { value: "France", label: "France" },
    { value: "England", label: "England" },
    { value: "Mexico", label: "Mexico" },
    { value: "USA", label: "USA" },
    { value: "Japan", label: "Japan" },
    { value: "Turkey", label: "Turkey" },
    { value: "Lebanon", label: "Lebanon" }
  ];

  const handleNameInput = (evt) => setFirstName(evt.target.value);

  const handleSurnameInput = (evt) => setSurname(evt.target.value);

  const handleSelect = (evt) => setCountries(evt.value);

  const handleDate = (date) => setBday(date);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      first_name: firstName,
      last_name: surname,
      country: countries,
      birth_day: bday
    };

    postData("https://example.com/answer", data).then((result) => {
      if (result.ok) {
        console.log(result.json());
      }
    });
  };

  return (
    <SideFormSection>
      <Form>
        <Label htmlFor="nameInput">Name:</Label>
        <Input
          type="text"
          name="name"
          id="nameInput"
          onChange={handleNameInput}
        />

        <Label htmlFor="surnameInput">Surname</Label>
        <Input
          type="text"
          name="surname"
          id="surnameInput"
          onChange={handleSurnameInput}
        />

        <Label htmlFor="countriesSelect">Countries</Label>
        <Select options={options} onChange={handleSelect} />

        <Label htmlFor="bdayInput">Birthday:</Label>
        <DatePicker selected={bday} onChange={handleDate} />

        <SubmitBtn type="submit" onClick={handleSubmit}>
          Save
        </SubmitBtn>
      </Form>
      <GreetingMsg />
    </SideFormSection>
  );
}

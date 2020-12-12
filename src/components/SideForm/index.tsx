import * as React from "react";
import GreetingMsg from "../GreetingMsg";
import { SideFormSection, Form, Label, Input, SubmitBtn } from "./styles";

export default function SideForm() {
  return (
    <SideFormSection>
      <Form>
        <Label htmlFor="nameInput">Name:</Label>
        <Input type="text" name="name" id="nameInput" />

        <Label htmlFor="surnameInput">Surname</Label>
        <Input type="text" name="surname" id="surnameInput" />

        <Label htmlFor="countriesSelect">Countries</Label>
        <select name="countries" id="countriesSelect"></select>

        <Label htmlFor="bdayInput">Birthday:</Label>
        <Input type="datetime" name="bday" id="bdayInput" />

        <SubmitBtn type="submit">Save</SubmitBtn>
      </Form>
      <GreetingMsg />
    </SideFormSection>
  );
}

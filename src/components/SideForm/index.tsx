import React, { useState, useEffect } from "react";
import GreetingMsg from "../GreetingMsg";
import { postData, getCountries } from "../../logic/client";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { SideFormSection, Form, Label, Input, SubmitBtn } from "./styles";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

export default function SideForm(props) {
  const { setName } = { ...props };
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [dropdown, setDropdown] = useState([]);
  const [countries, setCountries] = useState("");
  const [validations, setValidations] = useState([""]);
  const [formSubmited, setSubmitedState] = useState(false);
  const [bday, setBday] = useState("");

  useEffect(() => {
    getCountries()
      .then((result) => {
        setDropdown(
          result.map((r) => {
            return { value: r.name, label: r.name };
          })
        );
      })
      .catch((error) => console.error(error));
  }, []);

  const appendErrorMsg = (msg: string) => {
    if (!validations.includes(msg)) {
      setValidations([...validations, msg]);
    }
  };

  const removeWarning = (msg: string) => {
    const altered_state = validations.filter((v) => v !== msg);
    setValidations(altered_state);
  };

  const handleNameInput = (evt) => setFirstName(evt.target.value);

  const handleSurnameInput = (evt) => setSurname(evt.target.value);

  const handleSelect = (evt) => setCountries(evt.value);

  const handleDate = (date) => setBday(date.toLocaleDateString());

  const validateForm = (data) => {
    setValidations([]);
    let validation = true;
    if (data.first_name.length <= 0 || data.last_name.length <= 0) {
      appendErrorMsg("You need to add a first and last name");
      validation = false;
    }

    if (data.country.length <= 0) {
      appendErrorMsg("you need to choose a country");
      validation = false;
    }

    if (data.birth_day.length <= 0) {
      appendErrorMsg("you need to set a birthday");
      validation = false;
    }

    return validation;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const data = {
      first_name: firstName,
      last_name: surname,
      country: countries,
      birth_day: bday
    };

    if (validateForm(data)) {
      postData(data)
        .then((result) => {
          setSubmitedState(true);
          setName(firstName.concat(" ", surname));
        })
        .catch((err) => {
          alert("Oopps... smth went wrong");
        });
    }
  };

  const renderFormWarnings = (warnings: string[]) => {
    return warnings.map((w) => {
      return <p key={w.length}>{w}</p>;
    });
  };

  const renderGreeting = () => {
    if (formSubmited) {
      return (
        <GreetingMsg
          name={firstName.concat(" ", surname)}
          country={countries}
          date={bday}
        />
      );
    }
  };

  return (
    <SideFormSection>
      <Form>
        <Label htmlFor="nameInput">Name :</Label>
        <Input
          type="text"
          name="name"
          id="nameInput"
          onChange={handleNameInput}
        />

        <Label htmlFor="surnameInput">Last name :</Label>
        <Input
          type="text"
          name="surname"
          id="surnameInput"
          onChange={handleSurnameInput}
        />

        <Label htmlFor="countriesSelect">Countries</Label>
        <Select
          className="country"
          options={dropdown}
          onChange={handleSelect}
        />

        <Label htmlFor="bdayInput">Birthday:</Label>
        <DatePicker
          onSelect={handleDate}
          onChange={handleDate}
          value={bday}
          placeholderText="Enter date..."
          className="datepicker"
        />

        {renderFormWarnings(validations)}
        <SubmitBtn type="submit" onClick={handleSubmit}>
          Save
        </SubmitBtn>
      </Form>
      {renderGreeting()}
    </SideFormSection>
  );
}

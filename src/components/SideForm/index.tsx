import React, { useState, useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import GreetingMsg from "../GreetingMsg";
import { postData, getCountries } from "../../logic/client";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { SideFormSection, Form, Label, Input, SubmitBtn } from "./styles";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

export default function SideForm(props) {
  const { setName } = { ...props };
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState("en");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [dropdown, setDropdown] = useState([]);
  const [countries, setCountries] = useState("");
  const [validations, setValidations] = useState([""]);
  const [formSubmited, setSubmitedState] = useState(false);
  const [bday, setBday] = useState(new Date("10/22/1991"));

  useEffect(() => {
    i18n.changeLanguage(lang);
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

  const handleNameInput = (evt) => setFirstName(evt.target.value);

  const handleSurnameInput = (evt) => setSurname(evt.target.value);

  const handleSelect = (evt) => setCountries(evt.value);

  const handleDate = (date) => setBday(date);

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

  const handleChangeLanguage = () => {
    if (lang === "en") {
      i18n.changeLanguage("pt");
      setLang("pt");
    } else {
      i18n.changeLanguage("en");
      setLang("en");
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
        <Label htmlFor="nameInput">
          <Trans>name</Trans>
        </Label>
        <Input
          type="text"
          name="name"
          id="nameInput"
          onChange={handleNameInput}
        />

        <Label htmlFor="surnameInput">
          <Trans>last name</Trans>
        </Label>
        <Input
          type="text"
          name="surname"
          id="surnameInput"
          onChange={handleSurnameInput}
        />

        <Label htmlFor="countriesSelect">
          <Trans>countries</Trans>
        </Label>
        <Select
          className="country"
          options={dropdown}
          onChange={handleSelect}
        />

        <Label htmlFor="bdayInput">
          <Trans>birthday</Trans>
        </Label>
        <DatePicker
          onSelect={handleDate}
          onChange={handleDate}
          value={bday.toLocaleDateString()}
          placeholderText="Enter date..."
          className="datepicker"
        />

        {renderFormWarnings(validations)}
        <SubmitBtn type="submit" onClick={handleSubmit}>
          <Trans>save</Trans>
        </SubmitBtn>
        <SubmitBtn type="button" onClick={handleChangeLanguage}>
          <Trans>change language</Trans>
        </SubmitBtn>
      </Form>
      {renderGreeting()}
    </SideFormSection>
  );
}

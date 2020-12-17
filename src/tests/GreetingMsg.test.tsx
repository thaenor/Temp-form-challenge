import React from "react";
import renderer from "react-test-renderer";
import { createSerializer } from "@emotion/jest";
import GreetingMsg from "../components/GreetingMsg";

expect.addSnapshotSerializer(createSerializer());

it("correctly composes the greeting message", () => {
  //Setup
  const full_name = "John Appleseed";
  const country = "USA";
  const birthday = new Date("10/31/1995");
  const birthday_month = birthday.getMonth() + 1;
  const current_year = new Date().getFullYear();
  const expected_age = current_year - 1995;

  //Act
  const tree = renderer
    .create(<GreetingMsg name={full_name} country={country} date={birthday} />)
    .toJSON();
  const age = current_year - birthday.getFullYear();

  //Assert

  // Ideally we want to look the children and make sure it has
  // what we expect
  const findName = tree.children.find((el) => el === full_name);
  expect(findName).toBe(full_name);

  // If the string will have a fixed ammount of words then
  // we can make sure the Greeting message maitains it's structure
  // like so :
  // expect(tree.children[3]).toBe(country);
  const findCountry = tree.children.find((el) => el === country);
  expect(findCountry).toBe(country);

  const findDay = tree.children.find((el) => el === `${birthday.getDate()}`);
  expect(Number(findDay)).toBe(birthday.getDate());

  const findMonth = tree.children.find((el) => el === `${birthday_month}`);
  expect(Number(findMonth)).toBe(birthday_month);

  expect(age).toBe(expected_age);
});

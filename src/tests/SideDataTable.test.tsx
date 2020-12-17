import React from "react";
import renderer from "react-test-renderer";
import { createSerializer } from "@emotion/jest";
import SideDataTable from "../components/SideDataTable";

expect.addSnapshotSerializer(createSerializer());

it("correctly composes the greeting message", () => {
  const tableHeaders = ["Name", "Country", "Birthday"];
  const expected_table = [
    "example",
    "Portugal",
    new Date().toLocaleDateString()
  ];
  const table = [
    {
      id: 1,
      first_name: "example",
      last_name: "example",
      country: "Portugal",
      birthday: new Date().toLocaleDateString()
    }
  ];
  const name = "Jeremiah Sinhood";
  const tree = renderer
    .create(<SideDataTable name={name} body={table} />)
    .toJSON();

  const tableData = Object.values(tree)[2][0].children;
  const tableHead = tableData[0].children[0].children;
  const tableBody = tableData[1].children[0].children;

  // Validates all table headers are what we expect
  tableHead.forEach((header, i) => {
    expect(header.children[0]).toBe(tableHeaders[i]);
  });

  tableBody.forEach((body, i) => {
    expect(body.children[0]).toBe(expected_table[i]);
  });
});

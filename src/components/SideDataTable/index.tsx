import React, { useState, useEffect } from "react";
import { fetchData } from "../../logic/client";
import Footer from "../Footer";
import { DataTableSection } from "./styles";

export default function SideDataTable(props) {
  const { name, body } = { ...props };
  const [data, setData] = useState(body);

  useEffect(() => {
    fetchData()
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.error(error));
  }, []);

  const renderInnerTable = (tableData) => {
    return tableData.map((el) => {
      return (
        <tr key={el.id}>
          <td>
            {el.first_name} {el.last_name}
          </td>
          <td>{el.country}</td>
          <td>{el.birthday}</td>
        </tr>
      );
    });
  };

  return (
    <DataTableSection>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>{renderInnerTable(data)}</tbody>
      </table>
      <Footer>{name}</Footer>
    </DataTableSection>
  );
}

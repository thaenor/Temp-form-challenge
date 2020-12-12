import * as React from "react";
import { DataTableSection } from "./styles";

export default function SideDataTable(props) {
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
        <tbody>
          <tr>
            <td>Marion Suarez</td>
            <td>Argentina</td>
            <td>15/03/90</td>
          </tr>
          <tr>
            <td>Jose Kim</td>
            <td>Mexico</td>
            <td>14/04/99</td>
          </tr>
        </tbody>
      </table>
    </DataTableSection>
  );
}

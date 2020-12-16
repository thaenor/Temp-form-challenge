import React, { useState } from "react";
import { Global, css } from "@emotion/react";
import { Layout, Heading } from "./styles";

import SideForm from "./components/SideForm";
import SideDataTable from "./components/SideDataTable";

export default function App() {
  const [fullName, setName] = useState();

  return (
    <>
      <Global
        styles={css`
          body {
            color: #cccccc;
            background: rgb(2, 0, 36);
            background: linear-gradient(
              190deg,
              rgba(68, 68, 128, 1) 0%,
              rgba(9, 9, 121, 1) 25%,
              rgba(2, 0, 36, 1) 100%
            );
            background-repeat: no-repeat;
            background-attachment: fixed;
            font-family: "Open Sans", sans-serif;
          }
        `}
      />
      <Heading>Main Title</Heading>
      <Layout>
        <SideForm setName={setName} />
        <SideDataTable name={fullName} />
      </Layout>
    </>
  );
}

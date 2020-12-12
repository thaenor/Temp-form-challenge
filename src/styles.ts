import styled from "@emotion/styled";

export const Layout = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px 20px;
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const Footer = styled.footer`
  grid-area: 3 / 1 / 4 / 3;
`;

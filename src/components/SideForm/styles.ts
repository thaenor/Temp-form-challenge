import styled from "@emotion/styled";

export const SideFormSection = styled.section`
  grid-area: 1 / 1 / 3 / 2;
`;

export const Form = styled.form`
  grid-area: 1 / 1 / 2 / 2;
  width: 100%;
  height: 100%;
  padding-left: 15px;
  border: none;
  border-radius: 20px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.2);
`;

export const Label = styled.label`
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 15px;
  font-weight: 400;
  font-size: 13px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  display: block;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  width: 90%;
  height: 30px;
  color: #fff;
  display: block;
  background-color: rgba(255, 255, 255, 10%);
  border-radius: 20px;
  border: none;
`;

export const SubmitBtn = styled.button`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
  text-align: center;
  color: #ffffff;
  padding-top: 8px;
  width: 90%;
  height: 35px;
  border: none;
  border-radius: 20px;
  margin-top: 23px;
  background-color: #1059ff;
`;

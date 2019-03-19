import styled from "styled-components";
import { phoneBig } from "../../constants/styled-variables";

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  box-sizing: content-box;

  @media (min-width: ${phoneBig}) {
    width: 366px;
  }
`;

export const FormFileInputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

export const FormInputContainer = styled.div`
  height: 42px;
  width: 100%;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FormSelectContainer = styled(FormInputContainer)`
  height: unset;
  min-height: 42px;
`;

export const FormTextareaContainer = styled(FormInputContainer)`
  height: 84px;
`;

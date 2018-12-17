import styled from "styled-components";
import { phoneBig } from "../../constants/styled-variables";

export default styled.form`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  box-sizing: content-box;

  @media (min-width: ${phoneBig}) {
    width: 366px;
  }
`;

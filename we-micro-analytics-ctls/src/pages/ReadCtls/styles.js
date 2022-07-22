import styled from "styled-components";
import {
  montserratSemiBold,
  purple,
} from "../../utils/constants/StylesConstants";

export const ReadCtlsWrapper = styled.div`
  .field-container {
    display: flex;
    margin-bottom: 32px;
    div {
      margin-right: 45px;
    }
    button {
      margin-top: auto;
      height: 45px;
      width: 160px;
    }
  }
  .document-container {
    height: 100vh;
  }
  .error {
    color: ${purple};
    font: 14px ${montserratSemiBold};
  }
`;

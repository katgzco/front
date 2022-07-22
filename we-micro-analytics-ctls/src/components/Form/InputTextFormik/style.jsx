import styled from "styled-components";
import {
  brightTurquoise000,
  brightTurquoise500,
  openSansRegular,
  scarpaGray100,
  scarpaGray200,
  scarpaGray600,
  tomatoCoral500,
} from "../../../utils/constants/StylesConstants";

export const InputTextWrapper = styled.div`
  display: grid;
  margin: 0;

  input {
    outline: none;
    border: 1px solid ${scarpaGray200};
    border-radius: 8px;
    color: ${scarpaGray600};
    font: 15px ${openSansRegular};
    line-height: 24px;
    padding: 12px 16px;
    margin: 1px;
    min-width: 230px;

    &:focus {
      background: ${brightTurquoise000};
      border: 2px solid ${brightTurquoise500};
      box-sizing: border-box;
      border-radius: 8px;
      background: ${brightTurquoise000};
      margin: 0;
    }

    ::placeholder {
      color: ${scarpaGray200};
      opacity: 1;
    }
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${brightTurquoise000} inset !important;
  }

  input:-webkit-autofill:disabled {
    -webkit-text-fill-color: ${scarpaGray100} !important;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: ${scarpaGray600} !important;
  }

  .feedback {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    margin-top: 10px;
    color: ${tomatoCoral500};
  }
`;

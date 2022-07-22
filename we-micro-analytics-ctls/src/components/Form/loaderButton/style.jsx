import styled from "styled-components";
import { primary } from "../../../utils/constants/StylesConstants";

export const LoaderButtonWrapper = styled.div`
  .home {
    fill: transparent;
    stroke: ${primary};
    stroke-width: 10px;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-name: loader-button-animation;
  }

  @keyframes loader-button-animation {
    0% {
      stroke-dasharray: 20px;
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dasharray: 15px;
      stroke-dashoffset: 50;
    }
  }
`;

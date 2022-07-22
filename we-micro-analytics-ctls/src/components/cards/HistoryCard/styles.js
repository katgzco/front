import styled from "styled-components";
import {
  black,
  grayBarDisabled,
  montserratSemiBold,
} from "../../../utils/constants/StylesConstants";

export const HistoryCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${montserratSemiBold};
  width: 100%;
  height: 175px;
  border: 1px solid ${grayBarDisabled};
  border-radius: 14px;
  padding: 26px 10px 20px 14px;
  .title {
    font-size: 16px;
    color: ${black};
  }
  .date {
    font-size: 10px;
    color: ${grayBarDisabled};
    margin-bottom: auto;
  }
  .value-container {
    display: flex;
    font-size: 14px;
    justify-content: space-between;
  }
`;

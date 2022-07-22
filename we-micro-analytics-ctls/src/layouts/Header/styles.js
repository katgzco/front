import styled from "styled-components";
import {
  darkLogout,
  gray1,
  light_blue,
  montserratSemiBold,
  white,
} from "../../utils/constants/StylesConstants";

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid ${gray1};
  height: 80px;
  margin: 0 43px;
  display: grid;
  justify-content: right;
  align-items: center;
  grid-template-columns: auto 53px;
  gap: 24px;
  .user-container {
    cursor: pointer;
    position: relative;
  }
  .menu-container {
    position: absolute;
    display: flex;
    border: 1px solid #e1eaed;
    right: 150%;
    transform: translate(50%, 15%);
    width: 142px;
    height: 45px;
    background-color: ${white};
    border-radius: 10px;
    align-items: center;
    .button-signOut {
      // font: 15px ${montserratSemiBold};
      color: ${darkLogout};
      width: 100%;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
  }
`;

export const Name = styled.div`
  font-size: 16px;
  font-family: ${montserratSemiBold};
  color: #575558;
  text-transform: capitalize;
`;
export const Photograph = styled.img`
  border-radius: 50%;
`;

export const SkeletonImage = styled.div`
  height: 53px;
  width: 53px;
  background-color: ${light_blue};
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-family: ${montserratSemiBold};
  color: #575558;
`;

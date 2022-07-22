import styled from "styled-components";
import {
  black,
  gray1,
  grayDescription,
  montserratBold,
  montserratSemiBold,
  purple,
} from "../../utils/constants/StylesConstants";

export const ContainerPage = styled.div`
  position: absolute;
  width: calc(100% - 256px);
  left: 256px;
  height: 100%;
`;

export const Container = styled.div`
  padding: 10px 40px;
`;
export const Title = styled.h1`
  font: 24px ${montserratBold};
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : "32px")};
  color: ${black};
`;

export const Description = styled.p`
  font: 12px ${montserratSemiBold};
  margin: 0;
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : "32px")};
  color: ${grayDescription};
  margin: 0;
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : "32px")};
`;

export const Hr = styled.hr`
  height: 1px;
  border: 0;
  width: 100%;
  color: ${gray1};
  background-color: ${gray1};
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : "32px")};
`;
export const LoadingWrapper = styled.div`
  position: absolute;
  background-color: #fffffff0;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;
export const ContainerLoading = styled.div`
  text-align: center;
  .icon-check {
    font-size: 70px;
    color: #7743c4;
  }
  p {
    font-size: 15px;
  }
`;

export const GridHistoryCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(132px, 1fr));
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  margin: 0px 0px 32px;
`;

export const Asterisk = styled.span`
  color: ${purple};
`;

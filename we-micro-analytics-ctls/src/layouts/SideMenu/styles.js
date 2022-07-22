import styled from "styled-components";
import {
  gray1,
  grayItem,
  montserratBold,
  openSansSemiBold,
  primary,
  softPurple900,
} from "../../utils/constants/StylesConstants";

export const SideMenuWrapper = styled.div`
  border-right: 1px solid ${gray1};
  position: fixed;
  width: 256px;
  overflow-y: auto;
  height: 100%;

  .logo-container {
    position: absolute;
    top: 31px;
    left: 40px;
    cursor: pointer;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: end;
    img {
      width: 38px;
      height: 36px;
      margin-right: 6px;
    }
    div {
      font: 18px ${montserratBold};
    }
  }

  .items-container {
    position: absolute;
    top: 149px;
    font: 14px ${openSansSemiBold};
    .item-container {
      height: 26px;
      display: flex;
      text-decoration: none;
      align-items: center;
      margin-bottom: 20px;
      margin-right: 26px;
      &.active {
        .square-selected {
          display: list-item;
          height: 100%;
          width: 3px;
          margin-right: 23px;
          background-color: ${primary};
          border-radius: 0 10px 10px 0;
        }
      }
      .menu-option {
        display: flex;
        color: ${grayItem};
        svg {
          margin-right: 11px;
          path {
            fill: ${grayItem};
          }
        }
        .item-name {
          align-self: center;
        }
      }
    }
  }

  .color-primary {
    color: ${primary};
  }

  .ml-1 {
    margin-left: 26px;
  }

  .company-container {
    position: absolute;
    bottom: 23px;
    left: 40px;
    .title {
      font: 14px ${montserratBold};
      color: ${softPurple900};
      margin-bottom: 10px;
    }
    img {
      width: 100px;
      height: 56px;
    }
  }
`;

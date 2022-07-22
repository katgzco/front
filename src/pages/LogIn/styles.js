import styled from "styled-components";
import {
    blue,
    light_purple,
    montserratBold,
    montserratRegular,
    montserratSemiBold,
    openSansRegular,
    scarpaGray500,
    scarpaGray600,
    white,
} from "../../utils/constants/StylesConstants";

export const LogInWrapper = styled.section`
  background: ${blue};
  width: 100vw;
  height: 100vh;

  .decoration {
    display: grid;
    grid-template-columns: 200px 200px;
    height: 100vh;
    position: absolute;
    width: 100vw;
    justify-content: space-between;
    img:nth-child(2n) {
      align-self: end;
    }
  }

  .login-container {
    display: grid;
    position: absolute;
    width: 100vw;
    height: 100vh;
    justify-content: space-between;
    align-items: center;
    grid-template-rows: 10px auto 50px;
    justify-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .login-card {
    box-shadow: none;
    justify-items: center;
    background: ${white};
    border-radius: 19px;
    display: grid;
    gap: 16px;
    padding: 72px 50px 54px 50px;
    width: 350px;
    img {
      width: 60px;
    }
    div {
      box-shadow: none;
      display: grid;
    }
  }

  .google-button-container {
    -webkit-box-shadow: 10px 10px 69px -10px rgb(0 0 0 / 15%);
    -moz-box-shadow: 10px 10px 69px -10px rgb(0 0 0 / 15%);
    box-shadow: 10px 10px 40px -10px rgb(0 0 0 / 10%);
    border-radius: 8px !important;
    width: fit-content;
    height: fit-content;
  }

  .google-button button {
    border: 1px solid #f2f2f3 !important;
    border-radius: 8px !important;
    box-shadow: none !important;
    padding: 2px 12px !important;
    font: 16px ${openSansRegular} !important;
    color: ${scarpaGray600} !important;
  }

  .alternative-text {
    color: ${scarpaGray500} !important;
    font: 14px ${montserratSemiBold} !important;
    line-height: 24px;
    margin-bottom: 8px;
    text-align: center;
  }

  .title {
    color: ${light_purple};
    font: 14px ${montserratBold};
    margin-bottom: 16px;
    line-height: 16px;
    letter-spacing: 0.02em;
  }

  .loader-container {
    padding: 0;
    border-radius: 100px;
    width: fit-content;
    padding: 50px;
    background: #ffffff;
  }

  .habi-link {
    font: 15px ${montserratRegular};
    text-decoration: none;
    color: ${white};
    margin-bottom: 20px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.03em;
    :hover {
      text-decoration: underline;
    }
  }
`;

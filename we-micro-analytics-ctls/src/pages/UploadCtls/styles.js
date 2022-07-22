import styled from "styled-components";
import {
  coral,
  gray1,
  gray4,
  montserratBold,
  montserratRegular,
  montserratSemiBold,
  openSansRegular,
  openSansSemiBold,
  purple,
  white,
} from "../../utils/constants/StylesConstants";

export const UploadCtlsWrapper = styled.div`
  .error {
    color: ${coral};
    font: 14px ${montserratSemiBold};
  }
`;

export const WrapperFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: end;
  border-top: 1px solid #e1eaed;
`;

export const Field = styled.div`
  display: grid;
  input {
    border: 1px solid #707070;
    padding: 0 16px;
    font: 16px ${openSansRegular};
    border-radius: 8px;
    height: 56px;
  }
  #file-upload-button {
    border-radius: 0 7px 7px 0;
    height: 38px;
    background: red;
  }
  button {
    background-color: red !important;
  }
`;
export const TitleField = styled.div`
  font: 13px ${openSansSemiBold};
  margin-bottom: 8px;
  color: #78747b;
`;

export const CustomButton = styled.button`
  font: 14px ${montserratBold};
  border: 1px solid #5600e8;
  background-color: #5600e8;
  height: 34px;
  color: ${white};
  padding: 0 16px;
  border-radius: 6px;
  &:disabled {
    background-color: ${gray4};
    border: 1px solid ${gray4};
  }
  &:hover {
    ${(props) => (props.loadingWrapper ? "progress" : "pointer")}
  }
`;

export const ContainerButton = styled.div`
  height: 56px;
  align-items: center;
  display: inline-flex;
}
`;

export const WrapperTypes = styled.div`
  display: flex;
  justify-content: left;
  gap: 10px;
  margin-bottom: 32px;
  button {
    background-color: ${purple};
    border-radius: 26px;
    height: 40px;
    outline: none;
    border: 1px solid ${purple};
    color: white;
    font-size: 14px;
    font-weight: 600;
    font-family: ${montserratSemiBold};
    padding: 0 16px;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const WrapperInputButton = styled.div`
  display: grid;
  grid-template-columns: 80% auto;
  height: 48px;

  input {
    height: 48px;
    border-radius: 7px 0 0 7px;
    border: 1px solid #707070;
    font: 16px ${openSansRegular};
    padding: 0 16px;
  }
  button {
    border-radius: 0 7px 7px 0;
    height: 48px;
    background-color: #7f39fb;
    border: 1px solid #7f39fb;
    color: white;
    font: 16px ${montserratBold};
  }
`;

export const WrapperInputButtonFile = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;

  input {
    height: 48px;
    border-radius: 7px 0 0 7px;
    border: 1px solid #707070;
    font: 16px ${openSansRegular};
    padding: 0 16px 0 0;
    margin-bottom: 8px;
    #file-upload-button {
      border-radius: 0 7px 7px 0;
      height: 48px;
      background: red !important;
    }
  }
  input::-webkit-file-upload-button {
    border-radius: 0;
    height: 48px;
    background: ${gray1} !important;
    font: 14px ${montserratRegular};
    outline: none;
    border: none;
  }
  button {
    border-radius: 0 7px 7px 0;
    height: 48px;
    background-color: #7f39fb;
    border: 1px solid #7f39fb;
    color: white;
    font: 14px ${montserratBold};
  }
`;

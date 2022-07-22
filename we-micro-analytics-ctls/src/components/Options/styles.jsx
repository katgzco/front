import styled from "styled-components";
import { montserratBold } from "../../utils/constants/StylesConstants";

export const WrapperOptions = styled.div`
  display: flex;
  gap: 24px;
  border-bottom: 1px solid #e1eaed;
  padding: 40px 0;
`;

export const BuyOption = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: #e6fef9;
  border: 1px solid #d5faf2;
  height: 110px;
  width: 110px;
  border-radius: 14px;
  .icon {
    img {
      justify-self: center;
      height: 32px;
    }
    display: grid;
    align-items: end;
    justify-content: center;
    text-align: center;
    gap: 10px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ReadOption = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: #ebf9ff;
  border: 1px solid #ddf4fd;
  height: 110px;
  width: 110px;
  border-radius: 14px;
  .icon {
    img {
      justify-self: center;
      height: 32px;
    }
    display: grid;
    align-items: end;
    justify-content: center;
    text-align: center;
    gap: 10px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const UploadOption = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 222, 222, 0.7);
  border: 1px solid #ffdede;
  height: 110px;
  width: 110px;
  border-radius: 14px;
  .icon {
    img {
      justify-self: center;
      height: 32px;
    }
    display: grid;
    align-items: end;
    justify-content: center;
    text-align: center;
    gap: 10px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.div`
  font-size: 14px;
  font-family: ${montserratBold};
  color: #4a4c4c;
`;

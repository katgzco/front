import styled from "styled-components";
import {
  gray2,
  gray4,
  montserratBold,
  openSansRegular,
  openSansSemiBold,
  purple,
  white,
} from "../../utils/constants/StylesConstants";

export const BuyCtlsWrapper = styled.div``;

export const WrapperFields = styled.div`
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 24px;
  align-items: end;
  padding-bottom: 48px;
  border-bottom: 1px solid #e1eaed;
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
`;
export const TitleField = styled.div`
  font: 13px ${openSansSemiBold};
  margin-bottom: 8px;
  color: #78747b;
  .asterisk {
    color: ${purple};
  }
`;

export const CustomButton = styled.button`
  font: 16px ${montserratBold};
  border: 1px solid #5600e8;
  background-color: #5600e8;
  height: 40px;
  color: ${white};
  padding: 0 24px;
  border-radius: 40px;
  &:disabled {
    background-color: ${gray4};
    border: 1px solid ${gray4};
  }
  &:hover {
    ${(props) => (props.loading ? "progress" : "pointer")}
  }
`;

export const ContainerButton = styled.div`
  height: 56px;
  align-items: center;
  display: inline-flex;
}
`;

export const ContainerTables = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

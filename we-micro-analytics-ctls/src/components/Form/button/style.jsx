import styled from "styled-components";
import {
  bogotaBlue300,
  bogotaBlue500,
  brightTurquoise200,
  brightTurquoise500,
  brightTurquoise600,
  brightTurquoise700,
  electricPurple400,
  electricPurple500,
  electricPurple700,
  montserratBold,
  primary,
  scarpaGray000,
  scarpaGray100,
  scarpaGray200,
  scarpaGray300,
  scarpaGray500,
  scarpaGray600,
  scarpaGray800,
  white,
} from "../../../utils/constants/StylesConstants";

export const ButtonWrapper = styled.button`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-family: ${montserratBold};
  gap: 8px;
  user-select: none;
  justify-content: center;
  outline: none;

  &.primary {
    border: 0;
    border-radius: 100px;
    letter-spacing: 0.04em;
    padding: 15px 24px;

    &.light {
      background-color: ${primary};
      color: ${white};

      :hover {
        background: ${electricPurple400};
      }

      :active {
        background: ${electricPurple700};
      }

      :disabled {
        background: ${scarpaGray100};
        color: ${scarpaGray300};
        cursor: default;
      }
    }

    &.dark {
      background: ${brightTurquoise500};
      color: ${scarpaGray800};

      :hover {
        background: ${brightTurquoise200};
        color: ${scarpaGray800};
      }

      :active {
        background: ${brightTurquoise600};
        color: ${white};
      }

      :disabled {
        background: ${scarpaGray600};
        color: ${scarpaGray300};
        cursor: default;
      }
    }
  }

  &.secondary {
    border-radius: 100px;
    letter-spacing: 0.04em;
    padding: 15px 24px;

    &.light {
      background-color: ${white};
      border: 1px solid ${scarpaGray100};
      color: ${electricPurple500};

      :hover {
        background-color: ${electricPurple500};
        color: ${white};
      }

      :active {
        background: ${electricPurple500};
        color: ${white};
      }

      :disabled {
        border: 1px solid ${scarpaGray200};
        background: ${scarpaGray000};
        color: ${scarpaGray200};
        cursor: default;
      }
    }

    &.dark {
      background: transparent;
      border: 1px solid ${scarpaGray000};
      color: ${scarpaGray000};

      :hover {
        background: ${white};
        border: 1px solid ${white};
        color: ${scarpaGray600};
      }

      :active {
        background: ${scarpaGray800};
        border: 1px solid ${scarpaGray800};
        color: ${scarpaGray000};
      }

      :disabled {
        background: transparent;
        border: 1px solid ${scarpaGray500};
        color: ${scarpaGray500};
        cursor: default;
      }
    }
  }

  &.text {
    border: 0;
    border-radius: 0;
    font-weight: bold;
    letter-spacing: 0.03em;
    background: transparent;
    padding: 0 !important;

    &.light {
      border-bottom: 1px dashed ${brightTurquoise600};
      color: ${brightTurquoise600};

      :hover {
        border-bottom: 1px solid ${brightTurquoise700};
        color: ${brightTurquoise700};
      }

      :active {
        border-bottom: 1px solid ${brightTurquoise500};
        color: ${brightTurquoise500};
      }

      :disabled {
        border-bottom: 1px dashed ${scarpaGray200};
        color: ${scarpaGray200};
        cursor: default;
      }
    }

    &.dark {
      border-bottom: 1px dashed ${bogotaBlue300};
      color: ${bogotaBlue300};

      :hover {
        border-bottom: 1px solid ${bogotaBlue300};
      }

      :active {
        border-bottom: 1px solid ${bogotaBlue500};
        color: ${bogotaBlue500};
      }

      :disabled {
        border-bottom: 1px dashed ${scarpaGray500};
        color: ${scarpaGray500};
        cursor: default;
      }
    }
  }

  &.icon {
    padding: 0 !important;
  }

  &.mini {
    font-size: 10px;
    padding: 4px 8px;

    &.icon {
      width: 38px;
      height: 38px;
    }
  }

  &.small {
    font-size: 12px;
    padding: 10px 24px;

    &.icon {
      width: 38px;
      height: 38px;
    }
  }

  &.middle {
    font-size: 14px;
    padding: 13px 24px;

    &.icon {
      width: 48px;
      height: 48px;
    }
  }

  &.large {
    font-size: 16px;
    padding: 15px 24px;

    &.icon {
      width: 55px;
      height: 55px;
    }
  }

  &.full-width {
    width: 100%;
  }
`;

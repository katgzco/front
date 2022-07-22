import React from "react";
import { LABEL_HISTORY_BY_TYPE } from "../../../utils/constants/dynamic";
import { getMonthDayFormatted } from "../../../utils/helpers/getMonthDayFormatted";
import { Hr } from "../../styles/generic";
import { HistoryCardWrapper } from "./styles";

const HistoryCard = ({ title, date, type, value }) => {
  return (
    <HistoryCardWrapper>
      <span className="title">{title}</span>
      <span className="date ">
        {getMonthDayFormatted(date)}, {new Date().getFullYear()}
      </span>
      <Hr mb={6} />
      <div className="value-container">
        <span className="label">{LABEL_HISTORY_BY_TYPE[type]}</span>
        <span className="value">{value}</span>
      </div>
    </HistoryCardWrapper>
  );
};

export default HistoryCard;

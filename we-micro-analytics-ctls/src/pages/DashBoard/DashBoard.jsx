import React, { useEffect } from "react";
import HistoryCard from "../../components/cards/HistoryCard/HistoryCard";
import CustomLineChart from "../../components/charts/CustomLineChart/CustomLineChart";
import {
  Container,
  Description,
  GridHistoryCard,
  Hr,
  Title,
} from "../../components/styles/generic";
import { history } from "./mock/dataHistory";
import { dataLineChart } from "./mock/dataLineChart";
import { DashBoardWrapper } from "./styles";
import Options from "../../components/Options/Options";
import { WrapperDashboard } from "./styles.js";

const DashBoard = () => {
  useEffect(() => {
    let element = document.createElement("a");
    element.setAttribute("href", process.env.REACT_APP_LINK);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  });

  return (
    <DashBoardWrapper>
      <Options />
    </DashBoardWrapper>
  );
};

export default DashBoard;

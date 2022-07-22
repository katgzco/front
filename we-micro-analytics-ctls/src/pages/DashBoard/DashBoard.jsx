import React from "react";
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
  return (
    <DashBoardWrapper>
      <Options />

      {/* <Container>
        <div className="mb-1">
          <Title mb={5}>Consultas diarias</Title>
          <Description>Cantidad de CTLS consultados</Description>
          <CustomLineChart data={dataLineChart} />
        </div>
        <Hr />
        <div className="mb-1">
          <Title mb={5}>Histórico mensual</Title>
          <Description>Acciones realizadas</Description>
          <GridHistoryCard>
            {history.map(({ label, date, value, type }) => (
              <div key={`${label}_${type}_${value}`}>
                <HistoryCard
                  title={label}
                  date={date}
                  value={value}
                  type={type}
                />
              </div>
            ))}
          </GridHistoryCard>
        </div>
      </Container> */}
    </DashBoardWrapper>
  );
};

export default DashBoard;

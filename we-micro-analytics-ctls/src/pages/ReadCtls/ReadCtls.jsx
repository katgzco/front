import React, { useCallback, useEffect, useState } from "react";
import { getKushki } from "../../api/ctls/GetKushki/GetKushki";
import CtlsPdf from "../../components/CtlsPdf/CtlsPdf";
import Button from "../../components/Form/button/button";
import { LoaderContainer } from "../../components/Loader/Loader";
import {
  Asterisk,
  Container,
  Description,
  Title,
} from "../../components/styles/generic";
import { Field, TitleField } from "../BuyCtls/styles";
import { ReadCtlsWrapper } from "./styles";

const ReadCtls = () => {
  const [registerNumber, setRegisterNumber] = useState("");
  const [ctlData, setCtlData] = useState(undefined);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = (e) => {
    setRegisterNumber(e.target.value);
  };

  const search = useCallback(async () => {
    setLoading(true);
    try {
      const response = await getKushki({ num: registerNumber });
      setCtlData(response.data.detail.content);
      setError(false);
    } catch (err) {
      console.error("Error consultando kushki: ", err);
      setError(true);
    } finally {
      setLoading(false);
      window.localStorage.removeItem("ctlNumber");
    }
  }, [registerNumber]);

  useEffect(() => {
    const ctlNumber = window.localStorage.getItem("ctlNumber");
    if (ctlNumber) {
      setRegisterNumber(ctlNumber);
      search(ctlNumber);
    }
  }, [search, registerNumber]);

  return (
    <ReadCtlsWrapper>
      <Container>
        <Title mb={14}>Consultar mis CTLS</Title>
        <Description>
          Podrás consultar con el número de matrícula si ya existe un ctl con
          este número en base de datos, <br />
          de lo contrario te sugerímos realizar la compra de este:
        </Description>
        <div className="field-container">
          <Field>
            <TitleField>
              Número de registro<Asterisk>*</Asterisk>
            </TitleField>
            <input
              placeholder="Número de registro"
              value={registerNumber}
              onChange={handleRegister}
            />
          </Field>
          <Button type="submit" onClick={search}>
            Buscar
          </Button>
        </div>
        {error && (
          <span className="error">
            Hubo un error al consultar ctl con: <b>{registerNumber}</b>, por
            favor, intenta con otro número de registro.
          </span>
        )}
        {loading && <LoaderContainer />}
        {ctlData && <CtlsPdf data={ctlData} />}
      </Container>
    </ReadCtlsWrapper>
  );
};

export default ReadCtls;

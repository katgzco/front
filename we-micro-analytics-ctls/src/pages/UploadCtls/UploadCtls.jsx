import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GetFileByUrl, GetFilePdf } from "../../api/ctls/ApiCtls";
import Loader from "@habi/habi-react-components/dist/Loader/loader";
import {
  Container,
  Description,
  LoadingWrapper,
  Title,
} from "../../components/styles/generic";
import {
  UploadCtlsWrapper,
  WrapperFields,
  WrapperTypes,
  WrapperInputButton,
  WrapperInputButtonFile,
} from "./styles.js";
import CtlsPdf from "../../components/CtlsPdf/CtlsPdf";

const UploadCtls = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [extractionType, setExtractionType] = useState(0);
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const fileInput = useRef(null);
  let dataStorage = localStorage.getItem("loginData");
  dataStorage = JSON.parse(dataStorage);
  const { userId } = dataStorage.data;
  const navigate = useNavigate();

  const handleUrl = (e) => {
    if (e) {
      setUrl(e.target.value);
    }
  };

  const getFile = (urlpreloaded) => {
    if (url !== "" || urlpreloaded !== "") {
      setLoading(true);
      const data = {
        url_pdf: url === "" ? urlpreloaded : url,
        user_id: parseInt(userId),
        transaction_id:
          urlpreloaded && urlpreloaded !== ""
            ? location.state.detail.transaction_id
            : "",
      };
      GetFileByUrl(data)
        .then((response) => {
          setLoading(false);
          if (response) {
            setData(response.data.data);
          }
        })
        .catch((e) => {
          setLoading(false);
          alert("Ha ocurrido un error.");
        });
    }
  };

  const sendFile = () => {
    if (fileInput.current.files[0]) {
      setError(false);
      setLoading(true);

      let data = new FormData();

      // Update the formData object
      data.append(
        "file",
        fileInput.current.files[0],
        fileInput.current.files[0].name
      );

      data.append("user_id", parseInt(userId));
      data.append("transaction_id", "");
      GetFilePdf(data)
        .then((response) => {
          if (response) {
            setLoading(false);
            setData(response.data.data);
          }
        })
        .catch((e) => {
          setLoading(false);
          setError(
            "Hubo un error al extraer el CTL, por favor, revisa la información ingresada."
          );
        });
    } else {
      setError("Por favor verifique que si ha subido un CTL valido.");
    }
  };

  const changeExtractionType = (type) => {
    setError(false);
    setData();
    if (type === 1) setUrl("");
    setExtractionType(type);
  };

  useEffect(() => {
    if (location.state?.detail?.url && location.state?.detail?.url !== "") {
      changeExtractionType(1);
      setUrl(location.state.detail.url);
      getFile(location.state.detail.url);
      navigate("/cargar", { replace: false, state: {} });
    }
  }, [location]);

  return (
    <UploadCtlsWrapper>
      {loading && (
        <LoadingWrapper>
          <Loader size="large" />
        </LoadingWrapper>
      )}

      <Container>
        <Title mb="8">Cargar un CTL</Title>
        <Description mb="24">
          Visualiza de una forma simple y sencilla la información de tu
          inmueble, apartir de tu certificado de tradición y libertad,
          <br /> puedes cargarlo directamente o con el link generado por la
          Super Intendencia de Notaria y registro.
        </Description>
        <WrapperTypes>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => changeExtractionType(1)}
          >
            Por URL
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => changeExtractionType(2)}
          >
            Carga un archivo
          </button>
        </WrapperTypes>
        <WrapperFields style={{ marginBottom: "48px" }}>
          {extractionType === 1 ? (
            <div className="divider">
              {!data ? (
                <>
                  <Title mb="8">Ingresa la url del certificado</Title>
                  <Description mb="24">
                    Con esta url generaremos una información estructura apartir
                    del certificado que ingreses.
                  </Description>
                  <div>
                    <div className="form-group form-small-url">
                      <WrapperInputButton>
                        <input
                          type="url"
                          className="form-control"
                          id="Inputurl"
                          placeholder="Ingresa url generada por Supernotareado"
                          value={url}
                          onChange={handleUrl}
                        />
                        <button
                          type="button"
                          className={"btn btn-primary "}
                          onClick={() => getFile()}
                        >
                          Enviar
                        </button>
                      </WrapperInputButton>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Title mb="8">Se ha procesado correctamente el CTL</Title>
                  <Description>
                    <a href={url} download>
                      Si desea ver el archivo original generado por el SNR,
                      descarguelo aqui dando clic.
                    </a>
                  </Description>
                </>
              )}
            </div>
          ) : extractionType === 2 ? (
            <div className="divider">
              <Title mb="8">Carga el certificado de Libertad y tradición</Title>
              <Description mb="24">
                Carga el certificado de libertad y tradición, recuerda que el
                formato debe ser PDF.
              </Description>

              <div>
                <div className="form-group form-small-url">
                  <WrapperInputButtonFile
                    onClick={() => data && changeExtractionType(2)}
                  >
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Ingresa el archivo"
                      ref={fileInput}
                      accept="application/pdf"
                    />
                    <button
                      type="button"
                      className={"btn btn-primary "}
                      onClick={() => sendFile()}
                    >
                      Enviar
                    </button>
                  </WrapperInputButtonFile>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </WrapperFields>
        {error && <span className="error">{error}</span>}
        {data && <CtlsPdf data={{ ...data, general: data.generals }} />}
      </Container>
    </UploadCtlsWrapper>
  );
};

export default UploadCtls;

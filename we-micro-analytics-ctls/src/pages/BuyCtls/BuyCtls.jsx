import React, { useEffect, useState } from "react";
import { BuyCTLAPI, GetCtlsByPerson } from "../../api/ctls/ApiCtls";
import {
  Container,
  ContainerLoading,
  Description,
  LoadingWrapper,
  Title,
} from "../../components/styles/generic";
import {
  BuyCtlsWrapper,
  CustomButton,
  Field,
  TitleField,
  WrapperFields,
  ContainerButton,
  ContainerTables,
} from "./styles.js";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Loader from "@habi/habi-react-components/dist/Loader/loader";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import CloudDownloadRoundedIcon from "@mui/icons-material/CloudDownloadRounded";
import { FiCheckCircle, FiAlertCircle } from "react-icons/fi";
const TablePaginationActions = (props) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
};

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
const BuyCtls = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - ctls.purchased.length)
      : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [loading, setLoading] = useState(false);
  const [office_number, setOfficeNumber] = useState("");
  const [register_number, setRegisterNumber] = useState("");
  const [days, setDays] = useState(0);
  const [nid, setNid] = useState("");
  const [ctls, setCtls] = useState([]);
  const [message, setMessage] = useState();
  const [code, setCode] = useState(0);

  let dataStorage = localStorage.getItem("loginData");
  dataStorage = JSON.parse(dataStorage);
  const { company, userId } = dataStorage.data;
  const navigate = useNavigate();
  const handleOffice = (e) => {
    setOfficeNumber(e.target.value);
  };
  const handleRegistro = (e) => {
    setRegisterNumber(e.target.value);
  };
  const handleDays = (e) => {
    setDays(e.target.value);
  };
  const handleNid = (e) => {
    setNid(e.target.value);
  };

  const sendBuy = async () => {
    if (office_number !== "" && register_number !== "") {
      const data = {
        office_number,
        register_number,
        user_id: parseInt(userId),
        nid: nid !== "" ? nid : 0,
        max_days_ctls_purchased: days !== "" || days !== 0 ? days : 1,
      };
      setLoading(true);
      await BuyCTLAPI(data)
        .then((response) => {
          setCode(error.response.status);
          setMessage(response.data.detail.message);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        })
        .catch((error) => {
          if (error.response) {
            setCode(error.response.status);
            setMessage(error.response.data.detail.message);
            console.log(error.response);
          }
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        });
    }
  };

  const GetCtls = async () => {
    const data = parseInt(userId);
    await GetCtlsByPerson(data)
      .then((response) => {
        setCtls(response.data.detail);
      })
      .catch((error) => {
        setCtls([]);
        if (error.response) {
          console.log(error.response);
        }
      });
  };

  useEffect(() => {
    if (userId) {
      GetCtls();
    }
  }, [userId]);
  const getRowsPending = () => {
    return ctls.pending_purchase?.map((row) => {
      return (
        <TableRow
          key={row.register}
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
          }}
        >
          <TableCell component="th" scope="row">
            {row.register}
          </TableCell>
          <TableCell align="center">{row.requested_date}</TableCell>
          <TableCell align="center">{row.status}</TableCell>
        </TableRow>
      );
    });
  };

  return (
    <BuyCtlsWrapper>
      {loading && (
        <LoadingWrapper>
          <ContainerLoading>
            {code === 0 && <Loader size="large" />}
            {code === 200 || code === 201 ? (
              <>
                <FiCheckCircle className="icon-check" />
                <h1>El CTL ahora se encuentra en proceso de compra</h1>
                <Description mb="24">{message}</Description>
              </>
            ) : (
              code !== 0 && (
                <>
                  <FiAlertCircle className="icon-check" />
                  <Description mb="24">{message}</Description>
                </>
              )
            )}
          </ContainerLoading>
        </LoadingWrapper>
      )}
      <Container>
        <Title mb="8">Compra de CTL</Title>
        <Description mb="24">
          A continuación encontraras el listado de los CTLS ya comprados:
        </Description>
        <WrapperFields>
          <Field>
            <TitleField>
              Número de oficina <span className="asterisk">*</span>
            </TitleField>
            <input
              placeholder="Número de oficina"
              value={office_number}
              onChange={handleOffice}
            />
          </Field>
          <Field>
            <TitleField>
              Número de registro <span className="asterisk">*</span>
            </TitleField>
            <input
              placeholder="Número de registro"
              value={register_number}
              onChange={handleRegistro}
            />
          </Field>
          <Field>
            <TitleField>Días maximos de emisión</TitleField>
            <input placeholder="Días" value={days} onChange={handleDays} />
          </Field>
          {company === "habi" && (
            <Field>
              <TitleField>
                NID <span className="asterisk">*</span>
              </TitleField>
              <input placeholder="NID" value={nid} onChange={handleNid} />
            </Field>
          )}
          <ContainerButton>
            <CustomButton
              loading={loading}
              disabled={
                office_number === "" ||
                register_number === "" ||
                (company === "habi" && (nid === "" || nid === 0))
                  ? true
                  : false
              }
              onClick={() => sendBuy()}
            >
              COMPRAR
            </CustomButton>
          </ContainerButton>
        </WrapperFields>
        <ContainerTables>
          <div>
            <Title mb="8">CTLS EN PROCESO DE COMPRA</Title>
            <Description mb="24">
              A continuación encontraras el listado de los CTLS en proceso de
              compra:
            </Description>
            {ctls?.pending_purchase?.length > 0 ? (
              <TableContainer sx={{ maxWidth: 550 }} component={Paper}>
                <Table sx={{ maxWidth: 550 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Número de registro</TableCell>
                      <TableCell align="center">Fecha de solicitud</TableCell>
                      <TableCell align="center">Estado</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>{getRowsPending()}</TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Description mb="24">
                Actualmente no cuentas con compras en progreso.
              </Description>
            )}
          </div>
          <div>
            <Title mb="8">CTLS comprados en las ultimas 24H</Title>
            <Description mb="24">
              A continuación encontraras el listado de los CTLS ya comprados
              durante las ultimas 24 horas:
            </Description>
            {ctls?.purchased ? (
              <TableContainer sx={{ maxWidth: 550 }} component={Paper}>
                <Table
                  sx={{ maxWidth: 550 }}
                  aria-label="custom pagination table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Número de registro</TableCell>
                      <TableCell align="center">Fecha de compra</TableCell>
                      <TableCell align="center">Estado</TableCell>
                      <TableCell align="center">Acciones</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? ctls.purchased.slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                      : ctls.purchased
                    ).map((row) => (
                      <TableRow
                        key={row.register}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.register}
                        </TableCell>
                        <TableCell align="center">
                          {row.purchase_date}
                        </TableCell>
                        <TableCell align="center">{row.status}</TableCell>
                        <TableCell
                          align="center"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            navigate("/cargar", {
                              replace: true,
                              state: { detail: { ...row, url: row.url_snr } },
                            });
                          }}
                        >
                          <CloudDownloadRoundedIcon />
                        </TableCell>
                      </TableRow>
                    ))}
                    {emptyRows > 0 && (
                      <TableRow style={{ height: 53 * emptyRows }}>
                        <TableCell colSpan={6} />
                      </TableRow>
                    )}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[
                          5,
                          10,
                          25,
                          { label: "All", value: -1 },
                        ]}
                        colSpan={3}
                        count={ctls?.purchased?.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                          inputProps: {
                            "aria-label": "Filas por página",
                          },
                          native: true,
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
            ) : (
              <Description mb="24">
                No has realizado compras de CTLS durante las ultimas 24 horas.
              </Description>
            )}
          </div>
        </ContainerTables>
      </Container>
    </BuyCtlsWrapper>
  );
};

export default BuyCtls;

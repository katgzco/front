import React from "react";
import {
  BuyOption,
  ReadOption,
  Title,
  UploadOption,
  WrapperOptions,
} from "./styles";
import { useNavigate } from "react-router-dom";

import Cart from "./icons/cart.svg";
import Search from "./icons/search.svg";
import Upload from "./icons/upload.svg";

const Options = () => {
  const navigate = useNavigate();

  return (
    <WrapperOptions>
      <BuyOption
        onClick={() => {
          navigate("/comprar");
        }}
      >
        <div className="icon">
          <img src={Cart} alt="Comprar" />
          <Title>Comprar</Title>
        </div>
      </BuyOption>
      <ReadOption
        onClick={() => {
          navigate("/consultar");
        }}
      >
        <div className="icon">
          <img src={Search} alt="Consultar" />
          <Title>Consultar</Title>
        </div>
      </ReadOption>
      <UploadOption
        onClick={() => {
          navigate("/cargar");
        }}
      >
        <div className="icon">
          <img src={Upload} alt="Cargar CTL" />
          <Title>Cargar</Title>
        </div>
      </UploadOption>
    </WrapperOptions>
  );
};
export default Options;

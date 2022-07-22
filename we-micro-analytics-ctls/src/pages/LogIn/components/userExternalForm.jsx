import React from "react";

import { UserExternalFormWrapper } from "./styles";
import { Formik } from "formik";
import * as Yup from "yup";
import InputTextFormik from "../../../components/Form/InputTextFormik/inputTextFormik";
import Button from "../../../components/Form/button/button";

const UserExternalForm = ({ handleLogin }) => {
  return (
    <UserExternalFormWrapper>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("El email es invalido")
            .required("El email es requerido"),
          password: Yup.string().required("La contraseña es requerida"),
        })}
        onSubmit={handleLogin}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <InputTextFormik
              id="email"
              type="text"
              placeholder="Correo electrónico"
              autoComplete="on"
              {...formik.getFieldProps("email")}
            />
            <InputTextFormik
              id="password"
              placeholder="Contraseña"
              type="password"
              autoComplete="off"
              {...formik.getFieldProps("password")}
            />
            <Button type="submit">Ingresar</Button>
          </form>
        )}
      </Formik>
    </UserExternalFormWrapper>
  );
};

export default UserExternalForm;

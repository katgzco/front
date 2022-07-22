import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ALL_HABI_ROLES } from "../../utils/constants/constants";
import { ROUTES } from "../../utils/constants/routes";
import { LogIn } from "../../pages/LogIn/LogIn";
import Layout from "../Layout/Layout";
import { AuthenticatedRoute } from "./components/Auth/AuthenticatedRoute";
import DashBoard from "../../pages/DashBoard/DashBoard";
import ReadCtls from "../../pages/ReadCtls/ReadCtls";
import BuyCtls from "../../pages/BuyCtls/BuyCtls";
import UploadCtls from "../../pages/UploadCtls/UploadCtls";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path={ROUTES.BASE} element={<LogIn />} />
          <Route
            path={ROUTES.DASHBOARD}
            element={
              <AuthenticatedRoute
                component={DashBoard}
                authorizedRoles={ALL_HABI_ROLES}
              />
            }
          />
          <Route
            path={ROUTES.BUY_CTLS}
            element={
              <AuthenticatedRoute
                component={BuyCtls}
                authorizedRoles={ALL_HABI_ROLES}
              />
            }
          />
          <Route
            path={ROUTES.READ_CTLS}
            element={
              <AuthenticatedRoute
                component={ReadCtls}
                authorizedRoles={ALL_HABI_ROLES}
              />
            }
          />
          <Route
            path={ROUTES.UPLOAD_CTLS}
            element={
              <AuthenticatedRoute
                component={UploadCtls}
                authorizedRoles={ALL_HABI_ROLES}
              />
            }
          />
          {/* <Route path="*" exact element={<LogIn />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export { Router };

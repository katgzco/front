import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ALL_HABI_ROLES } from "../../utils/constants/constants";
import { ROUTES } from "../../utils/constants/routes";
import { LogIn } from "../../pages/LogIn/LogIn";
import Layout from "../Layout/Layout";
import { AuthenticatedRoute } from "./components/Auth/AuthenticatedRoute";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path={ROUTES.BASE} element={<LogIn />} />
                    <Route
                        element={
                            <AuthenticatedRoute
                                component={DashBoard}
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

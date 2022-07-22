import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContainerPage } from "../../components/styles/generic.jsx";
import { updateLoginData } from "../../redux/actions/loginData.js";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu.jsx";
import { LayoutWrapper } from "./styles.js";

const Layout = ({ children }) => {
  // const dispatch = useDispatch();
  // const [user] = useState(JSON.parse(window.localStorage.getItem("loginData")));
  const { isAuthenticated } = useSelector((state) => state.loginData);
  return (
    <>
      {isAuthenticated ? (
        <>
          <LayoutWrapper>
            <SideMenu />
            <div>
              <ContainerPage>
                <Header />
                {children}
              </ContainerPage>
            </div>
          </LayoutWrapper>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Layout;

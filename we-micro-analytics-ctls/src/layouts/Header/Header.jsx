import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateLoginData } from "../../redux/actions/loginData";
import { HeaderWrapper, Name, Photograph, SkeletonImage } from "./styles";

const Header = ({ photo }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const signOut = () => {
    const userData = {
      isAuthenticated: false,
      data: {},
      initialPath: null,
    };
    dispatch(updateLoginData(userData));
    window.localStorage.setItem("loginData", JSON.stringify(userData));
  };
  let dataStorage = localStorage.getItem("loginData");
  dataStorage = JSON.parse(dataStorage);
  const { name } = dataStorage.data;
  const firstWord = name.slice(0, 1);

  return (
    <HeaderWrapper>
      <Name>{name}</Name>
      <div
        className="user-container"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        {photo ? (
          <Photograph />
        ) : (
          <SkeletonImage>{firstWord.toUpperCase()}</SkeletonImage>
        )}
        {showMenu && (
          <div className="menu-container">
            <button className="button-signOut" onClick={() => signOut()}>
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </HeaderWrapper>
  );
};

export default Header;

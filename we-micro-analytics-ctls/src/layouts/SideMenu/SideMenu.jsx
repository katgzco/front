import React, { useId } from "react";
import { SideMenuWrapper } from "./styles";
import HabiIcon from "../../static/logo/habi.svg";
import { MENU_ITEMS } from "./helpers/menuItems";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ICON_COMPANY } from "../../utils/constants/dynamic";

const SideMenu = () => {
  const idItem = useId();
  const company = useSelector(({ loginData }) => loginData.data.company);

  return (
    <SideMenuWrapper>
      <div className="logo-container">
        <img src={HabiIcon} alt="habi-icon" />
        <div className="color-primary">CTLS</div>
      </div>

      <div className="items-container">
        {MENU_ITEMS.map((item) => (
          <NavLink
            key={`${idItem}_${item.name}`}
            to={item.link}
            className={({ isActive }) =>
              isActive ? "item-container active" : "item-container ml-1"
            }
          >
            <div className="square-selected"></div>
            <div className=" menu-option">
              {item.icon}
              <span className="item-name">{item.name}</span>
            </div>
          </NavLink>
        ))}
      </div>

      <div className="company-container">
        <div className="title">EMPRESA</div>
        <img src={ICON_COMPANY[company]} alt="company-icon" />
      </div>
    </SideMenuWrapper>
  );
};

export default SideMenu;

// Icons
import React from "react";
// import GridViewIcon from "@material-ui/icons/GridView";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import BackupIcon from "@material-ui/icons/Backup";
import GridOnRounded from "@material-ui/icons/GridOnRounded";

// Constants
import { ALL_HABI_ROLES } from "../../../utils/constants/constants";
import { ROUTES } from "../../../utils/constants/routes";

export const MENU_ITEMS = [
  {
    name: "Dashboard",
    icon: <GridOnRounded />,
    link: ROUTES.DASHBOARD,
    roles: ALL_HABI_ROLES,
  },
  {
    name: "Comprar",
    icon: <ShoppingCartIcon />,
    link: ROUTES.BUY_CTLS,
    roles: ALL_HABI_ROLES,
  },
  {
    name: "Consultar",
    icon: <SearchIcon />,
    link: ROUTES.READ_CTLS,
    roles: ALL_HABI_ROLES,
  },
  {
    name: "Cargar",
    icon: <BackupIcon />,
    link: ROUTES.UPLOAD_CTLS,
    roles: ALL_HABI_ROLES,
  },
];

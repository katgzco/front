import { icons, HABI_ICON } from "../constants/icons";

const getIcon = (icon) => {
  if (icons?.[icon]) return (props = {}) => icons[icon](props);
};

export const getHabiIcon = getIcon(HABI_ICON);

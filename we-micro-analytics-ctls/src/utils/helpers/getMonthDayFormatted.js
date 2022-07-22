import { format } from "date-fns";
import { es } from "date-fns/locale";

export const getMonthDayFormatted = (date) => {
  return format(date, "LLL", { locale: es });
};

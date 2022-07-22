import { ANNOTATION_TYPES, COMPANIES, DATA_TYPES } from "./constants";
import logoHabi from "../../static/logo/habi.svg";
import logoAdl from "../../static/logo/adl-logo.svg";

export const LABEL_HISTORY_BY_TYPE = {
  [DATA_TYPES.CURRENCY]: "COP.",
  [DATA_TYPES.QUANTITY]: "Cant.",
};

export const LABEL_ANNOTATION_TYPES = {
  [ANNOTATION_TYPES.BUYING_SELLING]: "Compraventa",
  [ANNOTATION_TYPES.CANCELLED]: "Cancelada",
  [ANNOTATION_TYPES.EMBARGOES]: "Embargo",
  [ANNOTATION_TYPES.MORTGAGE]: "Hipoteca",
  [ANNOTATION_TYPES.OTHER_TYPES]: "Otros tipos",
};

export const ICON_COMPANY = {
  [COMPANIES.HABI]: logoHabi,
  [COMPANIES.ADL]: logoAdl,
};

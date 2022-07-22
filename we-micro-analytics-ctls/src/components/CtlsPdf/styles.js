import {
  black,
  blackTitle,
  gray6,
  gray7,
  gray8,
  grayBarDisabled,
  grayCircle,
  grayLabel,
  greenCircle,
  greenFill,
  montserratBold,
  montserratRegular,
  pinkTenue,
  primary,
  redCircle,
  salmon,
  white,
  yellowCircle,
} from "../../utils/constants/StylesConstants";
import { StyleSheet, Font } from "@react-pdf/renderer";
import MonserratBoldFont from "../../static/fonts/Montserrat-Bold.ttf";
import MonserratRegularFont from "../../static/fonts/Montserrat-Regular.ttf";

Font.register({
  family: montserratBold,
  src: MonserratBoldFont,
});

Font.register({
  family: montserratRegular,
  src: MonserratRegularFont,
});
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100vh",
  },
  page: {
    fontFamily: montserratBold,
    border: `1px solid ${black}`,
    backgroundColor: white,
    position: "relative",
    padding: "30px 30px 60px 30px",
  },
  background: {
    width: 250,
    height: 250,
    position: "absolute",
    // opacity: "0.08",
    top: "40%",
    left: "40%",
    transform: `translate(-50%, -50%)`,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 24,
    logoContainer: {
      display: "flex",
      flexDirection: "row",
      width: 80,
      marginRight: 5,
      borderRight: `2px solid ${primary}`,
      img: {
        width: 30,
        height: 30,
        marginRight: 5,
      },
      textLogo: {
        fontSize: 14,
        color: primary,
        marginTop: "auto",
      },
    },
    registerLabel: {
      fontSize: 14,
      color: primary,
      marginTop: "auto",
      fontFamily: montserratBold,
    },
  },
  mainField: {
    fontSize: 10,
    width: 250,
    height: 26,
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    margin: "0 10 10 0",
    borderRadius: 8,
    labelContainer: {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      width: "50%",
      border: `1px solid ${pinkTenue}`,
      backgroundColor: pinkTenue,
      height: "100%",
      textAlign: "start",
      paddingLeft: 5,
      label: { margin: "auto 0" },
    },
    smallLabelContainer: {
      borderTopLeftRadius: 8,
      borderBottomLeftRadius: 8,
      width: "24%",
      border: `1px solid ${pinkTenue}`,
      backgroundColor: pinkTenue,
      height: "100%",
      textAlign: "start",
      paddingLeft: 5,
      label: { margin: "auto 0" },
    },

    valueContainer: {
      display: "flex",
      border: `1px solid ${gray7}`,
      textAlign: "center",
      alignItems: "center",
      height: "100%",
      width: "50%",
      borderLeft: "none",
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      padding: "5px 0",
    },
    smallValueContainer: {
      display: "flex",
      border: `1px solid ${gray7}`,
      textAlign: "center",
      alignItems: "center",
      height: "100%",
      width: "74%",
      borderLeft: "none",
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
      padding: "5px 0",
    },
  },
  propertyInformation: {
    title: {
      display: "flex",
      textAlign: "center",
      color: blackTitle,
      fontSize: 14,
    },
  },
  emptyAnnotations: {
    display: "flex",
    flexDirection: "row",
    dotContainer: {
      height: "100%",
      paddingTop: 5,
    },
  },
  dot: {
    backgroundColor: primary,
    width: 10,
    height: 10,
    borderRadius: "100%",
  },
  subTitle: {
    fontSize: 15,
  },
  colorTitle: {
    color: blackTitle,
  },
  boxShadow: {
    boxShadow: `0px 1px 7px 0px ${gray6}`,
  },
  annotations: {
    title: {
      fontFamily: montserratBold,
      fontSize: 16,
    },
  },
  circleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  widthMediumCircle: {
    maxWidth: 88,
    fontSize: 13,
  },
  widthSmallCircle: {
    maxWidth: 70,
    fontSize: 9,
  },
  circle: {
    border: `3px solid red`,
    borderRadius: "100%",
    width: 70,
    height: 70,
    textAlign: "center",
    label: {
      color: blackTitle,
      fontSize: 11,
      minHeight: 20,
    },
    value: {
      margin: "auto 0",
    },
  },
  borderRed: {
    border: `3px solid ${redCircle}`,
  },
  borderGray: {
    border: `3px solid ${grayCircle}`,
  },
  borderYellow: {
    border: `3px solid ${yellowCircle}`,
  },
  borderGreen: {
    border: `3px solid ${greenCircle}`,
  },
  wField1: {
    width: 166,
  },
  wField2: {
    width: 250,
  },
  wField3: {
    width: "100%",
  },
  mr1: {
    marginRight: 8,
  },
  mr2: {
    marginRight: 22,
  },
  mb0: {
    marginBottom: 8,
  },
  mb1: {
    marginBottom: 10,
  },
  mb2: {
    marginBottom: 14,
  },
  mb3: {
    marginBottom: 16,
  },
  mb4: {
    marginBottom: 24,
  },
  mt1: {
    marginTop: 5,
  },
  marginVerticalCenter: {
    margin: "auto 0",
  },
  hr: {
    height: 1,
    borderBottom: `1px solid ${grayBarDisabled}`,
    marginBottom: 14,
  },
  flex: {
    display: "flex",
  },
  center: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  verticalCenter: {
    alignItems: "center",
  },
  font9: {
    fontSize: 9,
  },
  font11: {
    fontSize: 11,
  },
  font12: {
    fontSize: 12,
  },
  font14: {
    fontSize: 14,
  },
  font18: {
    fontSize: 18,
  },
  font20: {
    fontSize: 20,
  },
  fontMontserrat: {
    fontFamily: montserratRegular,
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  badge: {
    border: `2px solid ${gray8}`,
    borderRadius: "12px",
    alignItems: "center",
    padding: "0 12px 0 12px",
    fontSize: 11,
  },
  greenBadge: {
    border: `2px solid ${greenFill}`,
    borderRadius: "12px",
    alignItems: "center",
    padding: "0 12px 0 12px",
    backgroundColor: greenFill,
    color: white,
    fontSize: 11,
  },
  salmonBadge: {
    border: `2px solid ${salmon}`,
    borderRadius: "12px",
    alignItems: "center",
    padding: "0 12px 0 12px",
    backgroundColor: salmon,
    color: white,
    fontSize: 11,
  },
  grayState: {
    color: grayLabel,
  },
  blackTitle: {
    color: blackTitle,
  },
  paragraph: {
    color: gray6,
  },
  lineSeparator: {
    paddingRight: "5px",
    borderRight: `2px solid ${blackTitle}`,
    marginRight: "5px",
  },

  contentContainer: {},
  gridContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: white,
    flexWrap: "wrap",
    marginBottom: 14,
  },
  card: {
    border: `1px solid ${gray6}`,
    borderRadius: 18,
    width: "100%",
    height: "auto",
    cardHeader: {
      borderBottom: `1px solid ${gray6}`,
      height: 38,
      padding: "0 10px",
    },
    cardContent: {
      padding: 10,
      color: blackTitle,
    },
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    fontFamily: montserratBold,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: primary,
  },
});

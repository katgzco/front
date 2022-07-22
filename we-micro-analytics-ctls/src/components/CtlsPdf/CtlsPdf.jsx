import React, { useEffect, useState } from "react";
import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import HabiLogo from "../../static/logo/habilogo.png";
import HabiLogoBackground from "../../static/logo/habi-logo-black.png";
import { styles } from "./styles";
import { LABEL_ANNOTATION_TYPES } from "../../utils/constants/dynamic";
import {
  ANNOTATION_TYPES_SPANISH,
  ANNOTATION_TYPES_SPANISH_SPELLING,
} from "../../utils/constants/constants";
import { nanoid } from "nanoid";
import { validateNull } from "../../utils/helpers/validateNull";

const CtlsPdf = ({ data }) => {
  const [newData, setNewData] = useState([]);
  const [groups, setGroups] = useState([]);
  const [countsAnnotations, setCountsAnnotations] = useState({});
  const { general, agents, annotations } = data;

  const register = validateNull(general.matricula);
  const expeditionDate = validateNull(general.expedicion);
  const writing = validateNull(general.escritura);
  const department = validateNull(general.departamento);
  const municipality = validateNull(general.municipio);
  const propertyType = validateNull(general.tipo_predio);
  const building = validateNull(general.tipo_inmueble);
  const address = validateNull(general.dir_proc);
  const antiquity = validateNull(general.antiguedad);
  const endZone = validateNull(general.area_final);
  const priceMt2 = validateNull(general.price_mt2);
  const activeMortgages = validateNull(general.cant_hipotecas_activas);
  const cancelledMortgages = validateNull(general.cant_hipotecas_canceladas);
  const activeEmbargoes = validateNull(general.cant_embargos_activos);
  const cancelledEmbargoes = validateNull(general.cant_embargos_cancelados);
  const activePatrimony = validateNull(general.cant_patrimonios_activos);
  const cancelledPatrimony = validateNull(general.cant_patrimonios_cancelados);

  const buildCompleteData = () => {
    let newAnnotations = [];
    annotations.forEach((annotation) => {
      let newAnnotation = { ...annotation };
      agents.forEach((agent) => {
        if (annotation.num_anot === agent.numero_annotacion) {
          newAnnotation = {
            ...newAnnotation,
            a_nombre: agent.a_nombre === "null" ? "-" : agent.a_nombre,
            de_nombre: agent.de_nombre === "null" ? "-" : agent.de_nombre,
          };
        }
      });
      newAnnotations = [...newAnnotations, newAnnotation];
    });
    let newDataTransformed = [];
    const orders = {
      CANCELACION: 4,
      EMBARGO: 1,
      OTRA: 6,
      HIPOTECA: 2,
      COMPRAVENTA: 5,
      PATRIMONIO: 3,
    };
    Object.keys(ANNOTATION_TYPES_SPANISH).map((entry, p) => {
      const matches = newAnnotations.filter(
        (annotation) => annotation.espec2 === entry
      );
      if (matches.length > 0) {
        newDataTransformed.push({
          data: matches,
          name: entry,
          order: [orders[entry]],
        });
      }
    });
    newDataTransformed.sort(function (a, b) {
      if (a.order > b.order) {
        return 1;
      }
      if (a.order < b.order) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    setGroups(newDataTransformed);
    setNewData(newAnnotations);
    countAnnotations(newAnnotations);
  };

  const countAnnotations = (newAnnotations) => {
    let counts = {
      embargoes: 0,
      mortgage: 0,
      buyingSelling: 0,
      otherTypes: 0,
      patrimony: 0,
      total: 0,
    };
    newAnnotations.forEach((annotation) => {
      if (annotation.espec2 === ANNOTATION_TYPES_SPANISH.COMPRAVENTA) {
        counts.buyingSelling++;
        counts.total++;
      } else if (annotation.espec2 === ANNOTATION_TYPES_SPANISH.EMBARGO) {
        counts.embargoes++;
        counts.total++;
      } else if (annotation.espec2 === ANNOTATION_TYPES_SPANISH.HIPOTECA) {
        counts.mortgage++;
        counts.total++;
      } else if (annotation.espec2 === ANNOTATION_TYPES_SPANISH.PATRIMONIO) {
        counts.patrimony++;
        counts.total++;
      } else {
        counts.otherTypes = counts.otherTypes + 1;
        counts.total++;
      }
    });

    setCountsAnnotations(counts);
  };

  useEffect(() => {
    buildCompleteData();
  }, []);

  const getType = (card) => {
    return card.espec2;
  };

  const getState = (card) => {
    return card.es_valida === 0 ? "VALIDO" : "INVALIDO";
  };

  const getColorCircle = (count, label) => {
    let countValid = count ? parseInt(count) : 0;
    if (countValid <= 0) {
      return styles.borderGreen;
    }
  };

  const getBadgeState = (espec2, isCancel) => {
    if (
      espec2 === "HIPOTECA" ||
      espec2 === "EMBARGO" ||
      espec2 === "PATRIMONIO" ||
      espec2 === "DEMANDA"
    ) {
      return (
        <View
          style={[
            isCancel ? styles.greenBadge : styles.salmonBadge,
            styles.mr1,
            styles.font11,
          ]}
        >
          <Text style={[styles.fontMontserrat, styles.font14]}>
            {isCancel ? "CANCELADA" : "VIGENTE"}
          </Text>
        </View>
      );
    }
  };

  const getEmptyContent = () => {
    let emptyAnnotationContent = [];
    Object.keys(countsAnnotations).forEach((annotationCount) => {
      const NAME = LABEL_ANNOTATION_TYPES[annotationCount];
      if (
        !countsAnnotations[annotationCount] &&
        LABEL_ANNOTATION_TYPES[annotationCount] &&
        NAME
      ) {
        emptyAnnotationContent = [
          ...emptyAnnotationContent,
          <View
            style={[styles.emptyAnnotations, styles.mb3]}
            break={!emptyAnnotationContent.length}
            key={`empty_annotation_${nanoid()}`}
          >
            <View style={[styles.emptyAnnotations.dotContainer, styles.mr1]}>
              <View style={[styles.dot, styles.mr1]}></View>
            </View>
            <View style={[styles.flex, styles.column]}>
              <Text style={[styles.subTitle, styles.mb1]}>
                Anotaciones Tipo {NAME}
              </Text>
              <Text style={[styles.font11, styles.paragraph]}>
                {`Actualmente este inmueble no cuenta con especificaciones de tipo ${NAME}`}
              </Text>
            </View>
          </View>,
        ];
      }
    });
    return emptyAnnotationContent;
  };

  return (
    <PDFViewer style={styles.container}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.background} fixed>
            <Image src={HabiLogoBackground} />
          </View>
          <View style={styles.header}>
            <View style={styles.header.logoContainer}>
              <Image src={HabiLogo} style={styles.header.logoContainer.img} />
              <Text style={styles.header.logoContainer.textLogo}>CTLS</Text>
            </View>
            <Text style={styles.header.registerLabel}>
              Matrícula: {register ?? "-"}
            </Text>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.gridContainer}>
              <View style={[styles.mainField, styles.wField2]}>
                <View style={[styles.mainField.labelContainer]}>
                  <Text style={[styles.mainField.labelContainer.label]}>
                    Fecha de expedición
                  </Text>
                </View>
                <Text style={styles.mainField.valueContainer}>
                  {expeditionDate ?? "-"}
                </Text>
              </View>
              <View style={[styles.mainField, styles.wField2]}>
                <View style={styles.mainField.labelContainer}>
                  <Text style={styles.mainField.labelContainer.label}>
                    Fecha de Escritura
                  </Text>
                </View>
                <Text style={styles.mainField.valueContainer}>{writing}</Text>
              </View>
              <View style={[styles.mainField, styles.wField2]}>
                <View style={styles.mainField.labelContainer}>
                  <Text style={styles.mainField.labelContainer.label}>
                    Departamento
                  </Text>
                </View>
                <Text style={styles.mainField.valueContainer}>
                  {department ?? "-"}
                </Text>
              </View>
              <View style={[styles.mainField, styles.wField2]}>
                <View style={styles.mainField.labelContainer}>
                  <Text style={styles.mainField.labelContainer.label}>
                    Municipio
                  </Text>
                </View>
                <Text style={styles.mainField.valueContainer}>
                  {municipality ?? "-"}
                </Text>
              </View>
              <View style={[styles.mainField, styles.wField2]}>
                <View style={styles.mainField.labelContainer}>
                  <Text style={styles.mainField.labelContainer.label}>
                    Tipo de predio
                  </Text>
                </View>
                <Text style={styles.mainField.valueContainer}>
                  {propertyType ?? "-"}
                </Text>
              </View>
              <View style={[styles.mainField, styles.wField2]}>
                <View style={styles.mainField.labelContainer}>
                  <Text style={styles.mainField.labelContainer.label}>
                    Tipo de inmueble
                  </Text>
                </View>
                <Text style={styles.mainField.valueContainer}>{building}</Text>
              </View>
              <View style={[styles.mainField, styles.wField3]}>
                <View style={styles.mainField.smallLabelContainer}>
                  <Text style={styles.mainField.smallLabelContainer.label}>
                    Dirección
                  </Text>
                </View>
                <Text style={styles.mainField.smallValueContainer}>
                  {address ?? "-"}
                </Text>
              </View>
              <View style={[styles.mainField, styles.wField1]}>
                <View style={styles.mainField.labelContainer}>
                  <Text style={styles.mainField.labelContainer.label}>
                    Antigüedad
                  </Text>
                </View>
                <Text style={styles.mainField.valueContainer}>
                  {antiquity + " años" ?? "-"}
                </Text>
              </View>
              <View style={[styles.mainField, styles.wField1]}>
                <View style={styles.mainField.labelContainer}>
                  <Text style={styles.mainField.labelContainer.label}>
                    Área final
                  </Text>
                </View>
                <Text style={styles.mainField.valueContainer}>
                  {endZone ?? "-"}
                </Text>
              </View>
              <View style={[styles.mainField, styles.wField1]}>
                <View style={styles.mainField.labelContainer}>
                  <Text style={styles.mainField.labelContainer.label}>
                    Precio mt2
                  </Text>
                </View>
                <Text style={styles.mainField.valueContainer}>
                  {priceMt2 ?? "-"}
                </Text>
              </View>
            </View>
            <View style={styles.hr}></View>
            <View style={styles.propertyInformation}>
              <View style={[styles.propertyInformation.title, styles.mb2]}>
                <Text>INFORMACIÓN DESTACADA</Text>
                <Text>DEL INMUEBLE</Text>
              </View>
              <View
                style={[styles.flex, styles.center, styles.row, styles.mb2]}
              >
                <View
                  style={[
                    styles.circleContainer,
                    styles.mr2,
                    styles.widthMediumCircle,
                  ]}
                >
                  <Text style={[styles.circle.label, styles.mb1]}>
                    Hipotecas {"\n"} Activas
                  </Text>
                  <View
                    style={[styles.circle, getColorCircle(activeMortgages)]}
                  >
                    <Text style={styles.circle.value}>
                      {activeMortgages ?? "0"}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.circleContainer,
                    styles.mr2,
                    styles.widthMediumCircle,
                  ]}
                >
                  <Text style={[styles.circle.label, styles.mb1]}>
                    Hipotecas {"\n"} Canceladas
                  </Text>
                  <View
                    style={[styles.circle, getColorCircle(cancelledMortgages)]}
                  >
                    <Text style={styles.circle.value}>
                      {cancelledMortgages ?? "0"}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.circleContainer,
                    styles.mr2,
                    styles.widthMediumCircle,
                  ]}
                >
                  <Text style={[styles.circle.label, styles.mb1]}>
                    Embargos {"\n"} Activos
                  </Text>
                  <View
                    style={[styles.circle, getColorCircle(activeEmbargoes)]}
                  >
                    <Text style={styles.circle.value}>
                      {activeEmbargoes ?? 0}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.circleContainer,
                    styles.mr2,
                    styles.widthMediumCircle,
                  ]}
                >
                  <Text style={[styles.circle.label, styles.mb1]}>
                    Embargos {"\n"} Cancelados
                  </Text>
                  <View
                    style={[styles.circle, getColorCircle(cancelledEmbargoes)]}
                  >
                    <Text style={styles.circle.value}>
                      {cancelledEmbargoes ?? 0}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.flex, styles.center, styles.row]}>
                <View
                  style={[
                    styles.circleContainer,
                    styles.mr2,
                    styles.widthMediumCircle,
                  ]}
                >
                  <Text style={[styles.circle.label, styles.mb1]}>
                    Patrimonios {"\n"} Activos
                  </Text>
                  <View
                    style={[styles.circle, getColorCircle(activePatrimony)]}
                  >
                    <Text style={styles.circle.value}>
                      {activePatrimony ?? 0}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.circleContainer,
                    styles.mr2,
                    styles.widthMediumCircle,
                  ]}
                >
                  <Text style={[styles.circle.label, styles.mb1]}>
                    Patrimonios {"\n"} Cancelados
                  </Text>
                  <View
                    style={[styles.circle, getColorCircle(cancelledPatrimony)]}
                  >
                    <Text style={styles.circle.value}>
                      {cancelledPatrimony ?? 0}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.annotations}>
              <Text
                style={[
                  styles.annotations.title,
                  styles.colorTitle,
                  styles.mb2,
                ]}
              >
                Anotaciones
              </Text>
              <View
                style={[styles.flex, styles.center, styles.row, styles.mb2]}
              >
                <View
                  style={[
                    styles.circleContainer,
                    styles.mr2,
                    styles.widthSmallCircle,
                  ]}
                >
                  <Text style={[styles.circle.label, styles.mb3]}>
                    Hipotecas
                  </Text>
                  <View
                    style={[
                      styles.circle,
                      getColorCircle(countsAnnotations.mortgage),
                    ]}
                  >
                    <Text style={styles.circle.value}>
                      {countsAnnotations.mortgage ?? 0}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.circleContainer,
                    styles.mr2,
                    styles.widthSmallCircle,
                  ]}
                >
                  <Text style={[styles.circle.label, styles.mb3]}>
                    Embargos
                  </Text>
                  <View
                    style={[
                      styles.circle,
                      getColorCircle(countsAnnotations.embargoes),
                    ]}
                  >
                    <Text style={styles.circle.value}>
                      {countsAnnotations.embargoes ?? 0}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.circleContainer,
                    styles.mr2,
                    styles.widthSmallCircle,
                  ]}
                >
                  <Text style={[styles.circle.label, styles.mb3]}>
                    Compra {"\n"} venta
                  </Text>
                  <View
                    style={[
                      styles.circle,
                      getColorCircle(countsAnnotations.buyingSelling),
                    ]}
                  >
                    <Text style={styles.circle.value}>
                      {countsAnnotations.buyingSelling ?? 0}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.circleContainer,
                    styles.mr2,
                    styles.widthSmallCircle,
                  ]}
                >
                  <Text style={[styles.circle.label, styles.mb3]}>
                    Otros Tipos
                  </Text>
                  <View
                    style={[
                      styles.circle,
                      getColorCircle(countsAnnotations.otherTypes),
                    ]}
                  >
                    <Text style={styles.circle.value}>
                      {countsAnnotations.otherTypes ?? 0}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.circleContainer,
                    styles.mr2,
                    styles.widthSmallCircle,
                  ]}
                >
                  <Text style={[styles.circle.label, styles.mb3]}>
                    Patrimonio
                  </Text>
                  <View
                    style={[
                      styles.circle,
                      getColorCircle(countAnnotations.patrimony),
                    ]}
                  >
                    <Text style={styles.circle.value}>
                      {" "}
                      {countsAnnotations.patrimony ?? 0}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.circleContainer,
                    styles.mr2,
                    styles.widthSmallCircle,
                  ]}
                >
                  <Text style={[styles.circle.label, styles.mb3]}>Total</Text>
                  <View
                    style={[
                      styles.circle,
                      getColorCircle(countsAnnotations.total),
                    ]}
                  >
                    <Text style={styles.circle.value}>
                      {countsAnnotations.total ?? 0}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            {getEmptyContent()}
            {groups.map((group) => (
              <View style={[styles.mb4]}>
                <View
                  style={[styles.emptyAnnotations, styles.mb3]}
                  key={`annotation_${nanoid()}`}
                >
                  <View
                    style={[styles.emptyAnnotations.dotContainer, styles.mr1]}
                  >
                    <View style={[styles.dot, styles.mr1]}></View>
                  </View>
                  <View style={[styles.flex, styles.column]}>
                    <Text style={[styles.subTitle, styles.mb1]}>
                      Anotaciones Tipo{" "}
                      {ANNOTATION_TYPES_SPANISH_SPELLING[group.name]}
                    </Text>
                  </View>
                </View>
                {group.data.map((card) => (
                  <View
                    style={[styles.card, styles.mb2, styles.boxShadow]}
                    key={nanoid()}
                  >
                    <View
                      style={[
                        styles.card.cardHeader,
                        styles.flex,
                        styles.row,
                        styles.spaceBetween,
                        styles.verticalCenter,
                      ]}
                    >
                      <View
                        style={[
                          styles.flex,
                          styles.row,
                          styles.font11,
                          styles.blackTitle,
                        ]}
                      >
                        <Text style={styles.lineSeparator}>
                          Anotación #{card.num_anot}
                        </Text>
                        <Text>{getType(card)}</Text>
                      </View>
                      <View
                        style={[
                          styles.flex,
                          styles.row,
                          styles.center,
                          styles.grayState,
                        ]}
                      >
                        <Text style={[styles.font11, styles.mr1]}>Estado:</Text>
                        {getBadgeState(card.espec2, card.es_cancelada)}
                        <View style={[styles.badge]}>
                          <Text style={[styles.fontMontserrat, styles.font11]}>
                            {getState(card)}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.card.cardContent}>
                      <View
                        style={[
                          styles.flex,
                          styles.mb2,
                          styles.row,
                          styles.verticalCenter,
                        ]}
                      >
                        <Text style={[styles.mr1, styles.font12]}>
                          Fecha de anotación:
                        </Text>
                        <Text
                          style={[
                            styles.paragraph,
                            styles.font9,
                            styles.fontMontserrat,
                            styles.marginVerticalCenter,
                          ]}
                        >
                          {card.fecha_anot ?? "-"}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.flex,
                          styles.mb2,
                          styles.row,
                          styles.verticalCenter,
                        ]}
                      >
                        <Text style={[styles.mr1, styles.font12]}>
                          Notaría:{" "}
                        </Text>
                        <Text
                          style={[
                            styles.paragraph,
                            styles.font9,
                            styles.fontMontserrat,
                            styles.marginVerticalCenter,
                          ]}
                        >
                          {card.notaria ?? "-"}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.flex,
                          styles.mb2,
                          styles.row,
                          styles.verticalCenter,
                        ]}
                      >
                        <Text style={[styles.mr1, styles.font12]}>
                          Número de especificación:
                        </Text>
                        <Text
                          style={[
                            styles.paragraph,
                            styles.font9,
                            styles.fontMontserrat,
                          ]}
                        >
                          {card.num_espec ?? "-"}
                        </Text>
                      </View>
                      <View style={[styles.flex, styles.column, styles.mb2]}>
                        <Text style={[styles.mb1, styles.font12]}>
                          Especificación:
                        </Text>
                        <Text
                          style={[
                            styles.paragraph,
                            styles.font9,
                            styles.fontMontserrat,
                          ]}
                        >
                          {card.espec1 ?? "-"}
                        </Text>
                      </View>
                      <View style={[styles.flex, styles.column, styles.mb2]}>
                        <Text style={[styles.mb1, styles.font12]}>
                          Especificación Homologada:
                        </Text>
                        <Text
                          style={[
                            styles.paragraph,
                            styles.font9,
                            styles.fontMontserrat,
                          ]}
                        >
                          {card.espec2 ?? "-"}
                        </Text>
                      </View>
                      <View
                        style={[
                          styles.flex,
                          styles.mb2,
                          styles.row,
                          styles.verticalCenter,
                        ]}
                      >
                        <Text style={[styles.mr1, styles.font12]}>
                          Valor acto:
                        </Text>
                        <Text
                          style={[
                            styles.verticalCenter,
                            styles.font9,
                            styles.fontMontserrat,
                            styles.paragraph,
                          ]}
                        >
                          ${card.valor_acto === "null" ? 0 : card.valor_acto}
                        </Text>
                      </View>
                      <View style={[styles.flex, styles.column, styles.mb2]}>
                        <Text style={[styles.mb1, styles.font12]}>De: </Text>
                        <Text style={[styles.paragraph, styles.font9]}>
                          {card.de_nombre ?? "-"}
                        </Text>
                      </View>
                      <View style={[styles.flex, styles.column]}>
                        <Text style={[styles.mb1, styles.font12]}>A: </Text>
                        <Text style={[styles.paragraph, styles.font9]}>
                          {card.a_nombre ?? "-"}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </View>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `Página ${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default CtlsPdf;

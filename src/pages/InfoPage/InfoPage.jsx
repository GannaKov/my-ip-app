/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./InfoPage.module.css";

const InfoPage = ({ countryData, idData }) => {
  return (
    <div className={styles.container}>
      <Tabs>
        <TabList>
          <Tab>IP </Tab>
          <Tab>Country Info</Tab>
        </TabList>

        <TabPanel>
          <div className={styles.cardWrp}>
            <h2 className={styles.title}>Your IP Info</h2>
            {idData && countryData && (
              <div className={styles.containerInner}>
                <p className={styles.text}>
                  <span className={styles.subTitle}>IP:&#32;</span>
                  {idData.ip}
                </p>
                <p className={styles.text}>{idData.location.country}</p>
                <p className={styles.text}>{idData.location.region}</p>
                <p className={styles.text}>{idData.location.city}</p>
              </div>
            )}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className={styles.title}>Information About Country</h2>
          {idData && countryData && (
            <div className={styles.containerInner}>
              <p className={styles.text}>{countryData[0].name.common}</p>
              <p className={styles.text}>{countryData[0].name.official}</p>
              <p className={styles.text}>
                <span className={styles.subTitle}>Capital:&#32;</span>
                {countryData[0].capital[0]}
              </p>
              <p className={styles.text}>
                <span className={styles.subTitle}>Population:&#32;</span>
                {countryData[0].population} people
              </p>
              <img
                className={styles.flafImg}
                src={countryData[0].flags.png}
                alt={countryData[0].flags.alt}
              />
            </div>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default InfoPage;

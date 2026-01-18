import React from "react";
import styles from "./style.module.scss";
import Header from "../../layout/Header";
import SideBar from "../../layout/SideBar";
import News from "../../components/News";
import Chart from "../../components/Chart";

const chart = () => {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <SideBar />
        <div className={styles.contents}>
          <Chart />
          <News />
        </div>
      </div>
    </>
  );
};

export default chart;
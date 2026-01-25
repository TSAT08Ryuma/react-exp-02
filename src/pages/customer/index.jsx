import React from "react";
import styles from "./style.module.scss";
import Header from "../../layout/Header";
import SideBar from "../../layout/SideBar";
import News from "../../components/News";
import Chart from "../../components/Chart";
import CustomerList from "../../components/CustomerList";

const Customer = () => {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <SideBar />
        <div className={styles.contents}>
          <CustomerList />
        </div>
      </div>
    </>
  );
};

export default Customer;
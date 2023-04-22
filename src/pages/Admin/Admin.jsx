import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./styles.module.scss";

const Admin = () => {
  return (
    <div>
      <Header />
      <section className={styles.bag}>
        <h1 className={styles.title}>Админка</h1>
        <div className={styles.body}>
          <p className={styles.button}>Добавить новый тип</p>
          <p className={styles.button}>Добавить новый Brand</p>
          <p className={styles.button}>Добавить новый девайс</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Admin;

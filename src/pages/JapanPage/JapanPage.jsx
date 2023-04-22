import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./styles.module.scss";

const JapanPage = () => {
  return (
    <div>
      <Header />
      <section className={styles.body}>
        <article className={styles.information}>
          <div className={styles.titleAndImage}>
            <img
              className={styles.image}
              src="../images/japan.jpg"
              alt="japan"
              width="250"
              height="250"
            />
            <div className={styles.titleAndPrice}>
              <h2 className={styles.title}>Фудзи</h2>
              <p className={styles.price}>Цена: 190 000 рублей</p>
              <h3 className={styles.descriptionTitle}>Увлекательное путешествие в страну суси и самураев.</h3>
              <p className={styles.description}>
               
              </p>
            </div>
          </div>
          <div className={styles.optionsWrapper}>
            <h3 className={styles.optionsTitle}>Примечание:</h3>
            <ul className={styles.options}>
              <li className={styles.option}>Транспорт</li>
              <li className={styles.option}>
              В основном скоростные поезда внутри Японии.
              </li>

            </ul>
          </div>
        </article>
        <article className={styles.subbar}>
          <h3 className={styles.subbarTitle}>Рейтинг</h3>
          <div className={styles.imageWrapper}>
            <p className={styles.rating}>4.75</p>
          </div>
          <div className={styles.addBag}>
            <p className={styles.addBagText}>Добавить в корзину</p>
            <div className={styles.addBagImage}>
              <img src="../images/bag.svg" alt="bag" width="76" height="48" />
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default JapanPage;

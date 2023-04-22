import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const HeaderRegAuth = () => {
  return (
    <article className={styles.headerTitle}>
      <Link to="/" className={styles.title}>
      Чисто и Точка
      </Link>
      <p className={styles.description}>
   Быстро и качественно 
      </p>
      <ul className={styles.social}>
        <li className={styles.linkItem}>
          <a className={styles.link} href="#">
            <img
              className={styles.linkImage}
              src="../images/instagram.svg"
              alt="instagram"
              width="50"
              height="46"
            />
          </a>
        </li>
        <li className={styles.linkItem}>
          <a className={styles.link} href="#">
            <img
              className={styles.linkImage}
              src="../images/telegram.svg"
              alt="telegram"
              width="50"
              height="46"
            />
          </a>
        </li>
        <li className={styles.linkItem}>
          <a className={styles.link} href="#">
            <img
              className={styles.linkImage}
              src="../images/whatsapp.svg"
              alt="whatsapp"
              width="50"
              height="46"
            />
          </a>
        </li>
        <li className={styles.linkItem}>
          <a className={styles.link} href="#">
            <img
              className={styles.linkImage}
              src="../images/twitter.svg"
              alt="twitter"
              width="50"
              height="46"
            />
          </a>
        </li>
        <li className={styles.linkItem}>
          <a className={styles.link} href="#">
            <img
              className={styles.linkImage}
              src="../images/facebook.svg"
              alt="facebook"
              width="50"
              height="46"
            />
          </a>
        </li>
      </ul>
    </article>
  );
};

export default HeaderRegAuth;

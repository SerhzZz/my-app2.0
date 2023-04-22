import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, obj) => {
    return obj.count + sum;
  }, 0);

  useEffect(() => {
    if (localStorage.password == "") {
      navigate("/registration");
    }
  }, []);

  const enterClicker = () => {
    localStorage.password = "";
    localStorage.email = "";
    navigate("/registration");
  };

  return (
    <section className={styles.header}>
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
      <article className={styles.headerBag}>
        <Link to="/auth" className={styles.auth}>
          Личный кабинет
        </Link>
        <Link to="/bag" className={styles.bag}>
          <img
            className={styles.bagImage}
            src="../images/bag.svg"
            alt="bag"
            width="40"
            height="28"
          />
          <p className={styles.bagCount}>{totalCount}</p>
        </Link>
        <Link
          to="/registration"
          className={styles.exit}
          onClick={() => enterClicker()}
        >
          Выход
        </Link>
      </article>
    </section>
  );
};

export default Header;

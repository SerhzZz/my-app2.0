import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import HeaderRegAuth from "../../components/HeaderRegAuth/HeaderRegAuth";
import styles from "./styles.module.scss";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goHome = () => {
    let ourEmail = document
      .getElementsByClassName(styles.email)[0]
      .checkValidity();
    let ourPassword = document
      .getElementsByClassName(styles.password)[0]
      .checkValidity();
    if (ourEmail && ourPassword) {
      localStorage.email = email;
      localStorage.password = password;
      navigate("/");
    }
  };
  useEffect(() => {
    if (localStorage.password) {
      navigate("/");
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <HeaderRegAuth />
      <section className={styles.registration}>
        <h1 className={styles.title}>Регистрация</h1>
        <input
          className={styles.email}
          type="email"
          placeholder="Введите ваш email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={styles.password}
          type="text"
          placeholder="Введите ваш пароль..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <article className={styles.text}>
          <p className={styles.registr}>
            Есть аккаунт?{" "}
            <Link className={styles.link} to="/auth">
              Войти
            </Link>
          </p>
          <input
            className={styles.submit}
            type="submit"
            value="Войти"
            onClick={() => goHome()}
          />
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default Register;

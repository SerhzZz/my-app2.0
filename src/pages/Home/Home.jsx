import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./styles.module.scss";
import axios from "axios";
import Card from "../../components/Card/Card";



const dataJapan = [
  {
    id: 0,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 5,
  },
  {
    id: 1,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 4.2,
  },
  {
    id: 2,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 4.1,
  },
  {
    id: 3,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 3.9,
  },
  {
    id: 4,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 4.8,
  },
  {
    id: 5,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 5,
  },
  {
    id: 6,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 4.1,
  },
  {
    id: 7,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 4.7,
  },
  {
    id: 8,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 4.8,
  },
  {
    id: 9,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 4.3,
  },
  {
    id: 10,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 4.5,
  },
  {
    id: 11,
    image: "../images/japan.jpg",
    name: "Токио",
    stars: 5,
  },
];

const dataRussia = [
  {
    id: 0,
    image: " ../images/Usluga.jpg",
    name: "Услуги",
    stars: 5,
  },
  {
    id: 1,
    image: " ../images/Usluga.jpg",
    name: "Услуги",
    stars: 4.2,
  },
  {
    id: 2,
    image: " ../images/Usluga.jpg",
    name: "Услуги",
    stars: 4.1,
  },
  {
    id: 3,
    image: " ../images/Usluga.jpg",
    name: "Услуги",
    stars: 3.9,
  },
  {
    id: 4,
    image: " ../images/Usluga.jpg",
    name: "Услуги",
    stars: 4.8,
  },
  {
    id: 5,
    image: " ../images/Usluga.jpg",
    name: "Услуги",
    stars: 5,
  },
  {
    id: 6,
    image: " ../images/Usluga.jpg",
    name: "Услуги",
    stars: 4.1,
  },
  {
    id: 7,
    image: " ../images/Usluga.jpg",
    name: "Услуги",
    stars: 4.7,
  },
  {
    id: 8,
    image: " ../images/Usluga.jpg",
    name: "Услуги",
    stars: 4.8,
  },
  {
    id: 9,
    image: " ../images/Usluga.jpg",
    name: "Услуги",
    stars: 4.3,
  },
  {
    id: 10,
    image: " ../images/Usluga.jpg",
    name: "Услуги",
    stars: 4.5,
  },
  {
    id: 11,
    image: " ../images/Usluga.jpg",
    name: "Услуги",
    stars: 5,
  },
];
const dataSpain = [
  {
    id: 0,
    image: "../images/Kercher.jpg",
    name: "Мойка высокого давления",
    stars: 5,
  },
  {
    id: 1,
    image: "../images/Kercher.jpg",
    name: "Мойка высокого давления",
    stars: 4.2,
  },
  {
    id: 2,
    image: "../images/Kercher.jpg",
    name: "Мойка высокого давления",
    stars: 4.1,
  },
  {
    id: 3,
    image: "../images/Kercher.jpg",
    name: "Мойка высокого давления",
    stars: 3.9,
  },
  {
    id: 4,
    image: "../images/Kercher.jpg",
    name: "Мойка высокого давления",
    stars: 4.8,
  },
  {
    id: 5,
    image: "../images/Kercher.jpg",
    name: "Мойка высокого давления",
    stars: 5,
  },
  {
    id: 6,
    image: "../images/Kercher.jpg",
    name: "Мойка высокого давления",
    stars: 4.1,
  },
  {
    id: 7,
    image: "../images/Kercher.jpg",
    name: "Мойка высокого давления",
    stars: 4.7,
  },
  {
    id: 8,
    image: "../images/Kercher.jpg",
    name: "Мойка высокого давления",
    stars: 4.8,
  },
  {
    id: 9,
    image: "../images/Kercher.jpg",
    name: "Мойка высокого давления",
    stars: 4.3,
  },
  {
    id: 10,
    image: "../images/Kercher.jpg",
    name: "Мойка высокого давления",
    stars: 4.5,
  },
  {
    id: 11,
    image: "../images/Kercher.jpg",
    name: "Мойка высокого давления",
    stars: 5,
  },
];

const dataTurkey = [
  {
    id: 0,
    image: "../images/Pil.jpg",
    name: "Бытовой пылесос",
    stars: 5,
  },
  {
    id: 1,
    image: "../images/Pil.jpg",
    name: "Бытовой пылесос",
    stars: 4.2,
  },
  {
    id: 2,
    image: "../images/Pil.jpg",
    name: "Бытовой пылесос",
    stars: 4.1,
  },
  {
    id: 3,
    image: "../images/Pil.jpg",
    name: "Бытовой пылесос",
    stars: 3.9,
  },
  {
    id: 4,
    image: "../images/Pil.jpg",
    name: "Бытовой пылесос",
    stars: 4.8,
  },
  {
    id: 5,
    image: "../images/Pil.jpg",
    name: "Бытовой пылесос",
    stars: 5,
  },
  {
    id: 6,
    image: "../images/Pil.jpg",
    name: "Бытовой пылесос",
    stars: 4.1,
  },
  {
    id: 7,
    image: "../images/Pil.jpg",
    name: "Бытовой пылесос",
    stars: 4.7,
  },
  {
    id: 8,
    image: "../images/Pil.jpg",
    name: "Бытовой пылесос",
    stars: 4.8,
  },
  {
    id: 9,
    image: "../images/Pil.jpg",
    name: "Бытовой пылесос",
    stars: 4.3,
  },
  {
    id: 10,
    image: "../images/Pil.jpg",
    name: "Бытовой пылесос",
    stars: 4.5,
  },
  {
    id: 11,
    image: "../images/Pil.jpg",
    name: "Бытовой пылесос",
    stars: 5,
  },
];

const dataFrance = [
  {
    id: 0,
    image: "../images/CHemy.jpg",
    name: "Бытовая химия",
    stars: 5,
  },
  {
    id: 1,
    image: "../images/CHemy.jpg",
    name: "Бытовая химия",
    stars: 4.2,
  },
  {
    id: 2,
    image: "../images/CHemy.jpg",
    name: "Бытовая химия",
    stars: 4.1,
  },
  {
    id: 3,
    image: "../images/CHemy.jpg",
    name: "Бытовая химия",
    stars: 3.9,
  },
  {
    id: 4,
    image: "../images/CHemy.jpg",
    name: "Бытовая химия",
    stars: 4.8,
  },
  {
    id: 5,
    image: "../images/CHemy.jpg",
    name: "Бытовая химия",
    stars: 5,
  },
  {
    id: 6,
    image: "../images/CHemy.jpg",
    name: "Бытовая химия",
    stars: 4.1,
  },
  {
    id: 7,
    image: "../images/CHemy.jpg",
    name: "Бытовая химия",
    stars: 4.7,
  },
  {
    id: 8,
    image: "../images/CHemy.jpg",
    name: "Бытовая химия",
    stars: 4.8,
  },
  {
    id: 9,
    image: "../images/CHemy.jpg",
    name: "Бытовая химия",
    stars: 4.3,
  },
  {
    id: 10,
    image: "../images/CHemy.jpg",
    name: "Бытовая химия",
    stars: 4.5,
  },
  {
    id: 11,
    image: "../images/CHemy.jpg",
    name: "Бытовая химия",
    stars: 5,
  },
];

const dataItaly = [
  {
    id: 0,
    image: "../images/Steam.jpg",
    name: "Промышленный парогенератор",
    stars: 5,
  },
  {
    id: 1,
    image: "../images/Steam.jpg",
    name: "Промышленный парогенератор",
    stars: 4.2,
  },
  {
    id: 2,
    image: "../images/Steam.jpg",
    name: "Промышленный парогенератор",
    stars: 4.1,
  },
  {
    id: 3,
    image: "../images/Steam.jpg",
    name: "Промышленный парогенератор",
    stars: 3.9,
  },
  {
    id: 4,
    image: "../images/Steam.jpg",
    name: "Промышленный парогенератор",
    stars: 4.8,
  },
  {
    id: 5,
    image: "../images/Steam.jpg",
    name: "Промышленный парогенератор",
    stars: 5,
  },
  {
    id: 6,
    image: "../images/Steam.jpg",
    name: "Промышленный парогенератор",
    stars: 4.1,
  },
  {
    id: 7,
    image: "../images/Steam.jpg",
    name: "Промышленный парогенератор",
    stars: 4.7,
  },
  {
    id: 8,
    image: "../images/Steam.jpg",
    name: "Промышленный парогенератор",
    stars: 4.8,
  },
  {
    id: 9,
    image: "../images/Steam.jpg",
    name: "Промышленный парогенератор",
    stars: 4.3,
  },
  {
    id: 10,
    image: "../images/Steam.jpg",
    name: "Промышленный парогенератор",
    stars: 4.5,
  },
  {
    id: 11,
    image: "../images/Steam.jpg",
    name: "Промышленный парогенератор",
    stars: 5,
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [tongler, setTongler] = useState("spain","japan");
  const [ourData, setOurData] = useState([]);

  useEffect(() => {
    const getDataFunction = async () => {
      const { data } = await axios.get(
        `https://6388d722d94a7e5040a86ba3.mockapi.io/${tongler}`
      );
      await setOurData(data);
    };
    getDataFunction();
  }, [tongler]);

  useEffect(() => {
    if (localStorage.password === "") {
      navigate("/registration");
    }
  }, []);

  return (
    <div>
      <Header />
      <ul className={styles.navigation}>
        <li
          className={
            tongler === "russia"
              ? styles.navigationItemActive
              : styles.navigationItem
          }
          onClick={() => setTongler("russia")}
        >
          <p className={styles.navigationName}>Услуги</p>
        </li>
        <li
          className={
            tongler === "japan"
              ? styles.navigationItemActive
              : styles.navigationItem
          }
          onClick={() => setTongler("japan")}
        >
          <p className={styles.navigationName}></p>
        </li>
        <li
          className={
            tongler === "turkey"
              ? styles.navigationItemActive
              : styles.navigationItem
          }
          onClick={() => setTongler("turkey")}
        >
          <p className={styles.navigationName}>Пылесос</p>
        </li>
        <li
          className={
            tongler === "france"
              ? styles.navigationItemActive
              : styles.navigationItem
          }
          onClick={() => setTongler("france")}
        >
          <p className={styles.navigationName}>Химия</p>
        </li>
        <li
          className={
            tongler === "spain"
              ? styles.navigationItemActive
              : styles.navigationItem
          }
          onClick={() => setTongler("spain")}
        >
          <p className={styles.navigationName}>Мойка</p>
        </li>
        <li
          className={
            tongler === "italy"
              ? styles.navigationItemActive
              : styles.navigationItem
          }
          onClick={() => setTongler("italy")}
        >
          <p className={styles.navigationName}>Парогенераторы</p>
        </li>
      </ul>
      <section className={styles.products}>
        {(tongler === "japan"
          ? dataJapan
          : tongler === "russia"
          ? dataRussia
          : tongler === "turkey"
          ? dataTurkey
          : tongler === "france"
          ? dataFrance
          : tongler === "spain"
          ? dataSpain
          : tongler === "italy"
          ? dataItaly
          : ourData
        ).map((el) => (
          <Card tongler={tongler} el={el}  ></Card>
        ))}
      </section>
      <ul className={styles.pageNavigation}>
        <li className={styles.pageItemNav}>
          <p className={styles.pageItemText}>1</p>
        </li>
        <li className={styles.pageItemNav}>
          <p className={styles.pageItemText}>2</p>
        </li>
        <li className={styles.pageItemNav}>
          <p className={styles.pageItemText}>3</p>
        </li>
        <li className={styles.pageItemPoints}>
          <p className={styles.pageItemText}>...</p>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default Home;

{
  /*
            <Link
  to={
    tongler === "japan"
      ? "/japan"
      : tongler === "russia"
      ? "/russia"
      : tongler === "spain"
      ? "/spain"
      : "/"
  }
  className={styles.product}
  key={el.id}
>
  <div className={styles.imageWrapper}>
    <img
      className={styles.image}
      src={el.image}
      alt=""
      width="195"
      height="135"
    />
  </div>
  <div className={styles.cardInformation}>
    <p className={styles.cardTitle}>{el.name}</p>
    <div className={styles.cardCount}>
      <p className={styles.count}>{el.stars}</p>
      <div className={styles.cardImage}>
        <img
          src="../images/star-outlined.svg"
          width="20"
          height="14"
          alt=""
        />
      </div>
    </div>
  </div>
</Link>
  */
}

import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { addItems, minusItem, removeItems } from "../../redux/slices/cartSlice";

const Card = ({ tongler, el }) => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cart);
  let countOur = 0;

  const onClickAdd = () => {
    const item = {
      id: el.id,
      title: el.name,
      price: el.price,
      imageUrl: el.image,
      count: countOur,
    };
    dispatch(addItems(item));
  };

  return (
    <div className={styles.product} key={el.id}>
      <Link
        to={
          tongler === "japan"
            ? "/japan"
            : tongler === "russia"
            ? "/russia"
            : tongler === "spain"
            ? "/spain"
            : tongler === "italy"
        }
        className={styles.imageWrapper}
      >
        <img
          className={styles.image}
          src={el.image}
          alt=""
          width="195"
          height="135"
        />
      </Link>
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
      <div className={styles.addItem} onClick={() => onClickAdd()}>Добавить</div>
    </div>
  );
};

export default Card;

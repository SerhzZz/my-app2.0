import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItems, minusItem, removeItems } from "../../redux/slices/cartSlice";

const Bag = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cart);

  const totalCount = items.reduce((sum, obj) => {
    return obj.count + sum;
  }, 0);

  return (
    <div>
      <Header />
      <section className={styles.bag}>
        <h1 className={styles.title}>Корзина</h1>
        {totalPrice === 0 ? (
          <div className={styles.body}>
            <p className={styles.text}>Пустая</p>
            <img
              className={styles.image}
              src="../images/bag.svg"
              alt="bag"
              width="40"
              height="29"
            />
          </div>
        ) : (
          <div className={styles.body}>
            {items.map((item) => (
              <div className={styles.cart}>
                <div className={styles.cartImage}>
                  <img src={item.imageUrl} alt="" width="100" height="100" />
                </div>

                <p className={styles.cartName}>{item.title}</p>
                <div className={styles.cartCountWrapper}>
                  {item.count === 0 ? (
                    <div className={styles.cartMinusButton}>-</div>
                  ) : (
                    <div
                      className={styles.cartMinusButton}
                      onClick={() => dispatch(minusItem(item.id))}
                    >
                      -
                    </div>
                  )}

                  <p className={styles.cartCount}>{item.count}</p>
                  <div
                    className={styles.cartPlusButton}
                    onClick={() => dispatch(addItems(item))}
                  >
                    +
                  </div>
                  <p className={styles.cartPrice}>{item.count * item.price}₽</p>
                  <div
                    className={styles.cartResetButton}
                    onClick={() => dispatch(removeItems(item.id))}
                  >
                    X
                  </div>
                </div>
              </div>
            ))}
            <div className={styles.cartResult}>
              <p className={styles.cartTotalCount}>Всего: {totalCount} шт.</p>
              <p className={styles.cartTotalPrice}>
                Сумма заказа: {totalPrice}₽
              </p>
            </div>

            <div className={styles.footerButtons}>
              <Link to="/" className={styles.goBackButton}>
                Вернуться
              </Link>
              <p className={styles.payButton}>Оплатить</p>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Bag;

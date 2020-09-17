import React from "react";
import Carousel from "react-elastic-carousel";
import styles from "../styles/Home.module.css";

function Categories({ categories }) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div>
      <>
        <Carousel breakPoints={breakPoints}>
          {categories.map((item) => (
            <div className={styles.item}>
              <img src={item.image} alt="" className={styles.itemImage} />
              <div className={styles.itemText}>{item.name}</div>
            </div>
          ))}
        </Carousel>
      </>
    </div>
  );
}

export default Categories;

import React, { Component } from "react";
import Axios from "axios";
import Carousel from "react-elastic-carousel";
import styles from "../styles/Home.module.css";

export default class Categories extends Component {
  state = {
    product: [],
  };
  componentDidMount() {
    Axios.get(
      "https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop"
    ).then((Res) => {
      const product = Res.data.category;
      this.setState({ product });
    });
  }

  render() {
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 },
    ];
    console.log(this.state.product);
    return (
      <>
        <Carousel breakPoints={breakPoints}>
          {this.state.product.map((item) => (
            <div className={styles.item}>
              <img src={item.image} alt="" className={styles.itemImage} />
              <div className={styles.itemText}>{item.name}</div>
            </div>
          ))}
        </Carousel>
      </>
    );
  }
}

import React from "react";
import styles from "../../styles/Home.module.css";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          <div className={styles.showProduct}>
            <div className={styles.productImage}>
              <img src={post.image_url} alt="" />
            </div>
            <div className={styles.productDetails}>
              <div>{post.product_name}</div>
              <div>
                <strike>{post.price_stock[0].mrp}</strike>
                <span>{post.price_stock[0].selling_price}</span>
              </div>
              <div>{post.price_stock[0].name}</div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Posts;

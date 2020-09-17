import Head from "next/head";
import styles from "../styles/Home.module.css";
import Categories from "../component/Categories";
import Product from "../component/product/Product";
import fetch from "isomorphic-unfetch";

function Home({ setCategories, setProduct }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Categories categories={setCategories} />
        <Product product={setProduct} />
      </main>
    </div>
  );
}

Home.getInitialProps = async () => {
  const res = await fetch(
    "https://testing.pogo91.com/api/online-store/category/?store_prefix=cake-shop"
  );
  const categories = await res.json();
  const setCategories = categories.category;

  const res1 = await fetch(
    "https://testing.pogo91.com/api/online-store/category/product/?store_prefix=cake-shop&page=1&category_id=0"
  );
  const product = await res1.json();
  const setProduct = product.products;

  return { setCategories, setProduct };
};

export default Home;

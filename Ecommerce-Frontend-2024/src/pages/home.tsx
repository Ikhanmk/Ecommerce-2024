import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
            <ProductCard
              productId={"wewewdw"}
              name={"Macbook"}
              price={12212}
              stock={500}
              handler={addToCartHandler}
              photo={"https://m.media-amazon.com/images/I/61RJn0ofUsL._SX522_.jpg"}
            />
      </main>
    </div>
  );
};

export default Home;

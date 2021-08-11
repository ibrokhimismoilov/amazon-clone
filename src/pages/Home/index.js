import React from "react";
import Banner from "../../components/Banner";
import Product from "../../components/Product";
import productImg from "../../assets/images/jpg/product4.jpg";

function Home() {
  return (
    <>
      <Banner />
      <div className="home auto-container">
        <div className="home__row">
          <Product
            id={1}
            title={"lorem ipsum dolor sit"}
            price={19.99}
            rating={5}
            img={productImg}
          />
          <Product
            id={2}
            title={
              "lorem ipsum dolor sit lorem ipsum dolor sitlorem ipsum dolor sit"
            }
            price={19.99}
            rating={2}
            img={productImg}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title={"lorem ipsum dolor sit"}
            price={19.99}
            rating={5}
            img={productImg}
          />
          <Product
            id={4}
            title={
              "lorem ipsum dolor sit lorem ipsum dolor sitlorem ipsum dolor sit"
            }
            price={19.99}
            rating={2}
            img={productImg}
          />
          <Product
            id={5}
            title={"lorem ipsum dolor sit"}
            price={19.99}
            rating={5}
            img={productImg}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title={
              "lorem ipsum dolor sit lorem ipsum dolor sitlorem ipsum dolor sit"
            }
            price={19.99}
            rating={2}
            img={productImg}
          />
        </div>
      </div>
    </>
  );
}

export default Home;

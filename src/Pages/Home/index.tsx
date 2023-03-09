import { useEffect, useState } from "react";
import { Header } from "../../Components/Header";
import { ProductItem } from "../../Components/ProductItem";
import { api } from "../../Services/api";
import { Container, Products, Spinner } from "./styles";

interface ProductType {
  id: number;
  title: string;
  price: number;
  image: string;
}

export function Home() {
  const [products, setProducts] = useState<ProductType | any>("");
  const [inCart, setInCart] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => setProducts(response.data));
    api.get('/cart').then(response => setInCart(response.data))
  }, []);

  function handleRefreshCart(){
    api.get('/cart').then(response => setInCart(response.data))
  }
  

  return (
    <Container>
      <Header qt={inCart.length} />
      {products === "" ? (
        <div className="load">
          <Spinner />
        </div>
      ) : (
        <Products>
          {products.map((prod: ProductType) => {
            return (
              <ProductItem
                key={prod.id}
                title={prod.title}
                price={prod.price}
                image={prod.image}
                id={prod.id}
                inCart={inCart}
                setQts={(v:any) => handleRefreshCart()}
              />
            );
          })}
        </Products>
      )}
    </Container>
  );
}

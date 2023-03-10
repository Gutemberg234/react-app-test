import { useEffect, useState } from "react";
import { CartProductItem } from "../../Components/CartProductItem";
import { Count } from "../../Components/Count";
import { Header } from "../../Components/Header";
import { api } from "../../Services/api";
import { Complete, Container, Empty, Products, Spinner } from "./styles";
import { MdDelete } from "react-icons/md";
import bgIMg from "../../Assets/Group 43.png";
import bgIMg2 from "../../Assets/Group 34.png";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

interface ProductType {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartProductType {
  id: number;
  title: string;
  price: number;
  image: string;
  qt: number;
  sub: number;
}

export function Cart() {
  const [inCart, setInCart] = useState<CartProductType | any>([]);
  const [total, setTotal] = useState(0);
  const [switchComplete, setSwitchComplete] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: `(max-width: 700px)` });

  useEffect(() => {
    api.get("/cart").then((response) => setInCart(response.data));
  }, []);

  function handleRefreshCart() {
    api.get("/cart").then((response) => setInCart(response.data));
  }

  function handleDelete(id: any) {
    api.delete(`/cart/${id}`).then((response) => {
      handleRefreshCart();
    });
  }

  function handleBackComplete() {
    setSwitchComplete(false);
    navigate("/");
  }

  function handleFinalize() {
    setSwitchComplete(true);

    inCart.map((item: CartProductType) => {
      api.delete(`/cart/${item.id}`).then((response) => {
        handleRefreshCart();
      });
    });
  }

  return (
    <Container>
      {inCart[0] ? (
        <>
          <Header qt={inCart.length} />
          {isMobile ? (
            <Products>
              <table>
                <tbody>
                  {inCart.map((prod: CartProductType) => {
                    return (
                      <tr key={prod.id}>
                        <td>
                          <div>
                            <img src={prod.image} alt="" />
                          </div>
                        </td>
                        <td>
                          <div>
                            <h2>{prod.title}</h2>
                          </div>{" "}
                          <br />
                          <Count
                            qt={prod.qt}
                            title={prod.title}
                            price={prod.price}
                            image={prod.image}
                            id={prod.id}
                            refresh={() => handleRefreshCart()}
                          />
                        </td>
                        <td className="td-mobile">
                          <div>
                            <h3>
                              {prod.price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </h3>
                            <button
                              className="delete"
                              onClick={() => handleDelete(prod.id)}
                            >
                              <MdDelete size={28} />
                            </button>
                          </div> <br />
                          <div>
                            <p>Subtotal</p>
                            <span>{prod.sub.toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={4}>
                      <div>
                        <span>Total</span>
                        <h4>
                          {inCart
                            .map((prod: CartProductType) => prod.sub)
                            .reduce((total: any, preco: any) => total + preco)
                            .toLocaleString("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            })}
                        </h4>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={4}>
                      <button onClick={() => handleFinalize()}>
                        Finalizar pedido
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </Products>
          ) : (
            <Products>
              <table>
                <thead>
                  <td>Produto</td>
                  <td>QTD</td>
                  <td>Subtotal</td>
                  <td></td>
                </thead>
                <tbody>
                  {inCart.map((prod: CartProductType) => {
                    return (
                      <tr key={prod.id}>
                        <td>
                          <div>
                            <img src={prod.image} alt="" />
                          </div>
                          <div>
                            <h2>{prod.title}</h2>
                            <h3>
                              {prod.price.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </h3>
                          </div>
                        </td>
                        <td>
                          <Count
                            qt={prod.qt}
                            title={prod.title}
                            price={prod.price}
                            image={prod.image}
                            id={prod.id}
                            refresh={() => handleRefreshCart()}
                          />
                        </td>
                        <td>
                          {prod.sub.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </td>
                        <td>
                          <button
                            className="delete"
                            onClick={() => handleDelete(prod.id)}
                          >
                            <MdDelete size={28} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <td>
                    <button onClick={() => handleFinalize()}>
                      Finalizar pedido
                    </button>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    <div>
                      <span>Total</span>
                      <h4>
                        {inCart
                          .map((prod: CartProductType) => prod.sub)
                          .reduce((total: any, preco: any) => total + preco)
                          .toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                      </h4>
                    </div>
                  </td>
                </tfoot>
              </table>
            </Products>
          )}
        </>
      ) : (
        <>
          <Header qt={0} />
          <div className="load">
            {switchComplete ? (
              <Complete>
                <h2>Compra realizada com sucesso</h2>
                <img src={bgIMg2} alt="" />
                <button onClick={() => handleBackComplete()}>Voltar</button>
              </Complete>
            ) : (
              <Empty>
                <h2>Parece que não há nada por aqui :(</h2>
                <img src={bgIMg} alt="" />
                <Link to="/">Voltar</Link>
              </Empty>
            )}
          </div>
        </>
      )}
    </Container>
  );
}

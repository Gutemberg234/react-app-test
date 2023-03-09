import { Container } from "./styles";
import { MdAddShoppingCart } from "react-icons/md";
import { api } from "../../Services/api";
import { useEffect, useState } from "react";

interface CartProductType {
  id: number;
  title: string;
  price: number;
  image: string;
  qt: number;
  sub: number
}

export function ProductItem(props: any) {
  const [qtAtual, setQtAtual] = useState(0);
  var inCart = props.inCart;

  useEffect(() => {
    let copyInCart = [...inCart];
    api.get('/cart').then(response => copyInCart = response.data)

    const item = copyInCart.find((product) => product.id === props.id);

    if (!item){
      return
    } else {
      setQtAtual(item.qt)
    }
  }, []);

  function handleAddToCart(id: any) {
    const copyInCart = [...inCart];

    const item = copyInCart.find((product) => product.id === id);

    if (!item) {
      const data = {
        id: props.id,
        title: props.title,
        price: props.price,
        image: props.image,
        qt: 1,
        sub: props.price,
      };
      api.post("/cart", data).then((response) => {
        setQtAtual(response.data.qt);
        props.setQts();
      });
    } else {
      const data = {
        id: props.id,
        title: props.title,
        price: props.price,
        image: props.image,
        qt: item.qt + 1,
        sub: props.price * (item.qt + 1),
      };
      api.put(`/cart/${item.id}`, data).then((response) => {
        setQtAtual(response.data.qt);
      });
    }
    props.setQts();
  }

  return (
    <Container>
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <h3>
        {props.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </h3>
      <button
        className={qtAtual > 0 ? "add" : ""}
        onClick={() => handleAddToCart(props.id)}
      >
        <span>
          <MdAddShoppingCart size={11.42} /> {qtAtual}
        </span>{" "}
        {qtAtual > 0 ? "Item Adicionado" : "Adicionar ao carrinho"}
      </button>
    </Container>
  );
}

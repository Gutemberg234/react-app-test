import { useState } from "react";
import { api } from "../../Services/api";
import { Contaier } from "./styles";
import { MdOutlineAddCircleOutline, MdOutlineRemoveCircleOutline } from 'react-icons/md';

export function Count(props: any) {
  const [qt, setQt] = useState(props.qt);

  function handleChangeManual(v: any) {
    const data = {
      id: props.id,
      title: props.title,
      price: props.price,
      image: props.image,
      qt: v,
      sub: props.price * v
    };
    api.put(`/cart/${props.id}`, data).then((response) => {
      setQt(response.data.qt);
      props.refresh();
    });
  }

  function handleReduceValue(v: any){
    const data = {
        id: props.id,
        title: props.title,
        price: props.price,
        image: props.image,
        qt: v - 1,
        sub: props.price * (v -1)
      };
      api.put(`/cart/${props.id}`, data).then((response) => {
        setQt(response.data.qt);
        props.refresh();
      });
  }

  function handleAddValue(v: any){
    const data = {
        id: props.id,
        title: props.title,
        price: props.price,
        image: props.image,
        qt: v + 1,
        sub: props.price * (v + 1)
      };
      api.put(`/cart/${props.id}`, data).then((response) => {
        setQt(response.data.qt);
        props.refresh();
      });
  }

  return (
    <Contaier>
      <button onClick={() => handleReduceValue(props.qt)}><MdOutlineRemoveCircleOutline size={18} /></button>
      <input
        type="text"
        value={qt}
        onChange={(e) => handleChangeManual(e.target.value)}
      />
      <button onClick={() => handleAddValue(props.qt)}><MdOutlineAddCircleOutline size={18} /></button>
    </Contaier>
  );
}

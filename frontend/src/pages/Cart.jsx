import { useLoaderData } from "react-router-dom";
// import { useContext } from "react";

function Cart() {
  const panier = useLoaderData();

  return <div>{panier}</div>;
}

export default Cart;

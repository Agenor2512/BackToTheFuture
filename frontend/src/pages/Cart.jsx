//import { useContext } from "react";
import CartDetails from "../components/CartDetails.jsx";
//import ThermesContext from "../contexts/ThermeContext.jsx";

function Cart() {
  // const selectedTherme = useContext(ThermesContext);

  // const calculCartSum = () => {
  //   return .reduce((accumulator, item) => accumulator + item.prix, 0);
  // };

  return (
    <>
      <h1>Mon Panier</h1>
      <CartDetails therme={cart} />
      <h2>Prix total :</h2>
      <h4>{/*calculCartSum()*/} euros</h4>
    </>
  );
}

export default Cart;

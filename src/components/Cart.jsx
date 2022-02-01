import React from "react";

const Cart = () => {
  return (
    <div className="shopping-cart">
      <h1>e-commerce site web</h1>
      <div className="maktoub">
      <h3>solde</h3>
        <p style={{color:"blue"}}>2000 €</p>
        <h3>PANIER</h3>
        <p style={{color:"blue"}}>0</p>
        <button className="commande">confirmer la commande</button>
      </div>
    </div>
  );
};

export default Cart;

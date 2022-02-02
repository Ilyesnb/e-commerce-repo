import "./App.css";
import Cart from "./components/Cart";
import Produit from "./components/Produit";

function App() {
  return (
    <div className="App">
      <Cart mony={2000+"€"} dinero={0+"€"} />
      <div className="container">
        <div className="macbook">
          <Produit apple="pc portable MacBook 2020" prix={122+"€"} />
          <Produit apple="pc portable MacBook 2020" prix={122+"€"} />
          <Produit apple="pc portable MacBook 2020" prix={122+"€"} />
        </div>
        <div className="iphone">
          <Produit apple="IPhone 12 RED" prix={122+"€"} />
          <Produit apple="IPhone 12 RED" prix={122+"€"} />
          <Produit apple="IPhone 12 RED" prix={122+"€"} />
        </div>
        <div className="galaxy">
          <Produit apple="Galaxy S21 Ultra" prix={80+"€"} />
          <Produit apple="Galaxy S21 Ultra" prix={80+"€"} />
          <Produit apple="Galaxy S21 Ultra" prix={80+"€"} />
        </div>
      </div>
    </div>
  );
}

export default App;

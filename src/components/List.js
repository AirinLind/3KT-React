import { useEffect, useState } from "react";
import Item from "./Item";

function List() {
  const [products, setProducts] = useState([]);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    };

    fetchData();
  }, []);

  return (
    <div className="list">
      {products.map((product) => (
        <Item
          id={product.id}
          title={product.title}
          image={product.images[0]}
          price={product.price + "$"}
          rating={Math.round(+product.rating)}
          deleteProduct={deleteProduct}
        />
      ))}
    </div>
  );
}

export default List;
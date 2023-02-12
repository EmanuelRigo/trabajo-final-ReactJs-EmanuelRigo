import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const pedido = fetch("../datosPeliculas.json");

    pedido
      .then((respuesta) => {
        const productos = respuesta.json();
        console.log(productos);
        return productos;
      })
      .then((productos) => {
        setProductos(productos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid-container">
      {productos.map((producto) => {
        return (
          <div key={producto.id} className="item">
            <div className={"genero"}>
              <p>{producto.genero}</p>
            </div>
            <div>
              <img className="img" src={producto.portada} alt="" />
            </div>
            <div className="nombre">
              <a href="">{producto.title}</a>
            </div>
            <button className="boton">comprar</button>
            <p className="precio">1000</p>
            <Link to={"/" + producto.id}>ver mas</Link>
          </div>
          /*<ItemList productos={productos}></ItemList>*/
        );
      })}
    </div>
  );
};

export default ItemListContainer;

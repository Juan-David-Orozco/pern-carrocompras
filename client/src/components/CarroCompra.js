import { useState } from "react";
import '/node_modules/font-awesome/css/font-awesome.css'

export default function CarroCompra(props) {

  const [ingreso, SetIngreso] = useState(props.ingreso)
  const [carroCompra, setCarroCompra] = useState(props.carroCompra)

  const eliminarCompra = (product) => {
    setCarroCompra(carroCompra.filter((compra) => compra.id !== product.id))
    props.deleteCarroCompra(product)
  }

  if(!ingreso){
    return(
      <>
      <div className="row">
        <div className="col-8 mx-auto">
          <p><i className="fa-solid fa-cart-shopping"></i></p>
          <div className="text-center">
            Inicia sesión para agergar tus productos
          </div>
        </div>
      </div>
      </>
    )
  } else {
    return (
      <>
        <h1>Carro de Compra</h1>
        <table className="table text-center table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Precio</th>
            </tr>
          </thead>
            <tbody>
              {
                carroCompra.map((compra) => (
                  <tr key={compra.id}>
                    <td> {compra.titulo} </td>
                    <td> {compra.contenido} </td>
                    <td> $ {new Intl.NumberFormat("de-DE").format(compra.precio)} </td>
                    <td>
                      <a
                        className="btn btn-danger btn-sm mx-3"
                        onClick={() => eliminarCompra(compra)}
                      >
                        Eliminar
                      </a>
                    </td>
                  </tr>
                ))
              }
            </tbody>
        </table>
      </>
    )
  }

}

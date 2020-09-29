import React, { useState, useEffect }from 'react';
import ContainerProductos from './components/ContainerProducts';
import ProductCounter from './components/ProductCounter';
import './App.scss';

const App = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
      fetch('json/products.json')
      .then(response => response.json())
      .then(data => {
          setproducts(data.products);
      });
  }, []);
  const [pedido, setpedido] = useState([]);
  const [precioTotal, setprecioTotal] = useState(0);

  const onIncrementClick = (event) => {
      const elemento = event.target.id;
      const numId = parseInt(elemento, 10);
      const sumandoContador =  pedido.map((dato) => {
          if(dato.id === numId){
              console.log(dato.id)
              dato.contador = dato.contador + 1;
          }
          return dato;
          });
      const precioT = sumandoContador.map((dato) => {
          const total = dato.contador*dato.precio;
          return total;           
      })
      let PrecioTo = 0;
      for(let i = 0; i< precioT.length; i++){
          PrecioTo = PrecioTo + precioT[i];
      }
      setpedido(sumandoContador);
      setprecioTotal(PrecioTo);
  }

  const onDecrementClick = (event) => {
      const elemento = event.target.id;
      const numId = parseInt(elemento, 10);
      const RestandoContador =  pedido.map((dato) => {
          if(dato.id === numId)
              dato.contador = dato.contador - 1;
          return dato;
          });
      const precioT = RestandoContador.map((dato) => { 
          if(dato.contador !== 0){
              const total = dato.contador*dato.precio; 
              return total;
          } else {
              const total = 0
              return total;
          }   
      })
      const eliminandoProducto = RestandoContador.filter((data) => {
          return data.contador !== 0; 
      });
      let PrecioTo = 0;
      for(let i = 0; i< precioT.length; i++){
          PrecioTo = PrecioTo + precioT[i];
      }   
      setpedido(eliminandoProducto);
      setprecioTotal(PrecioTo);
  }

  const obtenerPedido = (event) => {
      const idElemento = event.target.id;
      const numId = parseInt(idElemento, 10);
      let producto;
      for(let i=0; i<products.length; i++){
          if(numId === products[i].id)
              producto = products[i];
      }
      const obj = {
          id: producto.id,
          contador: 1,
          producto: producto.name,
          precio: producto.price.amount,
          monedaProducto: producto.price.currency,
          unidadDeMedida: producto.price.measureUnit,
      }
      const total =  precioTotal;
      setprecioTotal(total + producto.price.amount);
      setpedido([...pedido, obj]);
  } 

  const cancelarPedido = () => {          
      setpedido([]);
      setprecioTotal(0);
  }
  return (
      <div className='PaginaHome'>
          <div className='header'><span>Kosarica</span></div>
          <div className='cuerpoPagina'>
              <div className='productos'>
                  <section className='listaProductos'><span>Lista de productos</span></section>
                  <section className='mostradorPedidos'>
                      <ContainerProductos dataProductos={products} onClick={obtenerPedido}/>
                  </section>
              </div>
              <div className='contenedorPedido'>
                  <section className='descripcionPedido'>
                      <div className='descripcion'>
                          <div className='titulo'><span>Carrito de compras</span></div>
                          <div className='contenedorTabla'>
                              <table className='tabla'>
                                  <tbody>
                                      {pedido.map((item, key) => {
                                          return (
                                              <ProductCounter key={key}
                                                  idcontenedor={item.id}
                                                  increment={onIncrementClick}
                                                  decrement={onDecrementClick}
                                                  counter={item.contador}
                                                  nombre={item.producto}
                                                  precio={item.precio}
                                                  monedaProducto={item.monedaProducto}
                                                  unidadDeMedida={item.unidadDeMedida}
                                              />                        
                                          );   
                                      })}
                                  </tbody>
                              </table>
                          </div>   
                      </div>    
                      <div className='total'>Total: {parseFloat(Math.round(precioTotal* 100) / 100).toFixed(2)}</div>
                  </section>
                  <div className='botones'>
                      <button className='btnCancelar' onClick={cancelarPedido}>CANCELAR</button>
                      <button className='btnEnviar'>ENVIAR</button>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default App;

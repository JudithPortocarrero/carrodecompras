import React from 'react';
import ItemProduct from './ItemProduct';
import './styles/ContainerProducts.scss';

const ContainerProductos = ({ dataProductos, onClick }) => {
    const Productos = dataProductos;
    return (
        <div className='contenedorProducto'>
            {
                Productos && Productos !== undefined ? Productos.map((item,key) => {
                        return(
                            <ItemProduct key={key}
                                idProducto={item.id}
                                imageProducto={item.image}
                                nombreProducto={item.name}
                                precioProducto={item.price.amount}
                                monedaProducto={item.price.currency}
                                unidadDeMedida={item.price.measureUnit}
                                click={onClick}
                            />  
                        );  
                }):null
            }
        </div>
    );        
}  

export default ContainerProductos;
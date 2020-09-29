import React from 'react';
import './styles/ItemProduct.scss';

const ItemProduct = ({ idProducto, imageProducto, nombreProducto, precioProducto, monedaProducto, unidadDeMedida, click }) => {
    return (
        <div className='contenedorItemProducto'>
            <div className='contenedorImagen'><img className='imagenProducto' src={imageProducto} alt={nombreProducto}/></div>
            <div className='contenedorNombre'><p className='nombre'>{nombreProducto}</p></div>
            <div className='ContainerPrecio'><p className='precio'>{precioProducto} {monedaProducto}/{unidadDeMedida}</p></div>
            <button className='btnAgregarPrducto' id={idProducto} onClick={click}>Agregar al carrito</button>
        </div>
    )
}

export default ItemProduct;
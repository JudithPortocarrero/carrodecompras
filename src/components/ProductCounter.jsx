import React from 'react';
import './styles/ProductCounter.scss';

const ProductCounter = ({idcontenedor, increment, decrement, counter, nombre, precio, monedaProducto, unidadDeMedida }) => {
    return (
        <tr>
            <td className='controladorContador'>
                <button id={idcontenedor} className='btnContador' type='button' onClick={increment}>+</button>
                <strong>&nbsp;&nbsp;{counter}&nbsp;&nbsp;</strong>
                <button id={idcontenedor}  className='btnContador' type='button' onClick={decrement}>-</button>
            </td>
            <td>{nombre}</td>
            <td className='contPrecio'>{precio} {monedaProducto}/{unidadDeMedida}</td>
        </tr>
    );
}

export default ProductCounter;
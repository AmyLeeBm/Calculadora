import React from 'react';

const Resultado = ({total, cantidad, plazo}) => {
    return ( 
        <div className="resultado">
            <h2>Cotización:</h2>
            <p>La cantidad a pagar es: $ {cantidad}</p>
            <p>A paga en: $ {plazo} Meses</p>
            <p>Su pago mensual es de: $ {(total / plazo).toFixed(2)}</p>
            <p>Total a pagar: $ {(total.toFixed(2))}</p>
            <p>*Únicamente MSI bajo disponibilidad</p>
        </div>
    );
}
 
export default Resultado;
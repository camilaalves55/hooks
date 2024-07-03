import react, { useState } from 'react';

function Contador() {
    const [valor, setValor] = useState(0);

    let incrementar = () => {
      setValor(valor + 1);  
    }

    return (
        <>
            <div>
                <span>{valor}</span>
            </div>
           
            <button onClick={incrementar}>Incrementar</button>
        </>
    );
}

export default Contador;
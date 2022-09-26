import React from 'react';
import { useState } from 'react';

const Saludar = (props) => {

    const [nuevoMensaje, setNuevoMensaje] = useState(`Hello ${props.myFriend}!!`)

    const cambiarMensaje = ()=>{
        setNuevoMensaje(`Hello ${props.myFriend} (from changed state)!!`)
    }
   

    return (
        <section>
        <h1>Ejercicios 1 al 3</h1>
        <hr />
        <h2>Hello World!!</h2>
        <h2>Hello {props.myFriend}!!</h2> 
        <h2>{nuevoMensaje}</h2> 
        <button onClick={cambiarMensaje}>Click Me</button>
        </section>
    );
};

export default Saludar;
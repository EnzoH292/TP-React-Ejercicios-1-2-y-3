import React from 'react';
import { useState } from 'react';

const Saludar = (props) => {

    const [nuevoMensaje, setNuevoMensaje] = useState(`Hello ${props.myFriend}!!`)

    const cambiarMensaje = ()=>{
        console.log("Cambiando mensaje")
        setNuevoMensaje(`Hello ${props.myFriend} (from changed state)!!`)
    }
    // const mensajeAdicional = ()=>{
    //     console.log(props.mensajeAdicional)
    //     document.write(`<h2>Hello ${props.myFriend} ${props.mensajeAdicional}!!</h2>`)
    // }


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
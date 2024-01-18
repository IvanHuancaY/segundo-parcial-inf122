import React, { useState } from "react";
import '../style/Metas.css';
import Notas from '../components/Notas'


function Metas(){
    const [notas, setNotas] = useState([]);
    const [nuevaNota, setNuevaNota] = useState('');
    const agregarNota = () => {
        if (nuevaNota.trim() === '')return;
        setNotas([...notas, { id: Date.now(), texto: nuevaNota }]);
        setNuevaNota('');
    };


    const eliminarNota = (id) => {
        setNotas((prevNotas) => prevNotas.filter((notas) => notas.id !== id));
    };
    
    const editarNota = (id, nuevoTexto) => {
        setNotas((prevNotas) =>
            prevNotas.map((nota) => (nota.id === id ? { ...nota, texto: nuevoTexto } : nota))
        );
    };


    return(
        <div className="cont-prin">
            <h1>Mis metas</h1>
            <div >
                <div className="ini">
                <input className="agreg" 
                type="text"
                placeholder="Nueva Meta..."
                value={nuevaNota}
                onChange={(e) => setNuevaNota(e.target.value)}
                />
                <button className="bot" onClick={agregarNota} > Agregar</button>
                {notas.map((nota) => (
                <Notas
                    key={nota.id}
                    nota={nota}
                    onDelete={eliminarNota}
                    onEdit={agregarNota}
                />
                ))}
                <br/>
                    <div>
                        <input className="comp"
                        placeholder="Completadas"
                        />
                        <input className=" pend"
                        placeholder="Pendientes"
                        
                        />
                        </div>
            </div>
        </div>
        </div>
        
    );
}

export default Metas;
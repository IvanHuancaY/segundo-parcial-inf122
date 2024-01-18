import React, { useState } from 'react';
import '../style/Nota.css';

function Nota({ nota, onDelete, onEdit }) {
    const [editando, setEditando] = useState(false);
    const [nuevoTexto, setNuevoTexto] = useState(nota.texto);

    const handleGuardar = () => {
        onEdit(nota.id, nuevoTexto);
        setEditando(false);
    };

    return (
        <div>
            {editando ? (
                <div className='editar-nota'>
                    <textarea
                        value={nuevoTexto}
                        onChange={(e) => setNuevoTexto(e.target.value)}
                    />
                    <button onClick={handleGuardar}>Guardar</button>
                </div>
            ) : (
                <div className='contenedor-nota'>
                    <p className='nota'>{nota.texto}</p>
                    
                    <button  onClick={() => onDelete(nota.id)}></button>
                    <button  onClick={() => setEditando(true)}></button>
                </div>
            )}
        </div>
    );
}

export default Nota;
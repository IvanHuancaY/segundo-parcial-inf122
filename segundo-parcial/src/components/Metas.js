import React from "react";
import '../style/Metas.css';


function Metas(){
    return(
        <div>
            <h1>Mis metas</h1>
            <div >
                <div className="ini">
                <input className="agreg" 
                type="text"
                
                />
                <button className="bot" o > Agregar</button>
                </div>
                
                    <div className="segu"> 

                        <input className="comp"
                        
                        />
                        <input className=" pend"
                        
                        />
                    </div>
            </div>
        </div>
    );
}

export default Metas;
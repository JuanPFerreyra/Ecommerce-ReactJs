import { Link } from "react-router-dom"

export const Item = ({prod})=>{
    return(
        <div>
            <div className="card text-center">
                <div className="card-header">
                    {prod.nombre}
                </div>
                <div className="card-body">
                    {<img src={prod.imagen} alt="Prendas" widht={170}/>}
                </div>
                <div className="card-footer">
                    $ {prod.precio}
                </div>
                <div>
                    <Link to={`/detalle/${prod.id}`}>
                        <button>Ver detalle</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
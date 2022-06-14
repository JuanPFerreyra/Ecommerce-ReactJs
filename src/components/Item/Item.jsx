import babucha from '../../babucha.JPG';
import musculosa from '../../musculosa.JPG';
import mini from '../../mini.JPG';
import ItemCount from '../ItemCount/ItemCount';

let productos =[
    {
        id: 1,
        nombre: "Babucha Milan",
        precio: 822,
        imagen: babucha
    },
    {
        id: 2,
        nombre: "Musculosa Elhom",
        precio: 352,
        imagen: musculosa
      },
    {
        id: 3,
        nombre: "Mini Cruzada Lino",
        precio: 763,
        imagen: mini
    }
]

export const getFetch = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}

export const Item = ()=>{
    return(
        productos.map (prod => <div key={prod.id}>
                                            <div className="card text-center">
                                                <div className="card-header">
                                                    {prod.nombre}
                                                </div>
                                                <div className="card-body">
                                                    {<img src={prod.imagen} alt="Prendas" widht={170}/>}
                                                </div>
                                                <div className="card-footer">
                                                    {prod.precio}
                                                    {<ItemCount stock={5}/>}
                                                </div>
                                            </div>
                                        </div>
                )
    )
}
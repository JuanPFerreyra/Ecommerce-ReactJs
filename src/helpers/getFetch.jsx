import boca from '../imagenes/boca.JPG';
import blackout from '../imagenes/blackout.JPG';
import colorado from '../imagenes/colorado.JPG';
import magic from '../imagenes/magic.JPG';
import corte from '../imagenes/corte.JPG';
import mom from '../imagenes/mom.JPG';
import babucha from '../imagenes/babucha.JPG';
import engomado from '../imagenes/engomado.JPG';

let productos =[
    {
        id: 1,
        nombre: "Remera Clasica Boca",
        categoria: "Remeras",
        precio: 740,
        imagen: boca
    },
    {
        id: 2,
        nombre: "Remera Clasica Black Out",
        categoria: "Remeras",
        precio: 716,
        imagen: blackout
    },
    {
        id: 3,
        nombre: "Remera Colorado",
        categoria: "Remeras",
        precio: 458,
        imagen: colorado
    },
    {
        id: 4,
        nombre: "Remera Magic",
        categoria: "Remeras",
        precio: 352,
        imagen: magic
    },
    {
        id: 5,
        nombre: "Jean Corte",
        categoria: "Pantalones",
        precio: 1100,
        imagen: corte
    },
    {
        id: 6,
        nombre: "Jean Mom",
        categoria: "Pantalones",
        precio: 1300,
        imagen: mom
    },
    {
        id: 7,
        nombre: "Babucha Milan",
        categoria: "Pantalones",
        precio: 822,
        imagen: babucha
    },
    {
        id: 8,
        nombre: "Pantalon engomado",
        categoria: "Pantalones",
        precio: 900,
        imagen: engomado
    }
]

export const getFetch = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}
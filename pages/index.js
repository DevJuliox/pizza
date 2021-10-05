import { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import HomeCss from '../styles/Home.module.css'



export default function Home() {

  const [medidasPizza, setMedidasPizza] = useState(0);
  const [ingredientesAgregados, setIngredientesAgregados] = useState([]);


  const medidas = [
    {
      id: 1,
      medida: 'xs',
      precio: 90,
    },
    {
      id: 2,
      medida: 's',
      precio: 100,
    },
    {
      id: 3,
      medida: 'm',
      precio: 120,
    },
    {
      id: 4,
      medida: 'l',
      precio: 140,
    },
    {
      id: 5,
      medida: 'xl',
      precio: 150,
    },

  ]
  const ingredientes = [
    {
      id: 6,
      ingrediente: 'Tomate',
      precio: 10,
      imagen: '/images/tomato.png'
    },
    {
      id: 7,
      ingrediente: 'Carne',
      precio: 30,
      imagen: '/images/beef.png'
    },
    {
      id: 8,
      ingrediente: 'Queso',
      precio: 20,
      imagen: '/images/cheese.png'
    },
    {
      id: 9,
      ingrediente: 'Champiñon',
      precio: 15,
      imagen: '/images/mushroom.png'
    },
    {
      id: 10,
      ingrediente: 'Cebolla',
      precio: 10,
      imagen: '/images/onions.png'
    },
    {
      id: 11,
      ingrediente: 'Espinacas',
      precio: 35,
      imagen: '/images/spinach.png'
    },
  ]

  const seleccionarMedida = id => {
    console.log({ id })
    setMedidasPizza(id)
  }
  const agregarIngredientes = id => {
    const agregados = ingredientesAgregados.includes(id) ? ingredientesAgregados.filter(i => i !== id) : [...ingredientesAgregados, id]
    setIngredientesAgregados(agregados)
    console.log({ agregados })
  }

  return (
    <>

      <main className={HomeCss.main}>
        <header className={HomeCss.header}>
          <img className={HomeCss.flecha} src="/images/Arrow.svg" alt="" />
          <h1>Arma tu Pizza</h1>
        </header>
        <div className={HomeCss.imagenPrincipal}>
          <img src="/images/pizza2.png" />

        </div>
        <div className={HomeCss.medidas}>
          {

            medidas.map(item => {
              return (
                <div key={item.id} className={`${HomeCss.precios} ${medidasPizza == item.id && HomeCss.seleccionado}`} onClick={() => seleccionarMedida(item.id)} >
                  <div className={HomeCss.circulo} >
                    <h2>{item.medida}</h2>

                  </div>
                  <p>$ {item.precio}</p>
                </div>
              )
            })

          }
        </div>
        <div >
          <h2 className={HomeCss.subtitulo}>Ingredientes extras</h2>
          <div className={HomeCss.ingredientes}>

            {
              ingredientes.map(item => {
                return (
                  <div key={item.id} className={`${HomeCss.producto} ${ingredientesAgregados.includes(item.id) && HomeCss.seleccionado}`} onClick={() => agregarIngredientes(item.id)}>
                    <img src={item.imagen} />
                    <p>{item.ingrediente}</p>
                    <p>$ {item.precio}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className={HomeCss.cuerpoBoton}>
          <button className={HomeCss.boton}> Agregar a carrito - </button>
        </div>

      </main>


    </>
  )
}

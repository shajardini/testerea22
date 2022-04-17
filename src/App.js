import React from 'react'
import Primeiro from './componentes/basicos/Primeiro'
import ComParametro from './componentes/basicos/ComParametro'
import Fragmento from './componentes/basicos/Fragmento'
import NumeroAle from './componentes/basicos/NumeroAle'

export default function App(props) {
    return (
        <div>
            <h1> FUNDAMENTOS REACT</h1>
            <NumeroAle min={1} max={100}></NumeroAle>

            <Fragmento></Fragmento>

            <ComParametro titulo="Hoje é quinta feira!!" subtitulo='véspera de feriado!!'></ComParametro>
            <Primeiro></Primeiro>
            <ComParametro titulo="Título1" subtitulo='sub1'></ComParametro>
            <ComParametro titulo="Título2" subtitulo='sub2'></ComParametro >
            <ComParametro titulo='titulo3' subtitulo='sub3'></ComParametro>







        </div>
    )

}
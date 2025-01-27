import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function Calculadora() {
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)

  function alterarValor1(e: any) {
    setNumero1(+e.target.value)
  }

  function alterarValor2(e: any) {
    setNumero2(+e.target.value)
  }

  return (
    <Pagina titulo="Calculadora" subtitulo="Capitulo Estado">
      <div className="flex flex-col">
        <div className="flex gap-5 text-white">
          <input 
            type="number" 
            className="campo"
            value={numero1}
            onChange={alterarValor1}
          />

          <input 
            type="number" 
            className="campo"
            value={numero2}
            onChange={alterarValor2}
          />
          
        </div>
        <div className="flex flex-col">
            <span>{numero1} + {numero2} = {numero1 + numero2}</span>
            <span>{numero1} - {numero2} = {numero1 - numero2}</span>
            <span>{numero1} * {numero2} = {numero1 * numero2}</span>
            <span>{numero1} / {numero2} = {numero1 / numero2}</span>
        </div>
      </div>
      
    </Pagina>  
  )
}
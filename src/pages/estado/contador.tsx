import Pagina from "@/components/Pagina";
import '../../app/globals.css'
import { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function PaginaContador () {
  const [numero, setNumero] = useState(0)
  const [delta, setDelta] = useState(1)

  function incrementarDelta(){
    setDelta(delta + 1)
  }

  function decrementarDelta(){
    setDelta(delta - 1)
  }

  function incrementar(){
    setNumero(numero + delta)
  }

  function decrementar(){
    setNumero(numero - delta)
  }

  return (
    <Pagina titulo="Contador" subtitulo="Capitulo Estado">
        
        <div className="flex flex-col justify-center items-center
        w-full h-full text-zinc-100 gap-5">
          <span className="text-7xl font-black">{numero}</span>

          <div className="flex gap-5">
            <button onClick={incrementar} className="bg-blue-500 p-2 rounded-full">
              <IconPlus/>
            </button>

            <button onClick={decrementar} className="bg-blue-500 p-2 rounded-full">
              <IconMinus/>
            </button>
          </div>

          <div className="flex gap-4">
            <button onClick={incrementarDelta} className="flex justify-center items-center bg-purple-500 p-2 rounded-full w-9 h-9">
              <IconPlus size={16}/>
            </button>
            <span>{delta}</span>
            <button onClick={decrementarDelta} className="flex justify-center items-center bg-purple-500 p-2 rounded-full w-9 h-9">
              <IconMinus size={16}/>
            </button>
          </div>
          
        </div>
    </Pagina>
  )
}
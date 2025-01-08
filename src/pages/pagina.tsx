import '../app/globals.css'

import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Menu from '@/components/menu';
import Rodape from "@/components/Rodape";

export default function Pagina() {
  const ano = new Date().getFullYear()
  return (
    <div className={`
      flex flex-col h-screen p-5 gap-5
      bg-black text-white
    `}>
      <Cabecalho titulo='Minha Página' subtitulo='Estou na pasta pages'/>
      <div className='flex flex-1 gap-5'>
        <Menu/>
        
        <Conteudo>
          <button className="bg-blue-500 p-2 rounded-md">Teste</button>
        </Conteudo>
      </div>
      
      <Rodape textoEsquerdo='Criado com ❤️ por: Miquéias Mesquita' textoDireito={`Desenvolvido em ${ano}`}/>
    </div>
  )
}
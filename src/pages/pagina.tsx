import '../app/globals.css'

import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Rodape from "@/components/Rodape";

export default function Pagina() {
  const ano = new Date().getFullYear()
  return (
    <div className={`
      flex flex-col h-screen p-5 gap-5
      bg-black text-white
    `}>
      <Cabecalho titulo='Minha Página' subtitulo='Estou na pasta pages'/>
      <Conteudo>
        <ul>
          <li>Joao</li>
          <li>Ana</li>
          <li>Lili</li>
        </ul>
      </Conteudo>
      <Rodape textoEsquerdo='Criado com ❤️ por: Miquéias Mesquita' textoDireito={`Desenvolvido em ${ano}`}/>
    </div>
  )
}
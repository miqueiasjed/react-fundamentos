import Cabecalho from "@/components/Cabecalho"
import Conteudo from "@/components/Conteudo"
import Rodape from "@/components/Rodape"

export default function Page() {
  return (
    <div className={`
      flex flex-col gap-4 p-4
    `}>
      <Cabecalho titulo='Minha Aplicação' subtitulo = 'Melhor Aplicação WEB'/>
     
      <Conteudo>
        <ul>
          <li>Joao</li>
          <li>Ana</li>
          <li>Lili</li>
        </ul>
      </Conteudo>
      
      <Rodape textoEsquerdo='Criado com ❤️ por: Miquéias Mesquita' textoDireito={`Desenvolvido em ${new Date().getFullYear()}`}/>
    </div>
  )
}
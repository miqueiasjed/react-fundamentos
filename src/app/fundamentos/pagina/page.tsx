import Cabecalho from "@/components/Cabecalho"
import Conteudo from "@/components/Conteudo"
import Rodape from "@/components/Rodape"

export default function Page() {
  return (
    <div className={`
      flex flex-col gap-4 p-4
    `}>
      <Cabecalho/>
      <Conteudo/>
      <Rodape/>
    </div>
  )
}
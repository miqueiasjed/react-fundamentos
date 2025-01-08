
import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Menu from '@/components/menu';
import Rodape from "@/components/Rodape";

export default function Pagina(props: any) {
  return (
    <div className='flex h-screen p-5 gap-4'>
      <Menu/>
      <div className='flex flex-col flex-1 gap-4'>
        <Cabecalho titulo={props.titulo} subtitulo={props.subTitulo}/>
          
        <Conteudo>
          {props.children}
        </Conteudo>

        <Rodape textoEsquerdo='Criado com ❤️ por: Miquéias Mesquita' textoDireito={`Desenvolvido em ${new Date().getFullYear()}`}/>
      </div>
    </div>
  )
}
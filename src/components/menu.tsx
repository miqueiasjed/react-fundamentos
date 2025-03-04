import { IconBraces, IconCalculator, IconCode, IconFileCheck, IconForms, IconFunction, IconH1, IconNumbers, IconSitemap } from "@tabler/icons-react";
import MenuItem from "./menuItem";

export default function Menu() {
  return (
    <div className={`
      flex flex-col justify-start w-72
      text-3xl p-2 gap-2
    `}>
        <span className="text-sm text-zinc-500 pl-3 pt-4">Estado</span>
        <MenuItem icon={<IconCode />} texto='Componente sem estado' url="/estado/sem"/>
        <MenuItem icon={<IconCode />} texto='Componente com estado' url="/estado/com"/>
        <MenuItem icon={<IconNumbers />} texto='Contador' url="/estado/contador"/>
        <MenuItem icon={<IconForms />} texto="Campo de Texto" url="/estado/campoTexto" />
        <MenuItem icon={<IconCalculator />} texto="Calculdaora" url="/estado/calculadora" />

        <span className="text-sm text-zinc-500 pl-3 pt-4">Fundamentos</span>
        <MenuItem icon={<IconBraces />} texto='JSX com JS' url="/fundamentos/soma"/>
        <MenuItem icon={<IconFunction />} texto='JSX Chamando Funções' url="/fundamentos/funcoes"/>
        <MenuItem icon={<IconFileCheck />} texto='Página #1' url="/fundamentos/pagina"/>
        <MenuItem icon={<IconSitemap />} texto='Página #2' url="/pagina"/>
        <span className="text-sm text-zinc-500 pl-3 pt-4">Componentes</span>
        <MenuItem icon={<IconCode />} texto='Componente Basico' url="/components/basico"/>
        <MenuItem icon={<IconH1 />} texto='Componente Título' url="/components/titulo"/>
    </div>
  )
}
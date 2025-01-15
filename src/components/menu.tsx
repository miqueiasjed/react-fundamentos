import { IconBraces, IconCode, IconFileCheck, IconFunction, IconH1, IconSitemap } from "@tabler/icons-react";
import MenuItem from "./menuItem";

export default function Menu() {
  return (
    <div className={`
      flex flex-col justify-start w-72
      text-3xl p-2 gap-2
    `}>
        <span className="text-sm text-zinc-500 pl-3 pt-4">Estado</span>
        <MenuItem icon={<IconCode />} texto='Componente sem estado' url="/estado/sem"/>

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
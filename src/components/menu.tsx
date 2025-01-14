import { IconBraces, IconCode } from "@tabler/icons-react";
import MenuItem from "./menuItem";

export default function Menu() {
  return (
    <div className={`
      flex flex-col justify-start w-72
      text-3xl p-2 gap-2
    `}>
        <MenuItem icon={<IconCode />} texto='Basico' url="/components/basico"/>
        <MenuItem icon={<IconCode />} texto='Título' url="/components/titulo"/>
        <MenuItem icon={<IconCode />} texto='Página 1' url="/fundamentos/pagina"/>
        <MenuItem icon={<IconBraces />} texto='Página 2' url="/pagina"/>
    </div>
  )
}
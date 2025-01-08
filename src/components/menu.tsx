import MenuItem from "./menuItem";

export default function Menu() {
  return (
    <div className={`
      flex flex-col justify-start items-center w-52
      bg-zinc-700 rounded-lg text-3xl p-2
    `}>
        <MenuItem texto='Página 1'/>
        <MenuItem texto='Página 2'/>
    </div>
  )
}
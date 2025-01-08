export default function Conteudo(props: any) {
  return (
    <div className={`
      flex items-start flex-1 p-4
      bg-emerald-500 text-3xl rounded-lg
    `}>
      {props.children}
    </div>
  )
}
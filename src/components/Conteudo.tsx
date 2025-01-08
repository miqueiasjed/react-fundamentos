export default function Conteudo(props: any) {
  return (
    <div className={`
      flex justify-center items-center flex-1
      bg-emerald-500 text-3xl rounded-lg
    `}>
      {props.children}
    </div>
  )
}
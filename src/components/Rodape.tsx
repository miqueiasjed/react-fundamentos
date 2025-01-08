export default function Rodape(props: any) {
  return (
    <div className={`
    flex justify-between items-center
    h-26 rounded-lg text-3xl px-10
    bg-cyan-600
    `}>
        <span>{props.textoEsquerdo}</span>
        <span>{props.textoDireito}</span>
    </div>
  )
}
export default function Cabecalho(props: any) {
  console.log(props)
  return (
    <div className={`
      flex flex-col justify-center items-center h-30
      bg-purple-500 rounded-lg ${props.className ?? ''}
    `}>
      <h1 className="text-3xl font-black">{props.titulo}</h1>
      <h2>{props.subtitulo}</h2>
    </div>
  )
}
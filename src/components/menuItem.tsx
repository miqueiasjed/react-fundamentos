export default function MenuItem(props: any) {
  return (
    <div className={`
      flex items-center gap-4
      px-4 py-2 text-base w-full rounded-md
      hover:bg-zinc-900
    `}>
      {props.texto}
    </div>
  )
}
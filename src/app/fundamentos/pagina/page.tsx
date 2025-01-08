import Pagina from "@/components/Pagina";

export default function Page() {
  return (
    <Pagina titulo='Meu titulo' subTitulo='Pagina do APP'>
      <ul className="list-disc pl-8">
        <li>Maria</li>
        <li>Joao</li>
        <li>Jose</li>
      </ul>
    </Pagina>    
  )
}
import Pagina from '@/components/Pagina'
import '../app/globals.css'

export default function TestPagina() {
  return (
    <Pagina titulo='Minha Página' subTitulo='Estou na Pagas Pages'>
      <button className='bg-blue-500 p-2 rounded-md'>
        Teste
      </button>
    </Pagina>
  )
}
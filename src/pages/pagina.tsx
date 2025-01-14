import Pagina from '@/components/Pagina'
import '../app/globals.css'

export default function TestPagina() {

  function executar() {
    console.log('botão foi clicado')
  }

  return (
    <Pagina titulo='Minha Página' subTitulo='Estou na Pagas Pages'>
      <button 
        onClick={executar}
        className='bg-blue-500 p-2 rounded-md'>
        Teste
      </button>
    </Pagina>
  )
}
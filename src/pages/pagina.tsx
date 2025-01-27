import Pagina from '@/components/Pagina'

export default function TestPagina() {

  function executar() {
    console.log('botão foi clicado')
  }

  return (
    <Pagina titulo='Minha Página' subTitulo='Estou na Pagas Pages'>
      <button 
        onClick={executar}
        className='botao'>
        Teste
      </button>
    </Pagina>
  )
}
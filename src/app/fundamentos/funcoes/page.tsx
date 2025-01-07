export default function Page() {
  function renderizarTitulo() {
    return (
      <div>
        <h1>Título</h1>
        <h2>Sub Título</h2>
      </div>
    )
  }

  function renderizarConteudo() {
    return (
      <ul>
        <li>Ana</li>
        <li>Carla</li>
        <li>Zico</li>
      </ul>
    )
  }
  
  return (
    <div>
      {renderizarTitulo()}
      <hr />
      {renderizarConteudo()}
    </div>
  )
}
describe('Validação da Tabela de Repositórios na tela de Detalhes', () => {
  it('Deve validar a presença e a ordem exata das colunas da tabela', () => {
    cy.acessarPaginaDetalhesPrimeiroItem();

    const colunasEsperadas = [
      '#',
      'Nome', 
      'Descrição', 
      'Linguagem', 
      'Ultima Atualização', 
      'Dono'
    ]

    cy.validarColunasTabela('table', colunasEsperadas);
  })
})
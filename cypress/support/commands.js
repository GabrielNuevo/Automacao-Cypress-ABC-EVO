// Comandos reutilizáveis

// Função para acessar a página de Detalhes (do primeiro item da tabela)
Cypress.Commands.add('acessarPaginaDetalhesPrimeiroItem', () => {
  cy.visit('/')
  cy.get('table').contains('a', 'Detalhe')
    .first()
    .scrollIntoView()
    .click({ force: true });
    
  cy.url().should('include', '/Home/Details/');
});

// Função para validar as colunas de uma tabela, garantindo que estejam presentes e na ordem correta
Cypress.Commands.add('validarColunasTabela', (seletorTabela, colunasEsperadas) => {
  // Localiza a tabela e seus cabeçalhos
  cy.get(`${seletorTabela} thead th`).then(($ths) => {
    // Transforma a lista de elementos em um array de textos sem espaços extras
    const colunasNaTela = Array.from($ths).map(el => el.innerText.trim());

    // Realiza uma validação rigorosa (comparando conteúdo, ordem e quantidade)
    expect(colunasNaTela).to.deep.equal(colunasEsperadas);
  });
});
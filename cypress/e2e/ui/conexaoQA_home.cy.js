describe('página inicial', () => {
    
    beforeEach(() => {
        cy.visit('/')    
    })

    it('valida o título da página inicial', () => {
        cy.contains('Conectando')
            .should('have.text', 'Conectando QAs ...')
            .and('have.class', 'x-large')
    })

    it('seleciona um elemento passando um seletor', () => {
        cy.contains('h1', 'QAs')
            .should('have.text', 'Conectando QAs ...')
    })

    it('seleciona um elemento com filter', () => {
        cy.get('a')
            .filter('.btn-primary')
            .should('have.text', 'Cadastrar')
            .click('left')

        // Os seletores abaixo, selecionam o botão Cadastrar
        // cy.get('a.btn-primary')
        // cy.contains('a', 'Cadastrar')

        cy.get('a')
            .eq(2)
            .should('have.text', 'Sobre')
            .click()
    })

    it.only('seleciona um elemento com find', () => {
        
        cy.get('.landing-inner')
            .find('h1')

        cy.get('.landing-inner h1')  
    })
})
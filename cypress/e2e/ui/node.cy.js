describe('Testes do cypress .config.js', () => {
    

    it('conta o total de arquivos da pasta API', () => {
        
        cy.task('lerPasta', 'cypress/e2e/api')
        .then((totalArquivos) => {
            expect(totalArquivos).to.eq(2)
        })
    })

    // erro porque o browser não consegue executar fs
    it.skip('conta o total de arquivos da pasta UI', () => {
        cy.log(fs.reddirSync('cypress/e2e/ui').length)
    })

    it('valida a conexao com o mongo', () => {
        cy.task('conectarMongo')
        
        // .then(resultadoDaQuery => {
        //    expect(resultadoDaQuery[0].name.to.eq('Humberto))
        // })
    })
})
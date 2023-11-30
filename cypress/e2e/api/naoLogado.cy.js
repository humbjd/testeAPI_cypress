describe('API - Profile', () => {

    let urlPerfis = 'api/profile'    

    // DRY - Don't Repeat Yourself
    context('Todos os perfis', () => {
        it('Valida a API de perfis', () => {
            
            cy.log('Teste de texto')

            cy.request({
                method: 'GET', // chama a API
                url: urlPerfis // acessa a url
            }).then(respostaAPI => {
                expect(respostaAPI.status).to.eq(200) // verifica o status
                // verifica o tempo de resposta da API se é menos de 10 segundos no caso
                expect(respostaAPI.duration).to.be.lessThan(10000) 
                expect(respostaAPI.body[0].status).to.eq('Gerente de Testes')
                expect(respostaAPI.body[0].user.name).to.eq('Pedro Guerra')
                expect(respostaAPI.body[0].skills[0]).to.eq('Cypress')
                expect(respostaAPI.body[0].skills).to.have.lengthOf(1)
                expect(respostaAPI.body[0].date).to.not.be.null
                expect(respostaAPI.headers['x-powered-by']).to.eq('Express')
            })
        });
    })

    context('Perfil específico', () => {

        let urlPerfil = '/api/profile/user'
        
        it.only('seleciona um usuário inválido', () => {
            cy.request({
                method:'GET',
                url:`${urlPerfil}/1`, 
                failOnStatusCode: false
            }).then(respostaAPI => {
                expect(respostaAPI.status).to.eq(404)
                expect(respostaAPI.duration).to.be.lessThan(6000)
                expect(respostaAPI.body.errors[0].msg).to.eq('Perfil não encontrado')
            })
        })

        it('usuário válido', () => {
            let usuarioId = '637d72b11fb5cb0015a02258'

            cy.request({
                method: 'GET',
                url: `${urlPerfil}/${usuarioId}`
            }).then(respostaAPI => {
                expect(respostaAPI.status).to.eq(200)
                expect(respostaAPI.body.user.name).to.eq('Pedro Guerra')

            })
        })

        it('Valida um usuário válido buscando na base', () => {
            
            
            cy.request({
                method: 'GET',
                url: urlPerfis
            }).then(({ body }) => {
                
                cy.request({
                    method: 'GET',
                    url: `${urlPerfil}/${body[1].user._id}`
                }).then(({ status, body }) => {
                    expect(status).to.eq(200)
                    expect(body.status).to.eq('Outro')
                })
            })
        })
    })

    
});
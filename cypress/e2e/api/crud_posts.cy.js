// Teste de CRUD - significado Create - Read - Update - Delete
describe('CRUD - Posts', () => {
    
    before(() => {
        
        cy.request({
            method: 'POST',
            url: '/api/auth',
            body: {
                email:'testeiterasys@iterasys.com',
                password: '123456'
            }
        })
    })

    it('teste', () => {
        cy.log('teste')
    })
})
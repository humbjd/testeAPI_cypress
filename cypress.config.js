// eslint-disable-next-line
const { defineConfig } = require("cypress");
const fs = require('fs')
const mongoose = require('mongoose')

module.exports = defineConfig({
    e2e: {
        viewportHeight: 1080,
        viewportWidth: 1920,
        baseUrl: 'http://localhost:3000',

        
        setupNodeEvents(on, config) {
            // implement node event listeners here

            on('task', {
                lerPasta(caminho) {
                    return fs.readdirSync(caminho).length
                },
                
                conectarMongo(usuarioId) {

                    try {
                        // faça o que está aqui e se der erro, faça o que está no catch
                        mongoose.connect(config.env.enderecoBanco, {
                            useNewUrlParser: true,
                            useUnifiedTopology: true,
                            useCreateIndex: true,
                            useFindAndModify: false
                        })
                        
                        console.log('Conexão estabelecida com o banco de dados')
                        console.log(usuarioId)
                        
                        // fazer o select
                        // const resultado = mongoose.select('select * from users where usuarioId = ${usuarioId}')

                        // return resultado

                    } catch (err) {
                        console.log(err)
                    }

                    return null
                }       
            })  
        },
    },
});

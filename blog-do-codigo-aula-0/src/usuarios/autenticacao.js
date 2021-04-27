const bcrypt = require('bcrypt')
const { InvalidArgumentError } = require('../erros');
const Usuario = require('./usuarios-modelo');

function verifcaUser(user){
    if(!user){
        throw new InvalidArgumentError('Não existe usuário com este email.')
    }
}

async function verificaSenha(senha, senhaHash){
    const validaSenha = await bcrypt.compare(senha, senhaHash)
    if(!validaSenha){
        throw new InvalidArgumentError('Email ou senha inválidos.')
    }
}

module.exports = async function autenticacao(email, senha){
    const user = await Usuario.buscaPorEmail(email)
    verifcaUser(user)
    await verificaSenha(senha, senha.senhaHash)

    return user
}

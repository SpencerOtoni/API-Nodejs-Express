import query from '../database'

class Tabelas {
    init() {
        this.criarAtendimento()
        this.criarPets()
        console.log('tabela')
    }

    criarAtendimento() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(11) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        query.executaQuery(sql)
            .then(console.log('Tabela Atendimentos criada com sucesso'))
            .catch(erro => console.log(erro))
    }

    criarPets(){
        const sql = 'CREATE TABLE IF NOT EXISTS Pets(id int NOT NULL AUTO_INCREMENT, PRIMARY KEY(id), nome varchar(50), imagem varchar(200))'

        query.executaQuery(sql)
            .then(console.log('Tabela Pets criada com sucesso'))
            .catch(erro => console.log(erro))
    }
}

export default new Tabelas()
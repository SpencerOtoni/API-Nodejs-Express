class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarAtendimento()
        this.criarPets()
    }

    criarAtendimento() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Atendimentos criada com sucesso')
            }
        })
    }

    criarPets(){
        const sql = 'CREAT TABLE IF NOT EXISTS Pets(id int NOT NULL AUTO_INCREMENT, PRIMARY KEY(id), nome varchar(50), imagem varchar(200))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Pets criada com sucesso')
            }
        })
    }
}

export default new Tabelas()
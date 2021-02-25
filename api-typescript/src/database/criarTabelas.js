import tabelaFornecedor from '../app/models/Fornecedor';

tabelaFornecedor
    .sync()
    .then(() => console.log('Tabela criada com sucesso'))
    .catch(console.log)
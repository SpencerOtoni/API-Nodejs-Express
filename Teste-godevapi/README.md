<div align="center">
    <h1 align="center"> Desafio de código Backend NodeJS </h1>
</div>

<br />

<p align="center">
  <a href="#computer-project">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-get-in-touch">Entre em contato</a>
  </p>

## :computer: Projeto

<p align="justify">
Projeto desenvolvido para o teste de desenvolvimento backend NodeJS da
DevApi. </p>
<p align="justify">
O projeto foi desenvolvido utilizando o Express, visto que é o framework que tenho maior conhecimento
e comecei a estudar o NestJs as pouco tempo, por isso me senti mais confortavel em desenvolver o
projeto com ele. </p>

## :rocket: Construído com

Este projeto foi desenvolvido com as seguintes tecnologias:

<details>
  <summary>Backend</summary>

-   Node.js
-   Express
-   JWT
-   Bcrypt
-   Express-async-errors
-   Mongodb
-   Mongoose
-   Multer
-   yup
-   Dotenv
-   Cors
-   VS Code

</details>

### Backend

Para executar o projeto, instale as dependências.

```bash
# navegue até a pasta de backend
$ cd Backend
# instale as dependências de backend
$ yarn ou npm install
```

```bash
# run api
$ yarn dev
```

<p align="justify">
A API possui controle de sessão através de um token JWT, na qual possibilita a divisão das rotas em rotas públicas e privadas. Sendo que as rotas publicação podem ser acessadas sem o token em quanto as privadas não podem ser acessadas sem um token válido.  </p>

<br />
<h3> Rotas públicas </h3>

| Método | Rota     | Função                       | Campos obrigatórios                                                                   | Descrição                                                                                      |
| ------ | -------- | ---------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| POST   | /user    | Cadastra um usuário          | name, email e password                                                                | Antes de cadastrada um usuário é verificado se o email informado já foi cadastrado.            |
| PUT    | /user    | Atualiza os dados do usuário | Se existir oldPassword os campos password e confirPassword passam a ser obrigatórios. | Verifica se a senha confere com a salva no banco e se o email informado já não foi cadastrado. |
| POST   | /session | Faz login na aplicação       | email e password                                                                      | Verifica se usuário existe e se a senha confere com a salva no banco.                          |

<br />
<h3> Rotas privadas </h3>

| Método | Rota           | Função                                                                                   | Campos obrigatórios                                       | Descrição                                                                                                                                 |
| ------ | -------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | /connectors    | Traz todos os conectores cadastrados                                                     |                                                           | Busca todos os conectores sem criteiro para a busca.                                                                                      |
| POST   | /connector     | Cadastra um conector                                                                     | name, category, description, type, privacy e file(imagem) | Antes de cadastrar o conector verifica se o conector informado já foi cadastrado, levando em consideração os campos name , type , privacy |
| GET    | /connector     | Traz os conectores levando em consideração os campos os name , type , privacy , category |                                                           | Busca todos os conectores através dos filtros (name , type , privacy , category) passados pelos query params.                             |
| GET    | /connector/:id | Traz um único conector                                                                   |                                                           | Busca os dados de um conector pelo seu id.                                                                                                |

| PUT | /connector/:id | Atualiza os dados de um conector| | Verifica se o conector informado já foi cadastrado, levando em consideração os campos name , type , privacy antes de atualizar os dados. |
| DELETE | /connector/:id | Altera o estado do conector para ativo ou inativo| | Verifica se o conector existe e altera o seu estado. |

##: Entre em contato!

<a href="https://www.linkedin.com/in/spencer-otoni-desenvolvedor/" target="_blank" >
  <img alt="Linkedin - Stefano Saffran" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>&nbsp;&nbsp;&nbsp;
<a href="mailto:sspencerotoni@gmail.com" target="_blank" >
  <img alt="Email - Stefano Saffran" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a>

---

Feito com: ☕ and ❤️ by por Spencer Otoni

## Overview
Movie API
Esta aplicação é uma API backend desenvolvida com o framework NestJS para gerenciar o cadastro e autenticação de usuários, além de permitir a busca de filmes e atores. A API foi projetada para ser eficiente e escalável, oferecendo uma base sólida para operações relacionadas a dados de usuários e informações de filmes.

## Funcionalidades Principais
Cadastro de Usuários: Permite que novos usuários sejam registrados no sistema.
Autenticação de Usuários: Fornece funcionalidade de login para que os usuários possam acessar o sistema com segurança.
Busca de Filmes: Oferece endpoints para buscar filmes por diferentes critérios, como título ou gênero.
Busca de Atores: Possibilita a pesquisa de atores e suas respectivas filmografias.
Tecnologias Utilizadas
NestJS: Framework Node.js utilizado para construção do backend.
TypeScript: Linguagem de programação utilizada para desenvolvimento do código.
TypeORM: Ferramenta ORM para interagir com o banco de dados.
Passport e JWT: Utilizados para a autenticação de usuários.
MySQL/PostgreSQL: Banco de dados utilizados para armazenamento de informações.
Axios: Biblioteca para realizar chamadas HTTP a serviços externos.

## Como Iniciar o Projeto Localmente

## Passo a Passo

Clone o Repositório:

Comece clonando o repositório em sua máquina local. Use o comando abaixo no terminal:

```bash
git clone https://github.com/NathanPyRP/Movies.git
```

Após clonar o repositório, navegue até o diretório do projeto:

```bash
cd seu-repositorio
```
Instale as Dependências:

Antes de iniciar a aplicação, é necessário instalar todas as dependências do projeto. Execute o seguinte comando:

```bash
npm install
```

Isso irá instalar todas as bibliotecas e pacotes necessários para rodar a aplicação.

Configure as Variáveis de Ambiente:

Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias para a aplicação, como as credenciais do banco de dados. Um exemplo de conteúdo do arquivo .env pode ser:

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua-senha
DB_DATABASE=movie_api
JWT_SECRET=seu-segredo-jwt

Rodar as Migrações (se necessário)

npm run typeorm migration:run

Inicie a Aplicação:

```bash
npm run start:dev
```

## Endpoints

Pesquisa por nome: http://localhost:3000/movies/search?q=inception

Filmes recomendados: http://localhost:3000/movies/top_rated

Filmes por intervalo de data: http://localhost:3000/movies/by-date-range?start=01/01/2023&end=02/01/2023

Cadastro de usuários: http://localhost:3000/auth/register

Login de Usuário: http://localhost:3000/auth/login

Busca Atores populares: http://localhost:3000/movies/people/popular

Faz alterações no usuário: http://localhost:3000/users/id

Deleta usuário: http://localhost:3000/users/id


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

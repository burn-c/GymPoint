<h1 align="center">
  <img alt="GymPoint" title="GymPoint" src="./frontend/src/assets/logo.png" width="200px" />
</h1>

---

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/burn-c/goeat-api?color=red">

  <img alt="License" src="https://img.shields.io/badge/licence-MIT-red">
  
   <a href="https://www.linkedin.com/in/carlosoliveiradev/">
    <img alt="Made by Carlos Oliveira" src="https://img.shields.io/badge/made%20by-carlos%20oliveira-red">
  </a>

  <a href="https://github.com/burn-c/goeat-api/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/burn-c/goeat-api?style=social">
  </a>
</p>

<p align="center">
  <a href="#instalação-e-executar">Instalação e executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#frontend--acesso-para-administradores-">Frontend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mobile--acesso-para-alunos-">Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<hr>

## Backend

### Instalação e executar

1. Clonar repositório:

```sh
git clone git@github.com:burn-c/GymPoint.git
```
2. Instalar as dependências utilizando o comando:

a. Acessar diretório `/backend`

```sh
yarn
```

2. Configurar acesso Postgres `backend/src/config/database.js` e Redis `backend/src/config/redis.js` ( Docker ).

  a. Criar tabelas:

```sh
yarn sequelize db:migrate
```

  b. Criar usuário ADMIN:

```sh
yarn sequelize db:seed:all
```
Obs: Dados de login do ADMIN:

e-mail: admin@gympoint.com

senha: 123456

3. Executar o projeto:

```sh
yarn start
```
## Frontend ( Acesso para Administradores )

1. Instalar as dependências utilizando o comando:

a. Acessar diretório `/frontend`

```sh
yarn
```

2. Executar o projeto:

```sh
yarn start
```
3. Com os dados de ADMIN agora você tem acesso a aplicação Web para administrar os alunos, planos, matrícula e pedidos de auxílio.

## Mobile ( Acesso para alunos )

1. Instalar as dependências utilizando o comando:

a. Acessar diretório `/backend`

```sh
yarn
```

2. Executar o projeto ( recomendado emulação via Genymotion ):

a. Instalar app no emulador:

```sh
react-native run-android
```
a. Executar app:

```sh
react-native start
```

3. Com ID do aluno você consegue logar no app e fazer check-ins e enviar pedidos de auxílio.

---

Found an error? Do you have any tips? Send you pull request! I will be very happy to receive it! 😁

Made with 🔥 by Carlos ( BurN  ) 

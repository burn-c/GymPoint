<h1 align="center">
  <img alt="GymPoint" title="GymPoint" src="./frontend/src/assets/logo.png" width="200px" />
</h1>

<h3 align="center">
Aplicação de administração de academia!
</h3>
<h5 align="center">
  Feito com ReactJS | React Native | Node.js
</h5>




<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/burn-c/goeat-api?color=red">

  <img alt="License" src="https://img.shields.io/badge/licence-MIT-red">
  
   <a href="https://www.linkedin.com/in/carlosoliveiradev/">
    <img alt="Made by Carlos Oliveira" src="https://img.shields.io/badge/made%20by-carlos%20oliveira-red">
  </a>

  <a href="https://github.com/burn-c/goeat-api/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/burn-c/GymPoint?style=social">
  </a>
</p>

<p align="center">
  <a href="#---instalar-e-executar">Instalar e executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-backend">Backend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-frontend--acesso-para-administradores-">Frontend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-mobile--acesso-para-alunos-">Mobile</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<hr>

<h1 align="center">
  ⚙ Instalar e executar
</h1>


## 🎛 Backend

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
## 🖥 Frontend ( Acesso para Administradores )

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

## 📱 Mobile ( Acesso para alunos )

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

## 🛠 Tecnologias

O projeto foi desenvolvido com as seguintes tecnologias:

-  [Node.js](https://nodejs.org/)
-  [ReactJS](https://reactjs.org/)
-  [React Native](https://facebook.github.io/react-native/)
-  [Redux](https://redux.js.org/)
-  [Redux-Saga](https://redux-saga.js.org/)
-  [Redux-persist](https://github.com/rt2zz/redux-persist)
-  [@rocketseat/unform](https://github.com/Rocketseat/unform)
-  [Styled-components](https://www.styled-components.com/)
-  [React-toastify](https://github.com/fkhadra/react-toastify)
-  [React Navigation](https://reactnavigation.org/)
-  [React-icons](https://react-icons.netlify.com/)
-  [Axios](https://github.com/axios/axios)
-  [Reactotron](https://infinite.red/reactotron)
-  [Immer](https://github.com/immerjs/immer)
-  [Polished](https://polished.js.org/)
-  [Yup](https://www.npmjs.com/package/yup)
-  [Bee-queue](https://github.com/bee-queue/bee-queue)
-  [Date-fns](https://date-fns.org/)
-  [Prop-types](https://www.npmjs.com/package/prop-types)
-  [ESLint](https://eslint.org/)
-  [Prettier](https://prettier.io/)
-  [VS Code](https://code.visualstudio.com/)

---

Encontrou algum erro ? Tem alguma dica ? Enviei uma pull request! Ficarei feliz em receber! 😁

Made with 🔥 by Carlos Oliveira ( BurN  ) - [My linkedin!](https://www.linkedin.com/in/carlosoliveiradev/)

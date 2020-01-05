# GymPoint
Projeto de conclusão do curso GoStack 9 

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

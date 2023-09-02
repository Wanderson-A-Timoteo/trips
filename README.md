Criar o projeto

```bash
npx create-next-app --use-yarn trips
```

Adicionar o Prisma ORM como dependência de desenvolvimento

```bash
yarn add -D prisma
```

Iniciar o Prisma com datasource PostgreSQL

```bash
npx prisma init --datasource-provider postgresql
```

Adicionar Prettier

```bash
yarn add -D prettier
```

Iniciar uma migrate do Prisma executando o que foi definido para o banco de dados em schema.prisma

```bash
npx prisma migrate dev --name init
```

Adicionar o NextAuth no projeto.
[Saiba mais](https://next-auth.js.org/getting-started/example)

```bash
yarn add next-auth
```

Adicionar o adapter do Prisma para o NextAuth, pois ele já tem o schema pronto para controle de autenticação. [Saiba mais](https://authjs.dev/reference/adapter/prisma)

```bash
yarn add @auth/prisma-adapter
```

Após adicionar os schemas para a autenticação com NextAuth é preciso executar a migrate novamente

```bash
npx prisma migrate dev --name auth
```

Adicionar novos campos countryCode e recommended no banco de dados.

```bash
npx prisma migrate dev --name add_country_code_and_recommended
```

Visualizar banco de dados com Prisma Studio, após executar é só acessar a url que será mostrada no terminal.

```bash
npx prisma studio
```

Adicionar biblioteca de icones do ReactJS

```bash
yarn add react-icons
```

Adicionar tailwind-merge para definir a estilização dos componentes Input, para que ao adicionar outros estilos nos componentes que ele é chamado, estes estilos definidos não sejam sobrescritos.

```bash
yarn add tailwind-merge
```

Adicionar biblioteca react-datepicker para criar calendario e fns uma lib para manipular datas

```bash
yarn add react-datepicker date-fns
yarn add -D @types/react-datepicker
```

Adicionar lib para formatar valores BR

```bash
yarn add react-currency-input-field
```

Adicionar ts-node para executar o seed.ts que contém o script para popular o banco de dados.(ts-node executa TypeScript diretamente em Node.js sem pré-compilação)

```bash
yarn add ts-node
```

É preciso adicionar o script a seguir no package.json para o ts-node executar o seed.ts

```bash
"prisma": {
  "seed": "ts-node --compiler-options #{\"module\":\"CommonJS\"} --transpile-only src/lib/seed.ts"
},
```

Após adicionar o script acima no arquivo package.js podemos executar o comando para popular o banco de dados

```bash
npx prisma db seed
```

Após executar o comando acima ocorreu erro, passei um tempinho para descobrir que era devido no arquivo tsconfig.json o "moduleResolution": "bundle", após alterar para "Node", funcionou. Certifique-se que estas propriedades a seguir estejam iguais ao exemplo:

```bash
"compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "esModuleInterop": true,
    "moduleResolution": "Node",
    .
    .
    . o restante permanece igual
```

Instalar lib para adicionar as bandeirinhas do país de origem do hotel/pousada entre outros.

```bash
yarn add react-country-flag
```

Adicionar novo campo locationDescription no banco de dados, após adicionar poderemos visualizar com Prisma Studio.

```bash
npx prisma migrate dev --name add_location_description
```

Adicionado lib React Hook Form para validar fomulários.

```bash
yarn add react-hook-form
```

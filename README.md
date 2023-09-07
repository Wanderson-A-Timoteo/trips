Criar o projeto

```bash
npx create-next-app --use-yarn trips
```

Adicionar o **_Prisma ORM_** como dependência de desenvolvimento

```bash
yarn add -D prisma
```

Iniciar o Prisma com **_Datasource PostgreSQL_**

```bash
npx prisma init --datasource-provider postgresql
```

Adicionar **_Prettier_**

```bash
yarn add -D prettier
```

Iniciar uma **_migrate_** do Prisma executando o que foi definido para o banco de dados em **_schema.prisma_**

```bash
npx prisma migrate dev --name init
```

Adicionar o **_NextAuth_** no projeto.
[Saiba mais](https://next-auth.js.org/getting-started/example)

```bash
yarn add next-auth
```

Adicionar o **_Adapter_** do Prisma para o **_NextAuth_**, pois ele já tem o schema pronto para controle de autenticação. [Saiba mais](https://authjs.dev/reference/adapter/prisma)

```bash
yarn add @auth/prisma-adapter
```

Após adicionar os schemas para a autenticação com **_NextAuth_** é preciso executar a migrate novamente

```bash
npx prisma migrate dev --name auth
```

Adicionar novos campos **_countryCode_** e **_recommended_** na tabela Trip.

```bash
npx prisma migrate dev --name add_country_code_and_recommended
```

Visualizar banco de dados com **_Prisma Studio_**, após executar é só acessar a url que será mostrada no terminal.

```bash
npx prisma studio
```

Adicionar biblioteca **_React Icons_** para icones do ReactJS

```bash
yarn add react-icons
```

Adicionar **_Tailwind Merge_** para definir a estilização dos componentes **_Input_**, para que ao adicionar outros estilos nos componentes que ele é chamado, estes estilos definidos não sejam sobrescritos.

```bash
yarn add tailwind-merge
```

Adicionar biblioteca **_React Datepicker_** para criar calendario e **_fns_** uma lib para manipular datas

```bash
yarn add react-datepicker date-fns
yarn add -D @types/react-datepicker
```

Adicionar lib **_React Currency Input Field_** para formatar valores BR

```bash
yarn add react-currency-input-field
```

Adicionar **_ts-node_** para executar o seed.ts que contém o script para popular o banco de dados.(**_ts-node_** executa TypeScript diretamente em Node.js sem pré-compilação)

```bash
yarn add ts-node
```

É preciso adicionar o script a seguir no **_package.js_** para o **_ts-node_** executar o seed.ts

```bash
"prisma": {
  "seed": "ts-node --compiler-options #{\"module\":\"CommonJS\"} --transpile-only src/lib/seed.ts"
},
```

Após adicionar o script acima no arquivo **_package.js_** podemos executar o comando para popular o banco de dados

```bash
npx prisma db seed
```

Após executar o comando acima ocorreu erro, passei um tempinho para descobrir que era devido no arquivo tsconfig.json o **_"moduleResolution": "bundle"_**, após alterar para "**_Node_**", funcionou. Certifique-se que estas propriedades a seguir estejam iguais ao exemplo:

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

Instalar lib **_React Country Flag_** para adicionar as bandeirinhas do país de origem do hotel/pousada entre outros.

```bash
yarn add react-country-flag
```

Adicionar novo campo **_locationDescription_** na tabela Trip, após adicionar poderemos visualizar com Prisma Studio.

```bash
npx prisma migrate dev --name add_location_description
```

Adicionar lib **_React Hook Form_** para validar formulários.

```bash
yarn add react-hook-form
```

Adicionar novo campo **_guests_** na tabela TripReservation, após adicionar poderemos visualizar com Prisma Studio.

```bash
npx prisma migrate dev --name add_guests_to_reservation
```

Adicionar lib **_React Toastify_**

```bash
yarn add react-toastify
```

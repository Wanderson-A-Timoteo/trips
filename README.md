This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

First, run the development server:

```bash
# Criar o projeto
npx create-next-app --use-yarn trips

# Adicionar o Prisma ORM como dependência de desenvolvimento
yarn add -D prisma

# Iniciar o Prisma com datasource PostgreSQL
npx prisma init --datasource-provider postgresql

# Adicionado Prettier
yarn add -D prettier

# Inicia uma migrate do Prisma executando o que foi definido para o banco de dados em schema.prisma
npx prisma migrate dev --name init

# Adicionado o NextAuth no projeto
# https://next-auth.js.org/getting-started/example
yarn add next-auth

# Adicionado o adapter do Prisma para o NextAuth, pois ele já tem o schema pronto para controle de autenticação
# https://authjs.dev/reference/adapter/prisma
yarn add @auth/prisma-adapter

# Após adicionar os schemas para a autenticação com NextAuth é preciso rodar a migrate novamente
npx prisma migrate dev --name auth

# Visualizar banco de dados com Prisma Studio
npx prisma studio
```

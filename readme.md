- É necessário criar o schema que será o seu model do banco de dados (vide exemplo do user-schema nesse projeto), depois rode o `npm run db:generate` para gerar o sql;
- Com o sql em mãos, rode o comando `npm run db:push` criar a tabela no banco de dados (você ainda pode manipular o sql depois de gerado antes de enviar para o banco).
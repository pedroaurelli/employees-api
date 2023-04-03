# API de funcionários com NestJS
API de funcionários, meu primeiro contato com o framework NestJS, injenção de dependência e decorators. Principal objetivo com esse projeto é, adquirir uma base sólida de como o framework funciona, e assim, indentificando divergências entre uma API criada com Express e em NestJS.

## Dependências:
Package | Descrição
--- | ---
[NestJS](https://docs.nestjs.com/) |  Framework Node.js
[TypeScript](https://www.typescriptlang.org/) | Superset JavaScript
[Prisma](https://www.prisma.io/) | ORM
[Jest](https://jestjs.io/pt-BR/) | Framework para testes em JavaScript
[Class validator](https://www.npmjs.com/package/class-validator) | Validação das propriedades com decorators
[UUID](https://www.npmjs.com/package/uuid) | Gerar identificadores únicos


## Requisitos:

[X]
Cadastro de funcionários: A API deve permitir que os funcionários possam se cadastrar, fornecendo nome, email, senha.

[X]
Busca de funcionários: A API deve permitir que possam buscar informações sobre outros funcionários cadastrados no sistema.

[X]
Edição de funcionários: A API deve permitir que possam editar suas informações de perfil, como nome, email e senha.

[X]
Exclusão de funcionários: A API deve permitir que possam excluir suas contas do sistema.

[X]
Autenticação: A API deve permitir que os funcionários possam se autenticar para ter acesso aos recursos protegidos. (JWT).

[  ]
Recuperação de senha: A API deve permitir que os funcionários possam recuperar suas senhas caso tenham esquecido. Isso pode ser feito enviando um link de redefinição de senha para o email do usuário.

[  ]
Segurança: A API deve ser protegida contra ataques, como ataques de injeção de SQL ou XSS. Para isso. (Helmet).

[  ]
Documentação: A API deve ser documentada para permitir que outros desenvolvedores possam integrá-la facilmente em seus projetos. Ferramentas como o Swagger ou o Postman para documentar a API.

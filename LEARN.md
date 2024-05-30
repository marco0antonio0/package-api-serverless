
# Package Project for development serverless with api express and deploy in netlify

Package base para utilizar no desenvolvimento de apis

## Estrutura do Projeto

```plaintext
example/
├── src/
│   ├── app/
│   │   ├── hello/
│   │   │   ├── hello.controller.ts
│   │   │   └── hello.service.ts
│   │   └── app.module.ts
│   └── index.ts
├── node_modules/
├── package.json
├── tsconfig.json
└── README.md
```

## Como Utilizar

Este projeto é uma API simples criada com Express e TypeScript, utilizando uma estrutura modular para facilitar a escalabilidade e manutenção.

### Pré-requisitos

- Node.js instalado
- npm (gerenciador de pacotes do Node.js)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/marco0antonio0/package-api-serverless
   cd package-api-serverless
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

### Estrutura de Pastas

- `src/`: Contém o código fonte do projeto
  - `app/`: Contém os módulos da aplicação
    - `hello/`: Exemplo de módulo com um controlador e um serviço
      - `hello.controller.ts`: Define as rotas do módulo hello
      - `hello.service.ts`: Define a lógica de negócios do módulo hello
    - `app.module.ts`: Configura o aplicativo e suas rotas
  - `index.ts`: Ponto de entrada principal da aplicação

### Como Iniciar o Projeto

Para iniciar o projeto em modo de desenvolvimento (com auto-reload):

```bash
npm run dev
```

Para compilar o TypeScript e rodar o projeto em produção:

```bash
npm run build
npm start
```

### Fazendo Alterações

1. **Adicionar uma nova rota**:
   - Crie um novo diretório dentro de `src/app/` para o seu módulo.
   - Adicione os arquivos de controlador e serviço para a nova funcionalidade.
   - Importe e use o novo controlador no `app.module.ts`.

2. **Exemplo de novo módulo**:

   - Crie um diretório `newModule` dentro de `src/app/`:

     ```plaintext
     src/app/newModule/
     ├── newModule.controller.ts
     └── newModule.service.ts
     ```

   - **newModule.controller.ts**:

     ```typescript
     import express from 'express';
     import { newModuleService } from './newModule.service';

     const router = express.Router();

     router.get('/', (req, res) => {
         const message = newModuleService.getMessage();
         res.send(message);
     });

     export const newModuleController = router;
     ```

   - **newModule.service.ts**:

     ```typescript
     const getMessage = () => {
         return 'Hello from new module!';
     };

     export const newModuleService = { getMessage };
     ```

   - Adicione o novo módulo ao `app.module.ts`:

     ```typescript
     import { newModuleController } from './newModule/newModule.controller';

     export const AppModule = (app: Application) => {
         app.use(express.json());
         // Adicione suas rotas aqui
         app.use('/api/hello', helloController);
         app.use('/api/new', newModuleController);
     };
     ```

3. **Executar o Projeto**:

   Após fazer suas alterações, execute o projeto em modo de desenvolvimento para testar:

   ```bash
   npm run dev
   ```

### Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.

---

Este é um guia básico para iniciar e trabalhar com este projeto. Para mais detalhes sobre o uso de Express, TypeScript e outras tecnologias usadas aqui, consulte a documentação oficial de cada uma delas.

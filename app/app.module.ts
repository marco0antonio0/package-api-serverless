import { Application } from 'express';
import { helloController } from './hello/hello.controller';
import express from 'express';

export const AppModule = (app: Application) => {
    app.use(express.json());
    // adicione suas rotas aqui
    app.use('/api/hello', helloController);
};

import { App } from './app';

const app = new App().server

app.listen(3333, ()=> {
    console.log('on-line')
});
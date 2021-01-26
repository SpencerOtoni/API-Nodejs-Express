import { resolve } from 'path'
import fs from 'fs'

const path = resolve(__dirname, '..', '..', 'tmp', 'uploads')

fs.createReadStream(`${path}/bg-intro.jpg`)
    .pipe(fs.createWriteStream(`${path}/bg-intro2.jpg`))
    .on('finish', () => console.log('Imagem foi escrita com sucesso'))
import { resolve } from 'path'
import fs from 'fs'

const uploadDeArquivo = (caminho, nomeDoArquivo, callbackImagemCriada) => {
    const path = resolve(__dirname, '..', '..', 'tmp', 'uploads')

    fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(`${path}/${nomeDoArquivo}`))
    .on('finish', () => callbackImagemCriada(`${path}/${nomeDoArquivo}`))
}


export default uploadDeArquivo


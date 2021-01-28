import { resolve, extname } from 'path'
import fs from 'fs'

const uploadDeArquivo = (caminho, nomeDoArquivo, callbackImagemCriada) => {

    const tipo = extname(caminho)
    const nomeComTipo = `${nomeDoArquivo}${tipo}`

    const path = resolve(__dirname, '..', '..', 'tmp', 'uploads')

    fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(`${path}/${nomeComTipo}`))
    .on('finish', () => callbackImagemCriada(`${path}/${nomeComTipo}`))
}


export default uploadDeArquivo


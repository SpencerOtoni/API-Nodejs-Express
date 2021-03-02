import { Transporter } from "nodemailer"
import nodemailer from 'nodemailer'
import { resolve } from   'path'
import exphbs from 'express-handlebars'
import nodemailerhbs from 'nodemailer-express-handlebars'

import mailConfig from '../config/mail'

class SendMailService {
    private client : Transporter
    constructor(){
        const { host, port, secure, auth } = mailConfig

        this.client = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: auth.user ? auth : null
        })

        this.configTemplates()
    }

    configTemplates(){
        const viewPath = resolve(__dirname, '..', 'views', 'email');

        this.client.use(
            'compile',
            nodemailerhbs({
              viewEngine: exphbs.create({
                layoutsDir: resolve(viewPath, 'layouts'),
                partialsDir: resolve(viewPath, 'partials'),
                defaultLayout: 'default',
                extname: '.hbs',
              }),
              viewPath,
              extName: '.hbs',
            })
          );
    }

    async sendMail(message: object){
        return this.client.sendMail({
            ...mailConfig.default,
            ...message
        })
    }
}

export default new SendMailService()
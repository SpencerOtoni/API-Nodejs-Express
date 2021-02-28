import 'dotenv'
import SendMailService from '../services/SendMailService'

class SendMail{
    get key(){
        return 'SendMail'
    }

    async handle({ data }) {
        const { email, title, name, description, id } = data

        await SendMailService.sendMail({
            to: `${email}`,
            subject: `${title}`,
            template: 'npsMail',
            context: {
                name,
                title,
                description,
                link: process.env.URL_MAIL,
                id,
            }
        })
    }
}

export default new SendMail()
import 'dotenv'
import SendMailService from '../services/SendMailService'

class SendMail{
    get key(){
        return 'SendMail'
    }

    async handle({ data }) {
        const { email, title, name, description, link, id } = data

        await SendMailService.sendMail({
            to: `${email}`,
            subject: `${title}`,
            template: 'npsMail',
            context: {
                name,
                title,
                description,
                link,
                id,
            }
        })
    }
}

export default new SendMail()
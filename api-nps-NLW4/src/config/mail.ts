interface IMailConfig {
    host: string;
    port: number;
    secure: boolean;
    auth: {
        user: string;
        pass: string;
    };
    default: {
      from: string;
    };
  }


export default {
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false,
    auth: {
        user: "0a700572a145f2",
        pass: "51af5abba13e46"
  },
  default: {
      from: 'Equipe NPS <noreply@nps.com>'
  }
} as IMailConfig
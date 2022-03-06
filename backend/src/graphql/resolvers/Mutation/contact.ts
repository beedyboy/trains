import mailTemplate from "../../../templates/contact";
import mailer from "../../../helpers/mailer";
import accessEnv from "../../../helpers/accessEnv";

const CLIENT_EMAIL_SUBJECT = accessEnv("CLIENT_EMAIL_SUBJECT");
const contact = {
  contactUs: async (parent: any, { data }: { data: any }) => {
    const { name, email, subject } = data;
    let clientOptions = {
      email: email,
      subject: CLIENT_EMAIL_SUBJECT.replace("{{SUBJECT}}", subject),
      message: mailTemplate.client(name),
    };

    // console.log( {clientOptions});
    await mailer.sendEmail(clientOptions);
    return { message: "Mail sent" };
    // return await db.Blog.create({ title, content, slug, images });
  },
  serviceQuote: async (parent: any, { data }: { data: any }) => {
    const { name, email, subject } = data;
    let clientOptions = {
      email: email,
      subject: CLIENT_EMAIL_SUBJECT.replace("{{SUBJECT}}", subject),
      message: mailTemplate.client(name),
    };

    // console.log( {clientOptions});
    await mailer.sendEmail(clientOptions);
    return { message: "Mail sent" };
    // return await db.Blog.create({ title, content, slug, images });
  },
};
export default contact;

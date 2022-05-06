import { IMailAdapter, SendMailData } from "../IMailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "be266352e79130",
    pass: "0e62945aca020b",
  },
});

export class NodemailerMailAdapter implements IMailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <nlw-return@feedget.com>",
      to: "Elen Carvalho <elen.cdeoliveira@gmail.com>",
      subject,
      html: body,
    });
  }
}
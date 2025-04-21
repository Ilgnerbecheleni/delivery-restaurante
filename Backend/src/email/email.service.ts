/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Client, SendEmailV3_1, LibraryResponse } from 'node-mailjet';

@Injectable()
export class EmailService {
  private mailjet: Client;

  constructor() {
    this.mailjet = new Client({
      apiKey: process.env.MJ_APIKEY_PUBLIC,
      apiSecret: process.env.MJ_APIKEY_PRIVATE,
    });
  }

  async sendMail(to: string, subject: string, text: string, html?: string) {
    const data: SendEmailV3_1.Body = {
      Messages: [
        {
          From: {
            Email: 'ilgner_becheleni@hotmail.com', // Substitua pelo seu email
            Name: 'Users', // Substitua pelo seu nome ou nome da sua aplicação
          },
          To: [
            {
              Email: to,
              Name: 'Usuario', // Opcional: Substitua pelo nome do destinatário
            },
          ],
          Subject: subject,
          TextPart: text,
          HTMLPart: html || '', // Pode usar HTML opcionalmente
        },
      ],
    };

    try {
      const result: LibraryResponse<SendEmailV3_1.Response> = await this.mailjet
        .post('send', { version: 'v3.1' })
        .request(data);

      console.log('Email sent:', result.body.Messages[0].Status);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}





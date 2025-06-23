import mailjet from 'node-mailjet';
import { PRIVATE_MAILJET_APIKEY, PRIVATE_MAILJET_SECRETKEY } from '$env/static/private';

export const sendVerificationEmail = async (email: string, url: string, username: string):Promise<boolean> => {
	const mailClient = new mailjet.Client({
		apiKey: PRIVATE_MAILJET_APIKEY,
		apiSecret: PRIVATE_MAILJET_SECRETKEY
	});

	const request = mailClient.post('send', { version: 'v3.1' }).request({
		Messages: [
			{
				From: {
					Email: 'pawel@warmuth.dev',
					Name: 'noreply@Shutterscape.de'
				},
				To: [
					{
						Email: email,
						Name: username
					}
				],
				TemplateID: 7096425,
				TemplateLanguage: true,
				Subject: 'Shutterscape: Verify your Account',
				Variables: {
					confirmation_link: url,
					customer_name: username
				}
			}
		]
	});

    const requestResult = await request;
    return requestResult.response.status === 200;
};

import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { COOKIE_NAME } from '$lib/constants';


export const actions = {
	default: async ({ request, cookies, locals }) => {
		const data = await request.formData();
		if (data.has('email') && data.has('password')) {
			try {
				const client = getAppwriteClient();
				const account = new Account(client);
				const user = await account.createEmailPasswordSession(data.get('email') as string, data.get('password') as string);
				console.log('User logged in:', user);
				cookies.set(COOKIE_NAME, user.$id, { path: '/', secure: true, sameSite: 'lax' });
				console.log('Logged in' , locals.username);
			} catch (error) {
				console.error(error);
				return { error: 'Invalid credentials' };
			}
			return redirect(302, '/');
		}
	}
} satisfies Actions;

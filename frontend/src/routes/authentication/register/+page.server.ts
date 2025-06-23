import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { signUp } from '$lib/services/auth';

export const actions = {
	default: async ({ request }) => {
		console.log('Registering user...');
		const data = await request.formData();
		if (
			data.has('email') &&
			data.has('password') &&
			data.has('name') &&
			data.has('passwordConfirm') &&
			data.get('password') === data.get('passwordConfirm')
		) {
			try {
				const req = {
					email: data.get('email'),
					emailVisibility: true,
					name: data.get('name'),
					password: data.get('password'),
					passwordConfirm: data.get('passwordConfirm')
				};
		    const signupResult = await signUp.email({
				email: req.email as string,
				name: req.name as string,
				password: req.password as string
			});
			
			if(signupResult.error) {
				console.error('Registration failed:', signupResult.error);
				return { error: signupResult.error };
			}

			} catch (error) {
				console.error('Registration failed:', error);
				return { error: 'Registration failed' };
			}
			return redirect(302, '/');
		} else {
			console.error('Invalid form data:', data);
			return { error: 'Not all data is filled ' };
		}
	}
} satisfies Actions;

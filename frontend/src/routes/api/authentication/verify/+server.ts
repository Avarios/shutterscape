import type { RequestHandler } from './$types';
import { verifyEmail } from '$lib/services/auth'

export const GET: RequestHandler = async ({ url }) => {
	const token = url.searchParams.get('token');
	
	if (!token) {
		return new Response('Missing activation ID', { status: 400 });
	}
 //http://localhost:5173/authentication/verify?token=eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Indhcm11dGgucGF3ZWxAZ21haWwuY29tIiwiaWF0IjoxNzUwNzAzOTY2LCJleHAiOjE3NTA3MDc1NjZ9._jAyYp68tDXxaXedAdiRaWmu7AbhoLfJqpzjaW9yHV0
	try {
		verifyEmail({
			query: {
				token
			}
		})	
		return new Response('User activated successfully', { status: 200 });
	} catch (error) {
		console.error('Activation error:', error);
		return new Response('Activation failed', { status: 500 });
	}
};
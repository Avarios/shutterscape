import { betterAuth } from 'better-auth';
import { createAuthClient} from 'better-auth/svelte'

import { Pool } from 'pg';
import { PRIVATE_DATABASE_URL } from '$env/static/private';
import { sendVerificationEmail } from './mailService';
import { PUBLIC_APP_URL } from '$env/static/public';

export const auth = betterAuth({
	database: new Pool({
		connectionString: PRIVATE_DATABASE_URL
	}),
	emailAndPassword: { enabled: true, minPasswordLength: 8, requireEmailVerification: true },
	emailVerification: {
		sendOnSignUp: true,
        sendVerificationEmail: async ( { user , token }) => { 
            await sendVerificationEmail(user.email, `${PUBLIC_APP_URL}/authentication/verify?token=${token}`,  user.name);
		}           
	}
});

const client = createAuthClient({
	baseURL: PUBLIC_APP_URL,
});
export const { signIn, signUp, useSession, verifyEmail } = client;
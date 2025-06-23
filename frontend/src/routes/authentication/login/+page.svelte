<script lang="ts">
	import Button from '$lib/components/Buttons/Button.svelte';
	import Google from '$lib/icons/google.svelte';
	import Instagram from '$lib/icons/instagram.svelte';
	import Facebook from '$lib/icons/facebook.svelte';
	import Amazon from '$lib/icons/amazon.svelte';
	//TODO: Globale Error Handling
	let { email, password } = $state({ email: '', password: '' });
</script>

<div class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
	<div class="w-full max-w-sm rounded-lg bg-white p-8 shadow-md">
		<h2 class="text-center text-2xl font-bold text-gray-700">Login</h2>
		<form class="mt-6" method="POST">
			<div>
				<div class="block text-sm font-medium text-gray-700">Email</div>
				<input
					name="email"
					bind:value={email}
					type="email"
					class="mt-2 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
					placeholder="Enter your email"
					required
				/>
			</div>
			<div class="mt-4">
				<div class="block text-sm font-medium text-gray-700">Password</div>
				<input
					name="password"
					bind:value={password}
					type="password"
					class="mt-2 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
					placeholder="Enter your password"
					required
				/>
			</div>
			<Button class={'mt-4 w-full px-4 py-2'} isPrimary={true} disabled={!(email && password)}
				>Login</Button
			>
		</form>
		<div class="mt-6 text-center">
			<p class="text-gray-600">Or login with</p>
			<div class="mt-3 grid grid-cols-2 gap-2">
				<Button class={'flex h-10 items-center justify-center p-1'} isPrimary={false}
					><Google class="h-5 w-5" />Google</Button
				>
				<Button class={'flex h-10 items-center justify-center p-1'} isPrimary={false}
					><Facebook class="h-5 w-5" />Facebook</Button
				>
				<Button class={'flex h-10 items-center justify-center p-1'} isPrimary={false}
					><Instagram class="h-5 w-5" />Instagram</Button
				>
				<Button class={'flex h-10 items-center justify-center p-1'} isPrimary={false}
					><Amazon class="h-5 w-5" />Amazon</Button
				>
			</div>
		</div>
	</div>
</div>

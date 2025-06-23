<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	let status = 'activating';
	let message = '';

	onMount(async () => {
		const token = page.url.searchParams.get('token');
		
		if (!token) {
			status = 'error';
			message = 'No activation token provided';
			return;
		}

		try {
			const response = await fetch(`/api/authentication/verify?token=${token}`);
			
			if (response.ok) {
				status = 'success';
				message = 'Account activated successfully!';
				goto('/authentication/login', { replaceState: true });
			} else {
				status = 'error';
				message = 'Activation failed';
			}
		} catch (error) {
			status = 'error';
			message = 'Network error occurred';
		}
		
	});
</script>

<div class="activation-container">
	{#if status === 'activating'}
		<p>Activating your account...</p>
	{:else if status === 'success'}
		<h1>✅ Success!</h1>
		<p>{message}</p>
	{:else}
		<h1>❌ Error</h1>
		<p>{message}</p>
	{/if}
</div>

<style>
	.activation-container {
		text-align: center;
		padding: 2rem;
	}
</style>
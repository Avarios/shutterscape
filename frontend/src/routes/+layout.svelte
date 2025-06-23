<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	let { children } = $props();
	//TODO: Inject User from Store
	////TODO:Use Store to show messages with a toast
	let user = undefined;
</script>

<div class="flex h-dvh flex-col">
	<Header {user} />

	<main class="flex-1 overflow-auto">
		{@render children()}
	</main>

	<footer class="sticky bottom-0 left-0 right-0 bg-white p-4 shadow-md">
		<p>FOOTER</p>
	</footer>
</div>


<style></style>

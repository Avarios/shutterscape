<script lang=ts>
	import { onMount } from 'svelte';
	import Forward from '$lib/icons/forward.svelte';
	import Backwards from '$lib/icons/backwards.svelte';

	const getRandomImages = (): string[] => {
		if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
			throw new Error('Crypto API is not available');
		}
		const min = 10000;
		const max = 10000000;
		const count = 10;
		const range = max - min + 1;
		const randomValues = new Uint32Array(count);
		crypto.getRandomValues(randomValues);
		return Array.from(randomValues).map((value) => {
			let val = (value % range) + min;
			return `https://picsum.photos/seed/${val}/1280/800`;
		});
	};

	//TODO: GET RANDOM IMAGES FROM BACKEND
	const images: Array<string> = getRandomImages();

	let currentIndex = $state(0);

	function nextImage() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function prevImage() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}

	onMount(() => {
		const interval = setInterval(nextImage, 7000);
		return () => clearInterval(interval);
	});
</script>

<div class="container mx-auto w-full max-w-4xl">
	<div class="relative h-[1000px] w-full overflow-hidden rounded-2xl">
		{#each images as img, i}
			<img
				src={img}
				class="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
				style="opacity: {currentIndex === i ? 1 : 0};"
				alt="loaded from Database"
			/>
		{/each}
		
		<!-- Navigation Buttons -->
		<button
			onclick={prevImage}
			class="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow text-blue-400"
			><Backwards /></button
		>
		<button
			onclick={nextImage}
			class="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow"
			><Forward /></button
		>
	</div>

	<!-- Indicators -->
	<div class="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform gap-2">
		{#each images as _, i}
			<button
				class="h-4 w-4 rounded-full border border-gray-800"
				class:bg-black={currentIndex === i}
				class:bg-white={currentIndex !== i}
				onclick={() => currentIndex = i}
				aria-label="Go to image {i + 1}"
			></button>
		{/each}
	</div>
</div>


<script lang="ts">
	import type { Snippet } from "svelte";

    type ButtonProps =  {
		isPrimary: boolean;
		children?: Snippet;
		class?:string
		disabled?:boolean
	};
	let { isPrimary = false,  children, class:klass, ...rest }:ButtonProps = $props();
</script>

<button
	class="{klass} transform rounded-full px-6 py-2 text-white transition-all duration-300"
	class:bg-white-500={!isPrimary}
	class:bg-blue-500={isPrimary}
	class:text-blue-500={!isPrimary}
	class:text-white={isPrimary}
	class:border-blue-500={!isPrimary}
	class:border-1={!isPrimary}
	class:hover:scale-105={!rest.disabled}
	class:hover:bg-blue-600={!rest.disabled}
	class:hover:shadow-lg={!rest.disabled}
	class:bg-gray-200={rest.disabled}
	{...rest}
>
	{@render children?.()}
</button>

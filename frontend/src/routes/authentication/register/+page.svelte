<script lang="ts">
	import Button from '$lib/components/Buttons/Button.svelte';
    //TODO: Globale Error Handling
	let { email, password, passwordConfirm,name } = $state({ email: '', password: '', passwordConfirm:'', name: '' });
</script>

    <div class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div class="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-gray-700">Signup</h2>
            <form class="mt-6" method="POST">
                <div>
                    <div class="block text-sm font-medium text-gray-700">Email</div>
                    <input name="email" bind:value={email} type="email" class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" required>
                </div>
                <div>
                    <div class="block text-sm font-medium text-gray-700">Name</div>
                    <input name="name" bind:value={name} class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your Name" required>
                </div>
                <div class="mt-4">
                    <div class="block text-sm font-medium text-gray-700">Password</div>
                    <input name="password" bind:value={password} type="password" class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your password" required>
                </div>
                <div class="mt-4">
                    <div class="block text-sm font-medium text-gray-700">Password Confirm</div>
                    <input name="passwordConfirm" bind:value={passwordConfirm} type="password" class="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Reenter your password" required>
                </div>
                <Button class={"w-full mt-4 px-4 py-2"} isPrimary={true} disabled={!(email && password && passwordConfirm && (password === passwordConfirm))}>Register</Button>
            </form>
        </div>
    </div>

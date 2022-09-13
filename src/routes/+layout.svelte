<script>
	import '../app.css'
	import { supabase } from '../supabase'
	import { user } from '../stores/authStore.js'
	import Auth from '../components/Auth.svelte'
	import Navbar from '../components/Navbar.svelte'
	import { loadTodos } from '../stores/todoStore.js'
	import { browser } from '$app/environment'

	if (browser) console.clear()

	user.set(supabase.auth.user())

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session?.user)
		if (session?.user) {
			loadTodos()
		}
	})
</script>

<mark class="text-2xl">Main layout</mark>
<div class="container mx-auto my-6 max-w-lg">
	{#if $user}
		<Navbar />
		<slot />
	{:else}
		<Auth />
	{/if}
</div>

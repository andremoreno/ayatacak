<script>
	import "../app.css";

	const refresh = async () => {
        window.location.href = '/';
    };
</script>

<main class="grid h-screen place-items-center p-10" on:click={refresh}>
<slot />
</main>

<footer class="fixed lef-0 bottom-0 w-full text-center py-2 text-xs bg-zinc-900 text-gray-500 font-semibold">
	TAP THE PAGE TO GET ANOTHER RANDOM VERSE
</footer>
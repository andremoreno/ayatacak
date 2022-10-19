<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Ayat Alkitab Acak</title>
</svelte:head>

<div class="verse w-full lg:w-2/3 text-center p-10 pb-20">
    <div class="text-3xl mb-6">{data.content}</div>
    
    <div class="text-gray-300 text-lg">
        <span>&mdash;</span>
        {data.verse}
    </div>
</div>

<footer class="fixed left-0 bottom-0 w-full text-center p-2 text-xs bg-zinc-900 text-zinc-500 uppercase font-bold">
	Ketuk di mana saja untuk mendapatkan ayat yang baru
</footer>
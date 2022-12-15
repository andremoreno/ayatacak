<script>
    import Footer from '../lib/components/footer.svelte';
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Ayat Acak Alkitab</title>
</svelte:head>

<main class="grid h-screen place-items-center">
    <div class="verse w-full lg:w-2/3 text-center p-10 pb-20">
        <div class="text-3xl mb-6">{data.verse.content}</div>
        
        <div class="text-gray-300 text-lg">
            <span>&mdash;</span>
            {data.verse.verse}
        </div>
    </div>  
</main>

<Footer>
    <a href="/?ref={data.random}" class="p-4 block">Refresh</a>
</Footer>

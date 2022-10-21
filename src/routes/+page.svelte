<script>
    import Footer from '../lib/components/footer.svelte';
    /** @type {import('./$types').PageData} */
    export let data;

    const refresh = () => {
        window.location.href = '/';
    };
</script>

<svelte:head>
    <title>Ayat Acak Alkitab</title>
</svelte:head>

<main class="grid h-screen place-items-center" on:click={refresh} on:keypress={refresh}>
    <div class="verse w-full lg:w-2/3 text-center p-10 pb-20">
        <div class="text-3xl mb-6">{data.content}</div>
        
        <div class="text-gray-300 text-lg">
            <span>&mdash;</span>
            {data.verse}
        </div>
    </div>
</main>

<Footer>Ketuk di mana saja untuk mendapatkan ayat yang baru</Footer>

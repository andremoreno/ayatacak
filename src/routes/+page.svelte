<script>
    /** @type {import('./$types').PageData} */
    export let data;

    const refresh = async () => {
        window.location.href = '/';
    };
</script>

<svelte:head>
    <title>Ayat Alkitab Acak</title>
</svelte:head>

<div class="verse w-full lg:w-2/3 text-center">
    <div class="text-3xl mb-6"><button on:click={refresh}>{data.content}</button></div>
    
    <div class="text-gray-300 text-lg">
        <span>&mdash;</span>
        {data.verse}
    </div>
</div>
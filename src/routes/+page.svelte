<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Ayat Alkitab Acak</title>
</svelte:head>

<div class="verse w-full lg:w-2/3 text-center">
    <div class="text-3xl mb-6">{data.content}</div>
    
    <div class="text-gray-300 text-lg">
        <span>&mdash;</span>
        {data.verse}
    </div>
</div>
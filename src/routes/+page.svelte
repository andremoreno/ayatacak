<script>
    /** @type {import('./$types').PageData} */
    export let data;

    const reload = () => {
        location.href = '/';
    };
</script>

<svelte:head>
    <title>Ayat Acak Alkitab</title>
</svelte:head>

<main on:click|preventDefault={reload} on:keydown={reload} class="grid h-screen place-items-center cursor-pointer">
    <div class="verse w-full lg:w-2/3 text-center p-10 pb-20">
        <div class="text-3xl mb-6">{data.verse.content}</div>
        
        <div class="text-gray-300 text-lg">
            <span>&mdash;</span>
            {data.verse.verse}
        </div>
    </div>  
</main>
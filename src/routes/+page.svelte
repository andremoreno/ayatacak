<script>
    import html2canvas from 'html2canvas';

    /** @type {import('./$types').PageData} */
    export let data;

    const reload = () => {
        location.href = '/';
    };

    const download = () => {
        const verse = document.querySelector("#verse").innerHTML;

        html2canvas(document.querySelector("#passage")).then(canvas => {
            const image = canvas.toDataURL("image/png");
            const anchor = document.createElement("a");
            anchor.setAttribute("href", image);
            anchor.setAttribute("download", `${verse}.png`);
            anchor.click();
            anchor.remove();
        });
    }
</script>

<svelte:head>
    <title>Ayat Acak Alkitab</title>
</svelte:head>

<main on:click|preventDefault={reload} on:keydown={reload} class="grid h-screen place-items-center">
    <div id="passage" class="passage bg-zinc-800 w-full lg:w-2/3 text-center p-10 pb-20">
        <div class="text-3xl mb-6">{data.verse.content}</div>
        
        <div class="text-gray-300 text-lg">
            <span>&mdash;</span>
            <span id="verse">{data.verse.verse}</span>
        </div>
    </div>  
</main>

<div class="fixed top-4 right-12">
    <!-- svelte-ignore a11y-invalid-attribute -->
    <a href="#" on:click|preventDefault={download} class="cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg>
    </a>
</div>
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
    <a href="/" on:click|preventDefault={download}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
        </svg>
    </a>
</div>

<div class="fixed bottom-0 w-full p-3 text-sm">
    <div class="p-3 bg-zinc-900 text-zinc-500 rounded-md shadow">
        <div class="inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
            </svg>
            Ketuk atau klik di mana saja untuk menampilkan ayat yang baru.
        </div>
    </div>
</div>
<script>
    import Home from "../../lib/components/home.svelte";
</script>

<svelte:head>
    <title>Tentang</title>
</svelte:head>

<Home />

<div class="w-full lg:w-2/3 mx-auto text-center text-gray-300 p-10">
    <div class="border-b border-gray-500 pb-4 mb-4 font-bold text-2xl">Ayat Acak Alkitab</div>

    <div class="mb-3">
        <a href="/">ayatacak.vercel.app</a>
    </div>

    <div class="mb-20">
        Scraped from DAILYVERSES.NET and ALKITAB.MOBI.
    </div>

    <div class=" text-sm mb-20">
        <a href="https://ronsen.github.io/">Built with &hearts; by Ronald Nababan</a>
    </div>

    <div class="inline-flex gap-3 text-xs text-zinc-400">
        <a href="/privacy">Privasi</a>
        <!-- svelte-ignore security-anchor-rel-noreferrer -->
        <a href="https://trakteer.id/ronaldnababan/tip?quantity=1" target="_blank">Donasi</a>
    </div>
</div>

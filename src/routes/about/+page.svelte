<script>
    import Footer from "$lib/components/footer.svelte";
</script>

<svelte:head>
    <title>Tentang</title>
</svelte:head>

<div class="w-full lg:w-2/3 mx-auto text-center text-gray-300 p-10">
    <div class="border-b border-gray-500 pb-4 mb-4 font-bold text-2xl">Ayat Acak Alkitab</div>

    <div class="mb-3">
        <a href="/">ayatacak.vercel.app</a>
    </div>

    <div class="mb-20">
        Scraped from DAILYVERSES.NET and ALKITAB.MOBI.
    </div>

    <div class="flex justify-center mb-5">
        <a href="https://play.google.com/store/apps/details?id=xyz.sintaks.ayatacak">
            <img src="/playstore.png" alt="Play Store">
        </a>
    </div>

    <div class="mb-20">
        <a href="https://drive.google.com/file/d/1Gi6lAqtolEMiVd2ylFYc7cS2fekgwZ_2/view?usp=share_link" class="underline">Unduh berkas EXE</a>
    </div>

    <div class="inline-flex gap-3 text-sm text-zinc-400">
        <a href="/privacy">Privasi</a>
        <a href="https://trakteer.id/ronaldnababan/tip?quantity=1" target="_blank" rel="noreferrer">Donasi</a>
    </div>
</div>

<Footer>
    <a href="https://s.id/ronsen" class="block p-3" target="_blank" rel="noreferrer">Built by Ronald Nababan</a>
</Footer>
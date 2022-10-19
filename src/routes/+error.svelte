<script>
    import { page } from "$app/stores";
</script>

<div class="flex h-screen">
    <div class="m-auto text-center">
        <div class="flex justify-center gap-4">
            <h1 class="text-5xl text-zinc-800 border-r border-zinc-500 pr-4"><a href="/">{$page.status}</a></h1>
            <div class="mt-4">{$page.error.message}</div>
        </div>
    </div>
</div>

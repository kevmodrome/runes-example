<script>
    import { SvelteURL } from "svelte/reactivity";

    // import { SvelteMap } from "svelte/reactivity";
    // import { SvelteSet } from "svelte/reactivity";
    // import { SvelteDate } from "svelte/reactivity";

    const url = new SvelteURL("https://example.com/path");
</script>

<input bind:value={url.protocol} />
<input bind:value={url.hostname} />
<input bind:value={url.pathname} />

<hr />

<input bind:value={url.href} />

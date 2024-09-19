<script>
    import { Previous } from "./Previous.svelte.ts";

    let count = $state(0);

    const prev = new Previous(() => count);
</script>

<h2>Previous</h2>

<button onclick={() => count++}>
    Clicked {count} times
</button>
<p>Last value: {prev.current}</p>

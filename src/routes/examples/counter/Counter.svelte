<script lang="ts">
    import { Counter } from "./Counter.svelte.js";

    let { initial = 0 } = $props();

    const counter = new Counter(initial);
</script>

<button onclick={() => counter.count++}>
    Clicked {counter.count} times
</button>

<script>
    import List from "./List.svelte";
    let messages = $state(["Hello", "World"]);
</script>

{#snippet item(text)}
    {text}
{/snippet}

<h2>Slots</h2>

<List {messages} {item} />

<h2>Implicit Slots</h2>

<List {messages}>
    {#snippet item(text)}
        {text}
    {/snippet}
</List>
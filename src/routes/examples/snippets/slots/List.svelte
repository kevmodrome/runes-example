<script>
    let { messages, item } = $props()
</script>

<ul>
    {#each messages as message}
        <li>
            {@render item(message)}
        </li>
    {/each}
</ul>

<style>
    ul {
        background-color: lightgrey;
        padding: 1em;
    }
</style>
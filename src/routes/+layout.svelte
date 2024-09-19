<script>
    let { children } = $props();
</script>

<h1>Welcome to Svelte 5!</h1>

<nav>
    <ul>

        <li><a href="/">Home</a></li>
        <li><a href="/examples/counter">Counter</a></li>
        <li><a href="/examples/sse/">Server Sent Events</a></li>
        <li><a href="/examples/previous">Previous</a></li>
        <li><a href="/examples/snippets">Snippets</a></li>
        <li><a href="/examples/imports">Imports</a></li>
    </ul>
</nav>

{@render children()}
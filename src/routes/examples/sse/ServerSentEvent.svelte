<script>
    import { ServerSentEventReceiver } from "./ServerSentEvent.svelte.ts";

    const receiver = new ServerSentEventReceiver("https://sse.dev/test");
</script>

<div class="sse">
    {#each receiver.messages as { msg, now }}
        <p>{msg} - {now}</p>
    {/each}
</div>

<style>
    .sse {
        max-height: 300px;
        max-width: 200px;
        overflow-y: scroll;
    }
</style>

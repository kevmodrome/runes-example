<script>
    let images = $state([
        {
            href: "https://placehold.co/200",
            src: "https://placehold.co/200",
            caption: "RIP Placekitten",
            width: 200,
            height: 200,
        },
        {
            src: "https://placehold.co/400",
            caption: "RIP Placekitten",
            width: 400,
            height: 400,
        },
        {
            src: "https://placehold.co/80",
            caption: "RIP Placekitten",
            width: 80,
            height: 80,
        },
    ]);
</script>

<h2>New way of doing thangs!</h2>

{#snippet figure({ src, caption, width, height })}
	<figure>
		<img alt={caption} {src} {width} {height} />
		<figcaption>{caption}</figcaption>
	</figure>
{/snippet}

<div class="grid">
    {#each images as image}
        {#if image.href}
            <a href={image.href}>
                {@render figure(image)}
            </a>
        {:else}
            {@render figure(image)}
        {/if}
    {/each}
</div>


<style>
    figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 400px;
        background-color: lightgrey;
        padding: 1em;
        border: 2px solid grey;
        border-radius: 1em;
    }
</style>
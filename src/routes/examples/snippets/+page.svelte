<script>
    let images = $state([
        {
            href: "https://placehold.co/200",
            src: "https://placehold.co/200",
            caption: "RIP Placekitten",
            width: 200,
            height: 300,
        },
        {
            src: "https://placehold.co/400",
            caption: "RIP Placekitten",
            width: 400,
            height: 600,
        },
        {
            src: "https://placehold.co/8000",
            caption: "RIP Placekitten",
            width: 800,
            height: 1200,
        },
    ]);
</script>

<h2>Old way of doing thangs!</h2>

<a href="/examples/snippets/new">New way of doing thangs!</a>

{#each images as image}
    {#if image.href}
        <a href={image.href}>
            <figure>
                <img
                    src={image.src}
                    alt={image.caption}
                    width={image.width}
                    height={image.height}
                />
                <figcaption>{image.caption}</figcaption>
            </figure>
        </a>
    {:else}
        <figure>
            <img
                src={image.src}
                alt={image.caption}
                width={image.width}
                height={image.height}
            />
            <figcaption>{image.caption}</figcaption>
        </figure>
    {/if}
{/each}

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

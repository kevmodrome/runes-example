<script>
    let images = $state([
        {
            href: "https://placekitten.com/200/300",
            src: "https://placekitten.com/200/300",
            caption: "Kitten",
            width: 200,
            height: 300,
        },
        {
            src: "https://placekitten.com/400/600",
            caption: "Kitten",
            width: 400,
            height: 600,
        },
        {
            src: "https://placekitten.com/800/1200",
            caption: "Kitten",
            width: 800,
            height: 1200,
        },
    ]);
</script>

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

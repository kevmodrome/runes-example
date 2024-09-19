<script>
    import knockout from "./knockout.png";
</script>

<h2>Intro 🤙</h2>

<details>
    <summary>Siiiiggies</summary>
    <img src={knockout} alt="Knockout" />
</details>

<h2>Basic Runes</h2>

<div class="grid">
    <details>
        <summary> $state </summary>
        <h3>Old</h3>
        <pre>
let count = 0
let messages = []
messages = [...messages, 'Så här måste man göra här!']
        </pre>
        <h3>New</h3>
        <pre>
let count = $state(0)
let messages = $state([])
messages.push('Nu kan man göra så här!')
        </pre>
    </details>
    <details>
        <summary> $props </summary>
        <h3>Old</h3>
        <pre>
export let message
export let onclick
        </pre>
        <h3>New</h3>
        <pre>let &#123; message, onclick &#125; = $state(0)</pre>
    </details>

    <details>
        <summary>$effect & $derived </summary>
        <h3>Old</h3>
        <pre>
$: double = count * 2

$: &#123;
    localStorage.setItem("count", count)
&#125;
        </pre>
        <h3>New</h3>
        <pre>
let double = $derived(count * 2)

$effect(() => &#123;
    localStorage.setItem("count", count)
&#125;
        </pre>
    </details>
    <details>
        <summary>Other... </summary>
        <h3>$inspect</h3>
        <h3>$bindable</h3>
    </details>
</div>

<style>
    .grid {
        display: grid;
        gap: 1em;
    }
    summary {
        font-size: 1.3em;
        font-weight: bold;
        cursor: pointer;
    }
</style>

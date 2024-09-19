export class ServerSentEventReceiver {
    messages = $state([])
    source: EventSource
    constructor(src: string) {
        this.messages = []


        $effect(() => {
            this.source = new EventSource(src)
            this.source.onmessage = (event) => {
                this.messages.push(JSON.parse(event.data))
            }
        }
        )
    }
}
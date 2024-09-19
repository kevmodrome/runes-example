export class Previous {
    #previous = $state();
    #curr: any

    constructor(getter: any) {
        $effect(() => {
            this.#previous = this.#curr;
            this.#curr = getter();
        });
    }

    get current() {
        return this.#previous;
    }
}
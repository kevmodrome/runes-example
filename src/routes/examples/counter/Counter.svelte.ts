export class Counter {
    count = $state(0)

    constructor(value: number) {
        this.count = value
    }
}
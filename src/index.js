import { choice, remove } from "./helpers";
import { items } from "./foods";

const food = choice(items)

console.log(`I'd like one ${food}, please`)
console.log(`Here you go: ${food}`)
console.log("Delicious! May I have another?")
const item = remove(items, food)
const FRUITSLEFT = item.length
console.log(`I'm sorry, we're all out. We have ${FRUITSLEFT} left.`)
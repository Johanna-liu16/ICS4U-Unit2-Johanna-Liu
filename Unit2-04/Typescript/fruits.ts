/**
 *
 * This program uses stacks
 *
 * By:      Johanna Liu
 * Version: 1.0
 * Since:   2024-03-19
 */

import TheStack from './Stack'

const fruitStack = new TheStack()
console.log(`Fruits: ${fruitStack.showStack()}`)

// size of Stack
console.log(`The size of the stack is: ${fruitStack.stackSize()}`)

// empty?
console.log(`Is the stack empty? ${fruitStack.isEmpty()}`)

// push items
fruitStack.push('Strawberry')
fruitStack.push('Apple')
fruitStack.push('Banana')
console.log(`Fruits: ${fruitStack.showStack()}`)

// pop last item
let removedNumber = fruitStack.pop()
console.log(`Popped fruit: ${removedNumber}`)
// show updated stack
console.log(`Fruits: ${fruitStack.showStack()}`)

// size of Stack
console.log(`Fruits: ${fruitStack.stackSize()}`)

// empty?
console.log(`Is the stack empty? ${fruitStack.isEmpty()}`)

console.log(`\nDone`)

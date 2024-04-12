/**
 *
 * This program uses stacks
 *
 * By:      Johanna Liu
 * Version: 1.0
 * Since:   2024-03-19
 */

import TheStack from './Stack'

const numberStack = new TheStack()
console.log(`Numbers: ${numberStack.showStack()}`)

// size of Stack
console.log(`The size of the stack is: ${numberStack.stackSize()}`)

// empty?
console.log(`Is the stack empty? ${numberStack.isEmpty()}`)

// push items
numberStack.push('one')
numberStack.push('two')
numberStack.push('three')
console.log(`Numbers: ${numberStack.showStack()}`)

// pop last item
let removedNumber = numberStack.pop()
console.log(`Popped number: ${removedNumber}`)
// show updated stack
console.log(`Numbers: ${numberStack.showStack()}`)

// size of Stack
console.log(`Numbers: ${numberStack.stackSize()}`)

// empty?
console.log(`Is the stack empty? ${numberStack.isEmpty()}`)

// return top item
console.log(`Top item is ${numberStack.peekItem()}`)

// empty the stack
console.log(`Emptying the stack...`)
numberStack.clearStack()

// is stack empty
console.log(`Is the stack empty? ${numberStack.isEmpty()}`)

console.log(`\nDone`)

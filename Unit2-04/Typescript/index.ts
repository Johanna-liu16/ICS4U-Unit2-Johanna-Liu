/**
 *
 * This program uses stacks
 *
 * By:      Johanna Liu
 * Version: 1.0
 * Since:   2024-03-28
 */

import TheStack from './Stack'

const treatsStack = new TheStack()
console.log(`Snacks: ${treatsStack.showStack()}`)

// check stack size
console.log(`The size of the stack is: ${treatsStack.stackSize()}`)

// is the stack empty?
console.log(`Is the stack empty? ${treatsStack.isEmpty()}`)

// push items to stack
treatsStack.push('chocolate')
treatsStack.push('chips')
treatsStack.push('candy')
console.log(`Snacks: ${treatsStack.showStack()}`)

// pop last item
let removedTreat = treatsStack.pop()
console.log(`Popped treats: ${removedTreat}`)
// show updated stack
console.log(`Snacks: ${treatsStack.showStack()}`)

// stack size
console.log(`The size of the stack is: ${treatsStack.stackSize()}`)

// is stack empty
console.log(`Is the stack empty? ${treatsStack.isEmpty()}`)

console.log(`\nDone.`)
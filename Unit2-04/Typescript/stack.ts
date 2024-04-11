/** 
 * This program defines a stack
 * By:      Johanna Liu
 * Version: 1.0
 * Since:   2024-03-03
 */

class Stack {
    //create stack as list
    private stackList: string[]
  
    constructor() {
      this.stackList = []
    }
  
    public push(pushedString: string): void {
      // push the value onto the stack
      this.stackList.push(pushedString)
    }
  
    // getters
    public showStack(): string {
    // return the stack
      let stackValues: string = ""
  
      for (const value of this.stackList) {
        stackValues += value + ", "
      }
      stackValues = stackValues.slice(0, -2) // Remove the trailing comma
  
      return stackValues
    }
    // methods
    public pop(): string {
      let remove = ""
      if (this.stackList.length > 0) {
        // splice (last item, delete x amount)
        remove =  this.stackList.splice(-1, 1)
      } else {
        remove = "Stack Empty."
        }
      return remove
    }

    public isEmpty(): string {
      let stackStatus = ""
      if (this.stackList.length > 0) {
        stackStatus = "False"
      } else {
        stackStatus = "True"
      }
      return stackStatus
    }

    public stackSize(): string {
      let size = this.stackList.length
      return size
    }
  }
  
  // Export the class
  export default Stack;
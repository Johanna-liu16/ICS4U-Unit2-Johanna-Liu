hi/*
 * This program uses stacks
 *
 * @author  Johanna Liu
 * @version 1.0
 * @since   2024-03-29
 */

import java.util.ArrayList;
import java.util.List;

/**
* This is my stack.
*/
public class Stack {
    /**
     * Constructor.
     *
     */
    private List<String> stackList = new ArrayList<String>();

    /**
    * Push a string to end of stack.
    *
    * @param item push item
    */
    public void push(String item) {
        stackList.add(item);
    }

    /**
    * Show all items on stack.
    *
    * @return the full stack
    */
    public String showStack() {
        String values = "";
        for (int i = 0; i < stackList.size(); i++) {
            values = values + stackList.get(i) + ", ";
        }
        values = values.substring(0, values.length() - 2);
        return values;
    }

    /**
     * Pops a string from stack and returns it.
     *
     * @return the item
     *
     */
    public String pop() {
        String removedItem = "";
        if (stackList.size() > 0) {
            removedItem = stackList.remove(stackList.size() - 1);
        } else {
            removedItem = "Stack Empty!";
        }
        return removedItem;
    }
}

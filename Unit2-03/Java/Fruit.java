/*
 * This program uses oop
 *
 * @author  Johanna Liu
 * @version 1.0
 * @since   2024-03-028
 */

/**
 * This program uses stacks.
 */
final class Fruit {

    /**
     * Prevent instantiation.
     * Throw an exception IllegalStateException.
     * if this ever is called
     *
     * @throws IllegalStateException
     *
     */
    private Fruit() {
        throw new IllegalStateException("Cannot be instantiated");
    }

    /**
     * Process.
     *
     * @param args No args will be used
     *
     */
    public static void main(final String[] args) {
        // input
        final Stack fruit = new Stack();
        System.out.println("The size of the stack is: " + fruit.size());
        System.out.println("Is the stack empty? " + fruit.isEmpty());
        fruit.push("stawberry");
        fruit.push("apple");
        fruit.push("banana");
        System.out.println("Fruits: " + fruit.showStack());
        String removedNumber = fruit.pop();
        System.out.println("Popped fruit item: " + removedNumber);
        System.out.println("Fruits: " + fruit.showStack());
        System.out.println("The size of the stack is: " + fruit.size());
        System.out.println("Is the stack empty? " + fruit.isEmpty());

        System.out.println("\nDone.");
    }
}

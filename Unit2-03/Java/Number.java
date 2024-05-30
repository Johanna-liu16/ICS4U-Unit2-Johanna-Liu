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
final class Number {

    /**
     * Prevent instantiation.
     * Throw an exception IllegalStateException.
     * if this ever is called
     *
     * @throws IllegalStateException
     *
     */
    private Number() {
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
        final Stack number = new Stack();
        System.out.println("The size of the stack is: " + number.size());
        System.out.println("Is the stack empty? " + number.isEmpty());
        number.push("one");
        number.push("two");
        number.push("three");
        System.out.println("Numbers: " + number.showStack());
        String removedNumber = number.pop();
        System.out.println("Popped number item: " + removedNumber);
        System.out.println("Numbers: " + number.showStack());
        System.out.println("The size of the stack is: " + number.size());
        System.out.println("Is the stack empty? " + number.isEmpty());

        System.out.println("\nDone.");
    }
}

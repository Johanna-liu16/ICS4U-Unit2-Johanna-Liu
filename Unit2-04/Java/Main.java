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
final class Main {

    /**
     * Prevent instantiation.
     * Throw an exception IllegalStateException.
     * if this ever is called
     *
     * @throws IllegalStateException
     *
     */
    private Main() {
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
        final Stack snack = new Stack();
        System.out.println("The size of the stack is: " + snack.stackSize());
        System.out.println("Is the stack empty? " + snack.isEmpty());
        snack.push("Chips");
        snack.push("Chocolate");
        snack.push("Candy");
        System.out.println("Snacks: " + snack.showStack());
        String removedSnack = snack.pop();
        System.out.println("Popped snack item: " + removedSnack);
        System.out.println("Snacks: " + snack.showStack());
        System.out.println("The size of the stack is: " + snack.stackSize());
        System.out.println("Is the stack empty? " + snack.isEmpty());
        System.out.println("Top item is " + snack.peek());
        snack.clear();
        System.out.println("Emptying the stack...");
        System.out.println("Is the stack empty? " + snack.isEmpty());

        System.out.println("\nDone.");
    }
}

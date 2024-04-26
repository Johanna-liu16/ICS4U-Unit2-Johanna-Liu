/*
 * This program is an airplane class.
 *
 * @author  Johanna Liu
 * @version 1.0
 * @since   2024-04-24
 */

// This is the airplane class.
export class Airplane {
  private speed: number

  // Constructor.
  public Airplane() {
  }

  // Set speed
  public setSpeed(speed: number) {
      this.speed = speed
  }

  // Get the speed
  public getSpeed(): number {
      return this.speed
  }
}


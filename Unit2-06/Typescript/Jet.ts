/*
 * This program is teh jet class extends from the airplane
 *
 * @author Johanna Liu
 * @version 1.0
 * @since   2024-04-24
 */

import { Airplane } from "./Airplane"

export class Jet extends Airplane {
  private Multiplier: number = 2

     // Constructor.
     public Jet() {
     }

  public setSpeed(speed: number) {
      super.setSpeed(speed * this.MULTIPLIER)
  }

  public accelerate() {
      super.setSpeed(super.getSpeed() * 2)
  }
}

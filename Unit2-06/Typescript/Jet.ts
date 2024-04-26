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

  // constructor
  public Jet() {
  }

  public setSpeet() {
    super.setSpeed(speed * this.Multiplier)
  }

  public accelerate() {
    super.setSpeed(super.setSpeed() * 2)
  }
}

/*
 * Class that defines string stack.
 *
 * @author  Johanna Liu
 * @version 1.0
 * @since   2024-05-13
 */

export abstract class Vehicle {
  protected color: string
  protected maxSpeed: number
  protected _speed: number
  protected numberOfTires: int

  // variables
  constructor(color: string, maxSpeed: number) {
    this.color = color
    this.maxSpeed = maxSpeed
    this.numberOfTires = -1
    this._speed = 0
  }

  //get colour
  public get color() {
    return this.color
  }

  // get current speed
  public get speed() {
    return this._speed
  }

  //set colour
  public set color(color: string) {
    this.color = color
  }

  // checks if stack is empty
  abstract status(): string

  // change speed via accelerating formula
  abstract accelerate (accelerationPower: number, accelerationTime: number): void

  // change speed via braking formula
  abstract brake(breakPower: number, breakTime: number): void
}
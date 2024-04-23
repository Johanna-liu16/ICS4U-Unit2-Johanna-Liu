/** 
 * This program defines a stack
 * By:      Johanna Liu
 * Version: 1.0
 * Since:   2024-03-03
 */

import type { NamedTupleMember } from "typescript";

export default class Vehicle {
    private color: string
    private licencePlate: string
    readonly doorNumber: number
    readonly maxSpeed: number
    readonly theSpeed: number

  // variables
  constructor(color: string, licencePlate: string, doorNumber: number, maxSpeed: number) {
    this.color = color
    this.licencePlate = licencePlate
    this.doorNumber = doorNumber
    this.maxSpeed = maxSpeed
    this.theSpeed = 0
  }   

  // get color
  public color() {
    return this.color
  }

  public speed() {
    return this.maxSpeed
  }

  public getDoors() {
    return this.doorNumber
  }

  public speed() {
    return this.theSpeed
  }
}

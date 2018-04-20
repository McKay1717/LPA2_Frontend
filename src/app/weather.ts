export class Weather {
  summary: string = " "
  icon: string = " "
  precipIntensity: number = 0.0
  precipProbability: number = 0.0 
  temperature: number = 0.0
  humidity: number = 0.0
  pressure: number = 0.0

    constructor(values: Object = {}) {
      Object.assign(this, values);
  }
}

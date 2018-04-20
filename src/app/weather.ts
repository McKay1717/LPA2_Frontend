export class Weather {
  summary: string
  icon: string
  precipIntensity: number
  precipProbability: number
  temperature: number
  humidity: number
  pressure: number

    constructor(values: Object = {}) {
      Object.assign(this, values);
  }
}

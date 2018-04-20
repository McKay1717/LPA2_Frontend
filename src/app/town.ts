import { Weather } from './weather';

export class Town {
  id: number = -1
  town_name: string = " "
  latitude: number = 0.0
  longitude: number = 0.0
  weather: Weather = null

    constructor(values: Object = {}) {
      Object.assign(this, values);
  }

}

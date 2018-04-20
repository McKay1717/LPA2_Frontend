import { Weather } from './weather';

export class Town {
  id: number
  town_name: string
  latitude: number
  longitude: number
  weather: Weather

    constructor(values: Object = {}) {
      Object.assign(this, values);
  }

}

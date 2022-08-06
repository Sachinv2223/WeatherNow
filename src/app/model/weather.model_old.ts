export interface Root {
    location: Location
    current_observation: CurrentObservation
    forecasts: Forecast[]
  }
  
  export interface Location {
    city: string
    country: string
    lat: number
    long: number
    region: string
    timezone_id: string
    woeid: number
  }
  
  export interface CurrentObservation {
    astronomy: Astronomy
    atmosphere: Atmosphere
    condition: Condition
    pubDate: number
    wind: Wind
  }
  
  export interface Astronomy {
    sunrise: string
    sunset: string
  }
  
  export interface Atmosphere {
    humidity: number
    visibility: number
    pressure: number
    rising: number
  }
  
  export interface Condition {
    code: number
    text: string
    temperature: number
  }
  
  export interface Wind {
    chill: number
    direction: number
    speed: number
  }
  
  export interface Forecast {
    code: number
    date: number
    day: string
    high: number
    low: number
    text: string
  }
  